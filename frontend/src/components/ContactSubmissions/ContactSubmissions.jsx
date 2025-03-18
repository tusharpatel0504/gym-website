
import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../../main";
import "./contactsubmissions.css";
import Sidebar from "../../admin/Utils/Sidebar";

const ContactSubmissions123 = () => {
  const [submissions, setSubmissions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getDetails = async () => {
      const data = await axios.get(`${server}/api/contact`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      
      setSubmissions(data.data);
    };

    getDetails();
  }, []);

  const filteredSubmissions = submissions.filter(
    (submission) =>
      submission.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      submission.mobileNumber.includes(searchTerm)
  );

  const convertToCSV = (data) => {
    const fields = [
      "S.No",
      "Name",
      "Mobile",
      "Email",
      "Age",
      "Gender",
      "Height",
      "Weight",
      "Fitness Goals",
      "Goal Timeframe",
      "Fitness Level",
      "Exercise Frequency",
      "Previous Training",
      "Workout Location",
      "Workout Duration",
      "Workout Days",
      "Motivation",
      "Training Style",
      "Workout Alone or Group",
      "Track Progress",
      "Dietary Recommendations",
      "Update Frequency",
      "Additional Notes",
    ];

    const csvRows = [];
    csvRows.push(fields.join(","));

    data.forEach((submission, index) => {
      const row = [
        index + 1,
        submission.fullName,
        submission.mobileNumber,
        submission.email,
        submission.age,
        submission.gender,
        submission.height,
        submission.weight,
        submission.fitnessGoals.join(", "),
        submission.fitnessGoalTimeframe,
        submission.fitnessLevel,
        submission.exerciseFrequency,
        submission.previousTraining,
        submission.workoutLocation,
        submission.workoutDuration,
        submission.workoutDays,
        submission.motivation,
        submission.trainingStyle,
        submission.workoutAloneOrGroup,
        submission.trackProgress,
        submission.dietaryRecommendations,
        submission.updateFrequency,
        submission.additionalNotes,
      ];
      csvRows.push(row.join(","));
    });

    return csvRows.join("\n");
  };

  const downloadCSV = () => {
    const csv = convertToCSV(filteredSubmissions);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "contact_submissions.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <Sidebar />
      <div className="contact-submissions123">
        <h2 className="heading123">Contact Submissions</h2>
        <input
          type="text"
          className="search-input123"
          placeholder="Search by name or mobile number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="download-button123" onClick={downloadCSV}>
          Download CSV
        </button>
        <div className="submissions-list123">
          <div className="table-container123">
            <table className="table123">
              <thead>
                <tr className="header-row123">
                  <th className="table-header123">S.No</th>
                  <th className="table-header123">Name</th>
                  <th className="table-header123">Mobile</th>
                  <th className="table-header123">Email</th>
                  <th className="table-header123">Age</th>
                  <th className="table-header123">Gender</th>
                  <th className="table-header123">Height</th>
                  <th className="table-header123">Weight</th>
                  <th className="table-header123">Fitness Goals</th>
                  <th className="table-header123">Goal Timeframe</th>
                  <th className="table-header123">Fitness Level</th>
                  <th className="table-header123">Exercise Frequency</th>
                  <th className="table-header123">Previous Training</th>
                  <th className="table-header123">Workout Location</th>
                  <th className="table-header123">Workout Duration</th>
                  <th className="table-header123">Workout Days</th>
                  <th className="table-header123">Motivation</th>
                  <th className="table-header123">Training Style</th>
                  <th className="table-header123">Workout Alone or Group</th>
                  <th className="table-header123">Track Progress</th>
                  <th className="table-header123">Dietary Recommendations</th>
                  <th className="table-header123">Update Frequency</th>
                  <th className="table-header123">Additional Notes</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubmissions.map((submission, index) => (
                  <tr key={submission._id} className="table-row123">
                    <td className="table-cell123">{index + 1}</td>
                    <td className="table-cell123">{submission.fullName}</td>
                    <td className="table-cell123">{submission.mobileNumber}</td>
                    <td className="table-cell123">{submission.email}</td>
                    <td className="table-cell123">{submission.age}</td>
                    <td className="table-cell123">{submission.gender}</td>
                    <td className="table-cell123">{submission.height}</td>
                    <td className="table-cell123">{submission.weight}</td>
                    <td className="table-cell123">{submission.fitnessGoals.join(", ")}</td>
                    <td className="table-cell123">{submission.fitnessGoalTimeframe}</td>
                    <td className="table-cell123">{submission.fitnessLevel}</td>
                    <td className="table-cell123">{submission.exerciseFrequency}</td>
                    <td className="table-cell123">{submission.previousTraining}</td>
                    <td className="table-cell123">{submission.workoutLocation}</td>
                    <td className="table-cell123">{submission.workoutDuration}</td>
                    <td className="table-cell123">{submission.workoutDays}</td>
                    <td className="table-cell123">{submission.motivation}</td>
                    <td className="table-cell123">{submission.trainingStyle}</td>
                    <td className="table-cell123">{submission.workoutAloneOrGroup}</td>
                    <td className="table-cell123">{submission.trackProgress}</td>
                    <td className="table-cell123">{submission.dietaryRecommendations}</td>
                    <td className="table-cell123">{submission.updateFrequency}</td>
                    <td className="table-cell123">{submission.additionalNotes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredSubmissions.length === 0 && <p className="no-results">No users found.</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSubmissions123;