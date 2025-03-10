import React from "react";
import "./courseCard.css";
import { useState } from "react";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";
import EditCourseModal from "../EditCourseModal/EditCourseModal";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditClick = () => {
    setShowEditModal(true);
  };

  const handleCloseModal = () => {
    setShowEditModal(false);
  };

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course?")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  const cleanImageUrl = course.image.replace("http://localhost:5000/", "");

  return (
    <div className="course-card">
      <div className="course-card-content-container">
        <img src={cleanImageUrl} alt="" className="course-image" />
        <h3>{course.title}</h3>
        <p>Instructor - {course.createdBy}</p>
        <p>Duration - {course.duration} weeks</p>
        <p>Price - ₹{course.price}</p>
      </div>

      {isAuth ? (
        <>
          {user && user.role !== "admin" ? (
            <>
              {user.subscription.includes(course._id) ? (
                <button
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="common-btn-study"
                >
                  Study
                </button>
              ) : (
                <button
                  onClick={() => navigate(`/course/${course._id}`)}
                  className="common-btn1"
                >
                  Get Started
                </button>
              )}
            </>
          ) : (
            <button
              onClick={() => navigate(`/course/study/${course._id}`)}
              className="common-btn-study-admin"
            >
              Study
            </button>
          )}
        </>
      ) : (
        <button onClick={() => navigate("/login")} className="common-btn">
          Get Started
        </button>
      )}

      <br />

      {user && user.role === "admin" && (
        <>
          <button
            onClick={() => deleteHandler(course._id)}
            className="common-btn2-delete"
          >
            Delete
          </button>
          <button onClick={handleEditClick} className="common-btn-edit">
            Edit
          </button>
          <EditCourseModal
            show={showEditModal}
            handleClose={handleCloseModal}
            courseId={course._id}
            onCourseUpdated={fetchCourses}
          />
        </>
      )}
    </div>
  );
};

export default CourseCard;