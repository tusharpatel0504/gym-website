import React from "react";
import "./courses.css";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";


const Courses = () => {
  const { courses } = CourseData();

  return (
    <div className="courses">
      <div className="course-heading">
      <h2>What Would You Like To </h2>
      <h3>learn?</h3>
      </div>
     

      <div className="course-container">
        {courses && courses.length > 0 ? (
          courses.map((e) => <CourseCard key={e._id} course={e} />)
        ) : (
          <p>No Courses Yet!</p>
        )}
      </div>
    </div>
  );
};

export default Courses;
