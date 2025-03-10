import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { server } from "../../main";
import './EditCourseModal.css';

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

const EditCourseModal = ({ show, handleClose, courseId, onCourseUpdated }) => {
  const [course, setCourse] = useState({
    title: '',
    description: '',
    image: '',
    price: '',
    duration: '',
    category: '',
    createdBy: '',
  });

  const [imagePrev, setImagePrev] = useState('');
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // Step tracking

  useEffect(() => {
    if (courseId && show) {
      const fetchCourse = async () => {
        try {
          const response = await axios.get(`${server}/api/course/${courseId}`);
          setCourse(response.data);
          setImagePrev(response.data.image);
        } catch (error) {
          console.error('Error fetching course data', error);
        }
      };
      fetchCourse();
    }
  }, [courseId, show]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourse(prev => ({ ...prev, [name]: value }));
  };

  const changeImageHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePrev(reader.result);
        setCourse(prev => ({ ...prev, image: file }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const formData = new FormData();
      Object.entries(course).forEach(([key, value]) => {
        if (value && key !== 'image') formData.append(key, value);
        if (value instanceof File) formData.append('file', value);
      });

      await axios.put(`${server}/api/course/${courseId}`, formData, {
        headers: { token: localStorage.getItem("token") }
      });
      onCourseUpdated();
      handleClose();
    } catch (error) {
      console.error('Error updating course', error);
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="close-btn" onClick={handleClose}>&times;</button>
        </div>
  
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <div>
              <div className="form-group">
                <label>Title</label>
                <input type="text" name="title" value={course.title} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Description</label>
                <textarea name="description" value={course.description} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Category</label>
                <select name="category" value={course.category} onChange={handleChange} required>
                  <option value="">Select Category</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <button type="button" className="next-btn" onClick={() => setStep(2)}>Next</button>
            </div>
          )}

          {step === 2 && (
            <div>
              <div className="form-group">
                <label>Price</label>
                <input type="number" name="price" value={course.price} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Duration (hours)</label>
                <input type="number" name="duration" value={course.duration} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Created By</label>
                <input type="text" name="createdBy" value={course.createdBy} onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Upload Thumbnail</label>
                <input type="file" onChange={changeImageHandler} accept="image/*" />
                {imagePrev && <img src={imagePrev} alt="Preview" className="image-preview" />}
              </div>

              <div className="button-group">
                <button type="button" className="prev-btn" onClick={() => setStep(1)}>Previous</button>
                <button type="submit" className="submit-btn" disabled={loading}>
                  {loading ? 'Saving...' : 'Update Course'}
                </button>
              </div>
            </div>
          )}
        </form>
      </div>
      </div>

  );
};

export default EditCourseModal;
