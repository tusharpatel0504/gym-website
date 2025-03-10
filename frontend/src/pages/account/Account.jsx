// import React from "react";
// import { MdDashboard } from "react-icons/md";
// import "./account.css";
// import { IoMdLogOut } from "react-icons/io";
// import { UserData } from "../../context/UserContext";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Account = ({ user }) => {
//   const { setIsAuth, setUser } = UserData();

//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     localStorage.clear();
//     setUser([]);
//     setIsAuth(false);
//     toast.success("Logged Out");
//     navigate("/login");
//   };
//   return (
//     <div>
//       {user && (
//         <div className="profile">
//           <h2>My Profile</h2>
//           <div className="profile-info">
//             <p>
//               <strong>Name - {user.name}</strong>
//             </p>

//             <p>
//               <strong>Email - {user.email}</strong>
//             </p>

//             <button
//               onClick={() => navigate(`/${user._id}/dashboard`)}
//               className="common-btn"
//             >
//               <MdDashboard />
//               Dashboard
//             </button>

//             <br />

//             {user.role === "admin" && (
//               <button
//                 onClick={() => navigate(`/admin/dashboard`)}
//                 className="common-btn"
//               >
//                 <MdDashboard />
//                 Admin Dashboard
//               </button>
//             )}

//             <br />

//             <button
//               onClick={logoutHandler}
//               className="common-btn"
//               style={{ background: "red" }}
//             >
//               <IoMdLogOut />
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;




// import React from "react";
// import { MdDashboard } from "react-icons/md";
// import "./account.css";
// import { IoMdLogOut } from "react-icons/io";
// import { UserData } from "../../context/UserContext";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const Account = ({ user }) => {
//   const { setIsAuth, setUser } = UserData();

//   const navigate = useNavigate();

//   const logoutHandler = () => {
//     localStorage.clear();
//     setUser([]);
//     setIsAuth(false);
//     toast.success("Logged Out");
//     navigate("/login");
//   };
//   return (
//     <div>
//       {user && (
//         <div className="profile">
//           <h2>My Profile</h2>
//           <div className="profile-info">
//             <p>
//               <strong>Name - {user.name}</strong>
//             </p>

//             <p>
//               <strong>Email - {user.email}</strong>
//             </p>

//             <button
//               onClick={() => navigate(`/${user._id}/dashboard`)}
//               className="common-btn"
//             >
//               <MdDashboard />
//               Dashboard
//             </button>

//             <br />

//             {user.role === "admin" && (
//               <button
//                 onClick={() => navigate(`/admin/dashboard`)}
//                 className="common-btn"
//               >
//                 <MdDashboard />
//                 Admin Dashboard
//               </button>
//             )}

//             <br />

//             <button
//               onClick={logoutHandler}
//               className="common-btn"
//               style={{ background: "red" }}
//             >
//               <IoMdLogOut />
//               Logout
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Account;



import React from "react";
import { MdDashboard } from "react-icons/md";
import { IoMdLogOut } from "react-icons/io";
import { UserData } from "../../context/UserContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import "./account.css";
import 'bootstrap-icons/font/bootstrap-icons.css';


const Account = ({ user }) => {
  const { setIsAuth, setUser } = UserData();
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.clear();
    setUser([]);
    setIsAuth(false);
    toast.success("Logged Out");
    navigate("/login");
  };

  return (
    <div className="profile-container">
      {user && (
        <div className="profile">          
          {/* <img src='./user.png' alt="hello" /> */}
          {/* <i class="bi bi-person-circle"></i> */}

          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
          </svg>
                  
          <h2>My Profile</h2>
          <div className="profile-info">
            <p>
              <strong>Name:</strong> {user.name}
            </p>
            <p>
              <strong>Email:</strong> {user.email}
            </p>

            <button
              onClick={() => navigate(`/${user._id}/dashboard`)}
              className="common-btn"
            >
              <MdDashboard />
              Dashboard
            </button>

            {user.role === "admin" && (
              <button
                onClick={() => navigate(`/admin/dashboard`)}
                className="common-btn"
              >
                <MdDashboard />
                Admin Dashboard
              </button>
            )}

            <button onClick={logoutHandler} className="logout-btn">
              <IoMdLogOut />
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
