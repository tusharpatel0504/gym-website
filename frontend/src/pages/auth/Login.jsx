// import React, { useState } from "react";
// import "./auth.css";
// import { Link, useNavigate } from "react-router-dom";
// import { UserData } from "../../context/UserContext";
// import { CourseData } from "../../context/CourseContext";

// const Login = () => {
//   const navigate = useNavigate();
//   const { btnLoading, loginUser } = UserData();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const { fetchMyCourse } = CourseData();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await loginUser(email, password, navigate, fetchMyCourse);
//   };
//   return (
//     <div className="auth-page">
//       <div className="auth-form">
//         <h2>Login</h2>
//         <form onSubmit={submitHandler}>
//           <label htmlFor="email">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button disabled={btnLoading} type="submit" className="common-btn">
//             {btnLoading ? "Please Wait..." : "Login"}
//           </button>
//         </form>
//         <p>
//           Don't have an account? <Link to="/register">Register</Link>
//         </p>
//         <p>
//           <Link to="/forgot">Forgot password?</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";
import { CourseData } from "../../context/CourseContext";

const Login = () => {
  const navigate = useNavigate();
  const { btnLoading, loginUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { fetchMyCourse } = CourseData();

  const submitHandler = async (e) => {
    e.preventDefault();
    await loginUser(email, password, navigate, fetchMyCourse);
  };
  return (
    <>
    <div className="maincontainer">
    <div className="auth-page">
      
      <div className="auth-form1">
      
        <h1 className="h1login">Nice <span className="and">&</span> Easy</h1>
        <h2 className="loginname">Login</h2>
        <form onSubmit={submitHandler}>
          <label htmlFor="email"></label>
          <input
            placeholder="Email"
            className="input1"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="password"></label>
          <input
          placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button disabled={btnLoading} type="submit" className="common-btnl">
            {btnLoading ? "Please Wait..." : "Login"}
          </button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register</Link>
        </p>
        <p>
          <Link to="/forgot">Forgot password?</Link>
        </p>
      </div>
    </div>
    </div>
    </>
  );
};

export default Login;
