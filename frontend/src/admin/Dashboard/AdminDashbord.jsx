// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Layout from "../Utils/Layout";
// import axios from "axios";
// import { server } from "../../main";
// import "./dashboard.css";
// import ContactSubmissions from "../../components/ContactSubmissions/ContactSubmissions";

// const AdminDashbord = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.role !== "admin") return navigate("/");

//   const [stats, setStats] = useState([]);
//   const [popularCourses, setPopularCourses] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   async function fetchStats() {
//     try {
//       const { data } = await axios.get(`${server}/api/stats`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setStats(data.stats);
//     } catch (error) {
//       console.log(error);
//     }
//   }



//   async function fetchPopularCourses() {
//     try {
//       const { data } = await axios.get(`${server}/api/courses/popular`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setPopularCourses(data.courses);
//     } catch (error) {
//       console.log(error);
//     }
//   }


//   const handleShowPopularCourses = async () => {
//     await fetchPopularCourses();
//     setIsModalOpen(true);
//   };


//   useEffect(() => {
//     fetchStats();
//   }, []);
//   return (
//     <div>
//       <Layout>
//         <div className="main-content">
//           <div className="box">
//             <p>Total Courses</p>
//             <p>{stats.totalCoures}</p>
//           </div>
//           <div className="box">
//             <p>Total Lectures</p>
//             <p>{stats.totalLectures}</p>
//           </div>
//           <div className="box">
//             <p>Total Users</p>
//             <p>{stats.totalUsers}</p>
//           </div>


//           <button  className="btn-888" onClick={handleShowPopularCourses}>Show Most Popular Courses</button> 
//            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
//             <div className="popular-courses">
//               {popularCourses.map((course) => (
//                 <div key={course._id} className="course-card">
//                   <h3>{course.title}</h3>
//                   <p>{course.description}</p>
//                   <p>Purchases: {course.purchases}</p>
//                 </div>
//               ))}
//             </div>
//           </Modal>

//         </div>
//       </Layout>
//       <div className="dashboard">
     
//     </div>
//     </div>
//   );
// };

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="modal-overlay">
//       <div className="modal">
//         <button className="modal-close" onClick={onClose}>
//           close
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };


// export default AdminDashbord;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";
import ContactSubmissions from "../../components/ContactSubmissions/ContactSubmissions";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.role !== "admin") return navigate("/");

  const [stats, setStats] = useState([]);
  const [popularCourses, setPopularCourses] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function fetchStats() {
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setStats(data.stats);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchPopularCourses() {
    try {
      const { data } = await axios.get(`${server}/api/courses/popular`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setPopularCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }

  const handleShowPopularCourses = async () => {
    await fetchPopularCourses();
    setIsModalOpen(true);
  };

  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <div>
      <Layout>
        <div className="dashboard-main">
          <div className="dashboard-box">
            <p>Total Courses</p>
            <p>{stats.totalCourses}</p>
          </div>
          <div className="dashboard-box">
            <p>Total Lectures</p>
            <p>{stats.totalLectures}</p>
          </div>
          <div className="dashboard-box">
            <p>Total Users</p>
            <p>{stats.totalUsers}</p>
          </div>

          <button className="dashboard-button" onClick={handleShowPopularCourses}>
            Show Most Popular Courses
          </button>
          <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
  <div className="popular-courses">
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Purchases</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {popularCourses.map((course, index) => (
          <tr key={course._id}>
            <td>{index + 1}</td>
            <td>{course.title}</td>
            <td>{course.purchases}</td>
            <td>{course.price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</Modal>

        </div>
      </Layout>
      <div className="dashboard-container"></div>
    </div>
  );
};

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <button className="modal-close" onClick={onClose}>
          Close
        </button>
        {children}
      </div>
    </div>
  );
};

export default AdminDashboard;
