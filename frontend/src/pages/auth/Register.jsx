// import React, { useState } from "react";
// import "./auth.css";
// import { Link, useNavigate } from "react-router-dom";
// import { UserData } from "../../context/UserContext";

// const Register = () => {
//   const navigate = useNavigate();
//   const { btnLoading, registerUser } = UserData();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await registerUser(name, email, password, navigate);
//   };
//   return (
//     <div className="auth-page">
//       <div className="auth-form">
//         <h2>Register</h2>
//         <form onSubmit={submitHandler}>
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

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

//           <button type="submit" disabled={btnLoading} className="common-btn">
//             {btnLoading ? "Please Wait..." : "Register"}
//           </button>
//         </form>
//         <p>
//           have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;




// // import React, { useState } from "react";
// // import "./auth.css";
// // import { Link, useNavigate } from "react-router-dom";
// // import { UserData } from "../../context/UserContext";

// // const Register = () => {
// //   const navigate = useNavigate();
// //   const { btnLoading, registerUser } = UserData();
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [name, setName] = useState("");

// //   const submitHandler = async (e) => {
// //     e.preventDefault();
// //     await registerUser(name, email, password, navigate);
// //   };
// //   return (
// //     <div className="auth-page">
// //       <div className="auth-form">
// //       <h1>Nice <span className="and">&</span> Easy</h1>
// //         <h2>Register</h2>
// //         <form onSubmit={submitHandler}>
// //           <label htmlFor="name">Name</label>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             required
// //           />

// //           <label htmlFor="email">Email</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />

// //           <label htmlFor="password">Password</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />

// //           <button type="submit" disabled={btnLoading} className="common-btn">
// //             {btnLoading ? "Please Wait..." : "Register"}
// //           </button>
// //         </form>
// //         <p>
// //           have an account? <Link to="/login">Login</Link>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Register;
// import React, { useState } from "react";
// import "./auth.css";
// import { Link, useNavigate } from "react-router-dom";
// import { UserData } from "../../context/UserContext";

// const Register = () => {
//   const navigate = useNavigate();
//   const { btnLoading, registerUser } = UserData();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [name, setName] = useState("");

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     await registerUser(name, email, password, navigate);
//   };
//   return (
//     <div className="auth-page">
//       <img src='https://plus.unsplash.com/premium_photo-1669021454412-f561606cd6cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZXhlcmNpc2V8ZW58MHx8MHx8fDA%3D' className="image" style={{marginLeft:'200px'}} alt="" />
//       <div className="auth-form">      
//       <h1>Nice <span className="and">&</span> Easy</h1>
//         <h2>Register</h2>
//         <form onSubmit={submitHandler}>
//           <label htmlFor="name"></label>
//           <input
//           placeholder="Name"
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//           />

//           <label htmlFor="email"></label>
//           <input
//           placeholder="Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />

//           <label htmlFor="password"></label>
//           <input
//           placeholder="Password"
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />

//           <button type="submit" disabled={btnLoading} className="common-btn">
//             {btnLoading ? "Please Wait..." : "Register"}
//           </button>
//         </form>
//         <p>
//           have an account? <Link to="/login">Login</Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Register;




import React, { useState } from "react";
import "./registor.css";
import { Link, useNavigate } from "react-router-dom";
import { UserData } from "../../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { btnLoading, registerUser } = UserData();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <>
    <div className="maincontainer">
    <div className="auth-page">        
        <div className="auth-form">
        <h1 className="h1registor">Nice <span className="and">&</span> Easy</h1>
          <h2>Register</h2>
          <form onSubmit={submitHandler}>
            <input
              placeholder="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              placeholder="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" disabled={btnLoading} className="common-btnr">
              {btnLoading ? "Please Wait..." : "Register"}
            </button>
          </form>
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>    
    </>
  );
};

export default Register;

