

import React, { useState } from "react";
import Layout from "../Utils/Layout";
import { useNavigate } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import CourseCard from "../../components/coursecard/CourseCard";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";
import "./admincourses.css";

const categories = [
  "Strength Training",
  "Cardio & Endurance",
  "Functional Fitness",
  "Yoga & Mindfulness",
  "Weight Loss & Fat Burn",
  "Sports-Specific Training",
  "Group Fitness & Dance",
  "Senior & Special Populations",
];

const AdminCourses = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [createdBy, setCreatedBy] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");
  const [imagePrev, setImagePrev] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false); // Custom Modal State

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const { courses, fetchCourses } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    setBtnLoading(true);

    const myForm = new FormData();

    myForm.append("title", title);
    myForm.append("description", description);
    myForm.append("category", category);
    myForm.append("price", price);
    myForm.append("createdBy", createdBy);
    myForm.append("duration", duration);
    myForm.append("file", image);

    try {
      const { data } = await axios.post(`${server}/api/course/new`, myForm, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      toast.success(data.message);
      setBtnLoading(false);
      await fetchCourses();
      setImage("");
      setTitle("");
      setDescription("");
      setDuration("");
      setImagePrev("");
      setCreatedBy("");
      setPrice("");
      setCategory("");
      setShowAddModal(false); // Close the modal after successful submission
    } catch (error) {
      toast.error(error.response.data.message);
      setBtnLoading(false);
    }
  };

  return (
    <Layout>
      
      <div className="admin-courses">
      
        {/* <div className="left"> */}
        <div className="add-course-btn-container">
            <button onClick={() => setShowAddModal(true)}>
              Add Course
            </button>
          </div>
          <div className="dashboard-content1">
            {courses && courses.length > 0 ? (
              courses.map((e) => {
                return <CourseCard key={e._id} course={e} />;
              })
            ) : (
              <p>No Courses Yet...</p>
            )}
          {/* </div> */}
        </div>
        

        
      </div>

          


      {/* Custom Modal */}
      {showAddModal && (
        <div className="custom-modal">
          <div className="custom-modal-content">
            <span className="custom-modal-close" onClick={() => setShowAddModal(false)}>
              &times;
            </span>
            <h2>Add Course</h2>
            <form onSubmit={submitHandler}>
              <label>Title</label>
              <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />

              <label>Description</label>
              <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />

              <label>Category</label>
              <select value={category} onChange={(e) => setCategory(e.target.value)} required>
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <label>Price</label>
              <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />

              <label>Duration (weeks)</label>
              <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} required />

              <label>Created By</label>
              <input type="text" value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} required />

              <label>Upload Thumbnail</label>
              <input type="file" onChange={changeImageHandler} required />
              {/* {imagePrev && <img src={imagePrev} alt="Course Thumbnail" className="img-preview" />} */}

              <button type="submit" disabled={btnLoading}>
                {btnLoading ? "Please Wait..." : "Add"}
              </button>
            </form>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default AdminCourses;
