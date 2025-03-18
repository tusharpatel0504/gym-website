// import React, { useEffect, useState } from "react";
// import "./users.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";
// import Layout from "../Utils/Layout";
// import toast from "react-hot-toast";

// const AdminUsers = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.mainrole !== "admin") return navigate("/");

//   const [users, setUsers] = useState([]);

//   async function fetchUsers() {
//     try {
//       const { data } = await axios.get(`${server}/api/users`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setUsers(data.users);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const updateRole = async (id) => {
//     if (confirm("are you sure you want to update this user role")) {
//       try {
//         const { data } = await axios.put(
//           `${server}/api/user/${id}`,
//           {},
//           {
//             headers: {
//               token: localStorage.getItem("token"),
//             },
//           }
//         );

//         toast.success(data.message);
//         fetchUsers();
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };

//   console.log(users);
//   return (
//     <Layout>
//       <div className="users">
//         <h1>All Users</h1>
//         <table border={"black"}>
//           <thead>
//             <tr>
//               <td>#</td>
//               <td>name</td>
//               <td>email</td>
//               <td>role</td>
//               <td>update role</td>
//             </tr>
//           </thead>

//           {users &&
//             users.map((e, i) => (
//               <tbody>
//                 <tr>
//                   <td>{i + 1}</td>
//                   <td>{e.name}</td>
//                   <td>{e.email}</td>
//                   <td>{e.role}</td>
//                   <td>
//                     <button
//                       onClick={() => updateRole(e._id)}
//                       className="common-btn"
//                     >
//                       Update Role
//                     </button>
//                   </td>
//                 </tr>
//               </tbody>
//             ))}
//         </table>
//       </div>
//     </Layout>
//   );
// };

// export default AdminUsers;







// import React, { useEffect, useState } from "react";
// import "./users.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";
// import Layout from "../Utils/Layout";
// import toast from "react-hot-toast";

// const AdminUsers = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.mainrole !== "admin") return navigate("/");

//   const [users, setUsers] = useState([]);

//   async function fetchUsers() {
//     try {
//       const { data } = await axios.get(`${server}/api/users`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setUsers(data.users);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const updateRole = async (id) => {
//     if (confirm("Are you sure you want to update this user's role?")) {
//       try {
//         const { data } = await axios.put(
//           `${server}/api/user/${id}`,
//           {},
//           {
//             headers: {
//               token: localStorage.getItem("token"),
//             },
//           }
//         );

//         toast.success(data.message);
//         fetchUsers();
//       } catch (error) {
//         toast.error(error.response.data.message);
//       }
//     }
//   };

//   return (
//     <Layout>
//       <div className="users">
//         <h1>All Users</h1>
//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 {/* <th>Update Role</th> */}
//               </tr>
//             </thead>
//             <tbody>
//               {users.map((e, i) => (
//                 <tr key={e._id}>
//                   <td>{i + 1}</td>
//                   <td>{e.name}</td>
//                   <td>{e.email}</td>
//                   <td>{e.role}</td>
//                   {/* <td>
//                     <button onClick={() => updateRole(e._id)} className="common-btn">
//                       Update Role
//                     </button>
//                   </td> */}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminUsers;






// import React, { useEffect, useState } from "react";
// import "./users.css";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { server } from "../../main";
// import Layout from "../Utils/Layout";
// import toast from "react-hot-toast";

// const AdminUsers = ({ user }) => {
//   const navigate = useNavigate();

//   if (user && user.mainrole !== "admin") return navigate("/");

//   const [users, setUsers] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   async function fetchUsers() {
//     try {
//       const { data } = await axios.get(`${server}/api/users`, {
//         headers: {
//           token: localStorage.getItem("token"),
//         },
//       });

//       setUsers(data.users);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter(
//     (user) =>
//       user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       user.role.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <Layout>
//       <div className="users">
//         <h1>All Users</h1>
        
//         {/* Search Bar */}
//         <input
//           type="text"
//           placeholder="Search users..."
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           className="search-bar"
//         />

//         <div className="table-container">
//           <table>
//             <thead>
//               <tr>
//                 <th>#</th>
//                 <th>Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//               </tr>
//             </thead>
//             <tbody>
//               {filteredUsers.map((e, i) => (
//                 <tr key={e._id}>
//                   <td>{i + 1}</td>
//                   <td>{e.name}</td>
//                   <td>{e.email}</td>
//                   <td>{e.role}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>

//           {filteredUsers.length === 0 && <p className="no-results">No users found.</p>}
//         </div>
//       </div>
//     </Layout>
//   );
// };

// export default AdminUsers;


import React, { useEffect, useState } from "react";
import "./users.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { server } from "../../main";
import Layout from "../Utils/Layout";
import toast from "react-hot-toast";

const AdminUsers = ({ user }) => {
  const navigate = useNavigate();

  if (user && user.mainrole !== "admin") return navigate("/");

  const [users, setUsers] = useState([]);
  const [courses, setCourses] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  async function fetchUsers() {
    try {
      const { data } = await axios.get(`${server}/api/users`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  async function fetchCourses() {
    try {
      const { data } = await axios.get(`${server}/api/course/all`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setCourses(data.courses);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchUsers();
    fetchCourses();
  }, []);

  const getCourseName = (courseId) => {
    const course = courses.find((course) => course._id === courseId);
    return course ? course.title : "Unknown Course";
  };

  // const updateRole = async (id) => {
  //   if (confirm("Are you sure you want to update this user's role?")) {
  //     try {
  //       const { data } = await axios.put(
  //         `${server}/api/user/${id}`,
  //         {},
  //         {
  //           headers: {
  //             token: localStorage.getItem("token"),
  //           },
  //         }
  //       );

  //       toast.success(data.message);
  //       fetchUsers();
  //     } catch (error) {
  //       toast.error(error.response.data.message);
  //     }
  //   }
  // };


  const filteredUsers = users.filter((user) => {
    const courseTitles = user.subscription.map((courseId) => getCourseName(courseId)).join(" ");
    return (
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      courseTitles.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Layout>
      <div className="users">
        <h1>All Users</h1>
        
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Courses Enrolled</th>
                
                
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((e, i) => (
                <tr key={e._id}>
                  <td>{i + 1}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                  <td>{e.role}</td>
                  <td>
                  {e.subscription.map((courseId) => (
                      <div key={courseId}>{getCourseName(courseId)}</div>
                    ))}
                  </td>
                  
                  
                </tr>
              ))}
            </tbody>
          </table>

          {filteredUsers.length === 0 && <p className="no-results">No users found.</p>}
        </div>
      </div>
    </Layout>
  );
};

export default AdminUsers;