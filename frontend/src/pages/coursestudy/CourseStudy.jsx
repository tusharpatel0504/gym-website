import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCourse(params.id);
  }, [params.id]);

  if (user && user.role !== "admin" && !user.subscription.includes(params.id)) {
    navigate("/");
    return null;
  }

  return (
    <>
      {course && (
        <div className="mainstudydiv">
          <div className="course-study-page">
            {/* Left Section */}
            <div className="leftstudy">
              <div className="studydivimg">
                <img src={course.image} alt={course.title} />
              </div>
              <div className="studydivtitle">
                <p>{course.title}</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="rigthstudy">
              <div className="studydivdisc">
                <h1>Course Description</h1>
               <div className="description1"> <p className="sameclassname">{course.description}</p></div>
                <h5 className="sameclassname">By - {course.createdBy}</h5>
                <h5 className="sameclassname">Duration - {course.duration} weeks</h5>
              </div>
              <div className="studylecbtn">
                <Link to={`/lectures/${course._id}`}>
                  <h2>Start Learning</h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
