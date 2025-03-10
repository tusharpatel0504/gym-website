

import React, { useState } from 'react';
import axios from 'axios';
import { server } from "../../main";
import toast from "react-hot-toast";
import './ContactFormModal.css';

const ContactFormModal = ({ show, handleClose, onFormSubmitted }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    email: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    fitnessGoals: [],
    fitnessGoalTimeframe: "",
    fitnessLevel: "",
    exerciseFrequency: "",
    previousTraining: "",
    workoutPreferences: [],
    workoutLocation: "",
    workoutDuration: "",
    workoutDays: "",
    physicalLimitations: "",
    conditions: [],
    motivation: "",
    trainingStyle: "",
    workoutAloneOrGroup: "",
    trackProgress: "",
    dietaryRecommendations: "",
    updateFrequency: "",
    additionalNotes: ""
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked ? [...prevData[name], value] : prevData[name].filter((item) => item !== value)
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleNextStep = () => setStep((prevStep) => prevStep + 1);
  const handlePrevStep = () => setStep((prevStep) => prevStep - 1);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(`${server}/api/user/contact`, formData);
      toast.success(data.message);
      onFormSubmitted();
      handleClose();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content5">
        <div className="modal-header">
          <h2>Contact Us</h2>
          <button className="close-button" onClick={handleClose}>×</button>
        </div>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {step === 1 && (
              <>
                <div className="form-group">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}
            {step === 2 && (
              <>
                <div className="form-group">
                  <label>Age</label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Gender</label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Height (cm or ft/in)</label>
                  <input
                    type="text"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>Weight (kg or lbs)</label>
                  <input
                    type="text"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="button" className="prev-button" onClick={handlePrevStep}>
                  Previous
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}
            {step === 3 && (
  <>
    <div className="form-group">
      <label>What are your primary fitness goals?</label>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="fitnessGoals"
          value="Lose weight"
          onChange={handleChange}
        />
        <label>Lose weight</label>
      </div>
      <div className="checkbox-container">
        <input
          type="checkbox"
          name="fitnessGoals"
          value="Build muscle"
          onChange={handleChange}
        />
        <label>Build muscle</label>
      </div>
      {/* Add more checkboxes as needed */}
    </div>
    <div className="form-group">
      <label>What is your timeframe for achieving these goals?</label>
      <input
        type="text"
        name="fitnessGoalTimeframe"
        value={formData.fitnessGoalTimeframe}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label>What is your current fitness level?</label>
      <select
        name="fitnessLevel"
        value={formData.fitnessLevel}
        onChange={handleChange}
        required
      >
        <option value="">Select Fitness Level</option>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </div>
    <button type="button" className="prev-button" onClick={handlePrevStep}>
      Previous
    </button>
    <button type="button" className="next-button" onClick={handleNextStep}>
      Next
    </button>
  </>
)}
            {step === 4 && (
              <>
                <div className="form-group">
                  <label>How often do you exercise?</label>
                  <select
                    name="exerciseFrequency"
                    value={formData.exerciseFrequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Frequency</option>
                    <option value="1-2 times a week">1-2 times a week</option>
                    <option value="3-4 times a week">3-4 times a week</option>
                    <option value="5 or more times a week">5 or more times a week</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Do you have any previous training experience?</label>
                  <select
                    name="previousTraining"
                    value={formData.previousTraining}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Where do you prefer to workout?</label>
                  <select
                    name="workoutLocation"
                    value={formData.workoutLocation}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="Gym">Gym</option>
                    <option value="Home">Home</option>
                    <option value="Outdoors">Outdoors</option>
                  </select>
                </div>
                <button type="button" className="prev-button" onClick={handlePrevStep}>
                  Previous
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}
            {step === 5 && (
              <>
                <div className="form-group">
                  <label>How long do you usually workout?</label>
                  <select
                    name="workoutDuration"
                    value={formData.workoutDuration}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Duration</option>
                    <option value="Less than 30 minutes">Less than 30 minutes</option>
                    <option value="30-60 minutes">30-60 minutes</option>
                    <option value="More than 60 minutes">More than 60 minutes</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Which days do you prefer to workout?</label>
                  <input
                    type="text"
                    name="workoutDays"
                    value={formData.workoutDays}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>What motivates you to stay fit?</label>
                  <input
                    type="text"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="button" className="prev-button" onClick={handlePrevStep}>
                  Previous
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}
            {step === 6 && (
              <>
                <div className="form-group">
                  <label>What is your preferred training style?</label>
                  <select
                    name="trainingStyle"
                    value={formData.trainingStyle}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Training Style</option>
                    <option value="Strength Training">Strength Training</option>
                    <option value="Cardio">Cardio</option>
                    <option value="HIIT">HIIT</option>
                    <option value="Yoga/Pilates">Yoga/Pilates</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Do you prefer to workout alone or in a group?</label>
                  <select
                    name="workoutAloneOrGroup"
                    value={formData.workoutAloneOrGroup}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Preference</option>
                    <option value="Alone">Alone</option>
                    <option value="Group">Group</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>How do you track your progress?</label>
                  <select
                    name="trackProgress"
                    value={formData.trackProgress}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Method</option>
                    <option value="Fitness App">Fitness App</option>
                    <option value="Journal">Journal</option>
                    <option value="Photos">Photos</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <button type="button" className="prev-button" onClick={handlePrevStep}>
                  Previous
                </button>
                <button type="button" className="next-button" onClick={handleNextStep}>
                  Next
                </button>
              </>
            )}
            {step === 7 && (
              <>
                <div className="form-group">
                  <label>Do you have any dietary recommendations?</label>
                  <input
                    type="text"
                    name="dietaryRecommendations"
                    value={formData.dietaryRecommendations}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>How often would you like to receive updates?</label>
                  <select
                    name="updateFrequency"
                    value={formData.updateFrequency}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Frequency</option>
                    <option value="Weekly">Weekly</option>
                    <option value="Bi-weekly">Bi-weekly</option>
                    <option value="Monthly">Monthly</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Any additional notes or comments?</label>
                  <textarea
                    name="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={handleChange}
                  />
                </div>
                <button type="button" className="prev-button" onClick={handlePrevStep}>
                  Previous
                </button>
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactFormModal;