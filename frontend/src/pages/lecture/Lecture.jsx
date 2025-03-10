import React, { useEffect, useState, useRef, useCallback } from "react";
import "./lecture.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Loading from "../../components/loading/Loading";
import toast from "react-hot-toast";
import { TiTick } from "react-icons/ti";
import ReactPlayer from "react-player";
import screenfull from "screenfull";
import {
  FaPlay,
  FaPause,
  FaVolumeMute,
  FaVolumeUp,
  FaExpand,
  FaCompress,
  FaBackward,
  FaForward,
} from "react-icons/fa";

const Lecture = ({ user }) => {
  const [lectures, setLectures] = useState([]);
  const [lecture, setLecture] = useState({});
  const [loading, setLoading] = useState(true);
  const [lecLoading, setLecLoading] = useState(false);
  const [show, setShow] = useState(false);
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [video, setvideo] = useState("");
  const [videoPrev, setVideoPrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Video Player States
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [hoverTime, setHoverTime] = useState(null);
  const [seeking, setSeeking] = useState(false);

  const playerRef = useRef(null);
  const containerRef = useRef(null);
  const timelineContainerRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const seekDebounceRef = useRef(null);
  const volumeRef = useRef(null);
  const videoClickRef = useRef(false);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  async function fetchLectures() {
    try {
      const { data } = await axios.get(`${server}/api/lectures/${params.id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLectures(data.lectures);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  async function fetchLecture(id) {
    setLecLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/lecture/${id}`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setLecture(data.lecture);
      setLecLoading(false);
    } catch (error) {
      console.log(error);
      setLecLoading(false);
    }
  }

  const changeVideoHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setVideoPrev(reader.result);
      setvideo(file);
    };
  };

  const submitHandler = async (e) => {
    setBtnLoading(true);
    e.preventDefault();
    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("file", video);

    try {
      const { data } = await axios.post(
        `${server}/api/course/${params.id}`,
        myForm,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        }
      );

      toast.success(data.message);
      setBtnLoading(false);
      setShow(false);
      fetchLectures();
      setTitle("");
      setDescription("");
      setvideo("");
      setVideoPrev("");
      setUploadProgress(0);
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
      setUploadProgress(0);
    }
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this lecture")) {
      try {
        const { data } = await axios.delete(`${server}/api/lecture/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchLectures();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const [completed, setCompleted] = useState("");
  const [completedLec, setCompletedLec] = useState("");
  const [lectLength, setLectLength] = useState("");
  const [progress, setProgress] = useState([]);
  const handleClose = () => {
    setShow(false);
  };
  
  async function fetchProgress() {
    try {
      const { data } = await axios.get(
        `${server}/api/user/progress?course=${params.id}`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );

      setCompleted(data.courseProgressPercentage);
      setCompletedLec(data.completedLectures);
      setLectLength(data.allLectures);
      setProgress(data.progress);
    } catch (error) {
      console.log(error);
    }
  }

  const addProgress = async (id) => {
    try {
      const { data } = await axios.post(
        `${server}/api/user/progress?course=${params.id}&lectureId=${id}`,
        {},
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      console.log(data.message);
      fetchProgress();
    } catch (error) {
      console.log(error);
    }
  };

  const handleTimelineClick = useCallback((e) => {
    if (!timelineContainerRef.current) return;
    
    const rect = timelineContainerRef.current.getBoundingClientRect();
    const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
    
    if (seekDebounceRef.current) {
      clearTimeout(seekDebounceRef.current);
    }
    
    seekDebounceRef.current = setTimeout(() => {
      playerRef.current?.seekTo(percent, 'fraction');
    }, 50);
  }, []);

  const handleProgress = useCallback(({ playedSeconds }) => {
    if (!seeking) {
      setCurrentTime(playedSeconds);
      const percent = playedSeconds / duration;
      if (timelineContainerRef.current) {
        timelineContainerRef.current.style.setProperty("--progress-position", percent);
      }
    }
  }, [seeking, duration]);

  const handleVideoClick = useCallback((e) => {
    if (e.target.closest('.video-controls-container')) {
      videoClickRef.current = true;
      return;
    }

    if (!videoClickRef.current) {
      setPlaying(!playing);
    }
    videoClickRef.current = false;
  }, [playing]);

  const handleVolumeChange = useCallback((e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (volumeRef.current) {
      volumeRef.current.style.setProperty('--volume-percent', `${newVolume * 100}%`);
    }
  }, []);

  const handleKeyDown = useCallback((e) => {
    // Check if the focused element is an input field
    const isInputFocused = document.activeElement.tagName === 'INPUT' || document.activeElement.tagName === 'TEXTAREA';
  
    if (isInputFocused) {
      return; // Do nothing if an input field is focused
    }
  
    const keyHandlers = {
      Space: () => setPlaying(prev => !prev),
      KeyK: () => setPlaying(prev => !prev),
      ArrowRight: () => playerRef.current?.seekTo(currentTime + 5),
      ArrowLeft: () => playerRef.current?.seekTo(currentTime - 5),
      KeyL: () => playerRef.current?.seekTo(currentTime + 10),
      KeyJ: () => playerRef.current?.seekTo(currentTime - 10),
      KeyM: () => setMuted(prev => !prev),
      KeyF: () => handleFullScreen(),
      Digit0: () => playerRef.current?.seekTo(0),
      Digit1: () => playerRef.current?.seekTo(duration * 0.1),
      Digit2: () => playerRef.current?.seekTo(duration * 0.2),
      Digit3: () => playerRef.current?.seekTo(duration * 0.3),
      Digit4: () => playerRef.current?.seekTo(duration * 0.4),
      Digit5: () => playerRef.current?.seekTo(duration * 0.5),
      Digit6: () => playerRef.current?.seekTo(duration * 0.6),
      Digit7: () => playerRef.current?.seekTo(duration * 0.7),
      Digit8: () => playerRef.current?.seekTo(duration * 0.8),
      Digit9: () => playerRef.current?.seekTo(duration * 0.9),
      ArrowUp: () => handleVolumeChange({ target: { value: Math.min(1, volume + 0.1) } }),
      ArrowDown: () => handleVolumeChange({ target: { value: Math.max(0, volume - 0.1) } }),
    };
  
    if (keyHandlers[e.code]) {
      e.preventDefault();
      keyHandlers[e.code]();
      showControls();
    }
  }, [currentTime, duration, volume, handleVolumeChange]);

  const handleFullScreen = useCallback(() => {
    if (screenfull.isEnabled) {
      screenfull.toggle(containerRef.current);
      setIsFullScreen(!isFullScreen);
    }
  }, [isFullScreen]);

  const showControls = useCallback(() => {
    setControlsVisible(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (!seeking) {
        setControlsVisible(false);
      }
    }, 2000);
  }, [seeking]);

  const formatTime = useCallback((seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [h, m > 9 ? m : (h ? '0' + m : m || '0'), s > 9 ? s : '0' + s]
      .filter(Boolean)
      .join(':');
  }, []);

  useEffect(() => {
    fetchLectures();
    fetchProgress();
    
    const handleMouseMove = showControls;
    const handleKeyPress = showControls;
    
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("keydown", handleKeyPress);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("keydown", handleKeyPress);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [fetchLectures, showControls, handleKeyDown]);

  useEffect(() => {
    const handleFullScreenChange = () => {
      setIsFullScreen(screenfull.isFullscreen);
    };

    if (screenfull.isEnabled) {
      screenfull.on('change', handleFullScreenChange);
    }

    return () => {
      if (screenfull.isEnabled) {
        screenfull.off('change', handleFullScreenChange);
      }
    };
  }, []);

  useEffect(() => {
    if (volumeRef.current) {
      volumeRef.current.style.setProperty('--volume-percent', `${volume * 100}%`);
    }
  }, [volume]);

  return (
    <>
      {loading ? (
      <Loading />
    ) : (
      <>
        <div className="lecture-page">
          {/* Add Lecture Form */}
          {show && (
            <div className="back-add-lecture">
              {/* Semi-transparent overlay */}
              <div className="overlay" onClick={handleClose}></div>
              <div className="lecture-form-2">
                <h2>Add Lecture</h2>
                <button className="close-button-lecture" onClick={handleClose}>×</button>
                <form onSubmit={submitHandler}>
                  <label htmlFor="text">Title</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />

                  <label htmlFor="text">Description</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />

                  <input
                    type="file"
                    placeholder="choose video"
                    onChange={changeVideoHandler}
                    required
                  />

                  {videoPrev && (
                    <video
                      src={videoPrev}
                      alt="preview"
                      width={300}
                      controls
                    ></video>
                  )}

                  {uploadProgress > 0 && (
                    <div className="upload-progress">
                      <progress value={uploadProgress} max={100}></progress>
                      <span>{uploadProgress}%</span>
                    </div>
                  )}

                  <button
                    disabled={btnLoading}
                    type="submit"
                    className="common-btn"
                  >
                    {btnLoading ? "Please Wait..." : "Add"}
                  </button>
                </form>
              </div>
            </div>
          )}
<div className="left1">
            {lecLoading ? (
              <Loading />
            ) : (
              <>
                {lecture.video ? (
                  <>
                    <div
                      ref={containerRef}
                      className={`video-container ${!playing ? "paused" : ""} ${isFullScreen ? "full-screen" : ""}`}
                      data-volume-level={muted ? "muted" : volume > 0.5 ? "high" : "low"}
                      onClick={handleVideoClick}
                    >
                      <ReactPlayer
                        ref={playerRef}
                        url={lecture.video}
                        playing={!show && playing} // Pause video when form is open
                        muted={muted}
                        volume={volume}
                        playbackRate={playbackRate}
                        width="100%"
                        height="100%"
                        progressInterval={100}
                        onProgress={handleProgress}
                        onDuration={setDuration}
                        onContextMenu={(e) => e.preventDefault()}
                        config={{
                          file: {
                            attributes: {
                              controlsList: 'nodownload'
                            }
                          }
                        }}
                      />

                      <div className="video-overlay">
                        <FaPlay className="play-icon" />
                      </div>

                      <div className={`video-controls-container ${controlsVisible ? "visible" : ""}`}>
           
                          <div
                            ref={timelineContainerRef}
                            className="timeline-container"
                            onClick={handleTimelineClick}
                            onMouseDown={() => setSeeking(true)}
                            onMouseUp={() => setSeeking(false)}
                            onMouseLeave={() => {
                              setSeeking(false);
                              setHoverTime(null);
                            }}
                            onMouseMove={(e) => {
                              const rect = timelineContainerRef.current.getBoundingClientRect();
                              const percent = Math.min(Math.max(0, e.clientX - rect.left), rect.width) / rect.width;
                              setHoverTime(percent * duration);
                              timelineContainerRef.current.style.setProperty("--preview-position", percent);
                            }}
                          >
                            <div className="timeline">
                              {hoverTime !== null && (
                                <div 
                                  className="hover-time" 
                                  style={{ 
                                    left: `${(hoverTime / duration) * 100}%`
                                  }}
                                >
                                  {formatTime(hoverTime)}
                                </div>
                              )}
                              <div className="thumb-indicator"></div>
                            </div>
                          </div>

                          <div className="controls">
                            <button onClick={() => setPlaying(!playing)}>
                              {playing ? <FaPause /> : <FaPlay />}
                            </button>
                            
                            <button onClick={() => playerRef.current?.seekTo(currentTime - 10)}>
                              <FaBackward />
                            </button>
                            
                            <button onClick={() => playerRef.current?.seekTo(currentTime + 10)}>
                              <FaForward />
                            </button>

                            <div className="volume-container">
                              <button onClick={() => setMuted(!muted)}>
                                {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                              </button>
                              <input
                                ref={volumeRef}
                                className="volume-slider"
                                type="range"
                                min={0}
                                max={1}
                                step="any"
                                value={volume}
                                onChange={handleVolumeChange}
                              />
                            </div>

                            <div className="duration-container">
                              <div className="current-time">{formatTime(currentTime)}</div>
                              /
                              <div className="total-time">{formatTime(duration)}</div>
                            </div>

                            <select
                              value={playbackRate}
                              onChange={(e) => setPlaybackRate(parseFloat(e.target.value))}
                              className="playback-rate"
                            >
                              {[0.25, 0.5, 0.75, 1, 1.25, 1.5, 1.75, 2].map(rate => (
                                <option key={rate} value={rate}>
                                  {rate}x
                                </option>
                              ))}
                            </select>

                            <button onClick={handleFullScreen}>
                              {isFullScreen ? <FaCompress /> : <FaExpand />}
                            </button>
                          </div>
                        </div>
                      </div>

                      <p className="lecture-title-study">{lecture.title}</p>
                    <p className="lecture-description-study">{lecture.description}</p>
                  </>
                ) : (
                  <h1 className="pleasetxt">Please Select a Lecture</h1>
                )}
              </>
            )}
          </div>

          {/* Right Section (Lecture List) */}
          <div className="right">
            {user && user.role === "admin" && (
              <button className="common-btn-addll" onClick={() => {
                setShow(!show);
                setPlaying(false); // Pause video when form is opened
              }}>
                {show ? "Close" : "Add Lecture +"}
              </button>
            )}
              {lectures && lectures.length > 0 ? (
                lectures.map((e, i) => (
                  <>
                  <div
                  className="button-container">
                    <div
                      onClick={() => fetchLecture(e._id)}
                      key={i}
                      className={`lecture-number ${
                        lecture._id === e._id && "active"
                      }`}
                    >
                      {i + 1}. {e.title}{" "}
                      {progress[0] &&
                        progress[0].completedLectures.includes(e._id) && (
                          <span
                            style={{
                              background: "red",
                              padding: "2px",
                              borderRadius: "6px",
                              color: "greenyellow",
                            }}
                          >
                            <TiTick />
                          </span>
                        )}
                    </div>
                    {user && user.role === "admin" && (
                      <button
                        className="common-btn-delete"
                        onClick={() => deleteHandler(e._id)}
                      >
                        Delete 
                      </button>
                    )}
                  </div>
                  </>
                ))
              ) : (
                <p>No Lectures Yet!</p>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Lecture;