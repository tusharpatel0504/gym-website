// import React, { useState } from "react";
// import "./auth.css";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { server } from "../../main";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setBtnLoading(true);
//     try {
//       const { data } = await axios.post(`${server}/api/user/forgot`, { email });

//       toast.success(data.message);
//       navigate("/login");
//       setBtnLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setBtnLoading(false);
//     }
//   };
//   return (
//     <div className="auth-page">
//       <div className="auth-form">
//         <h2>Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="text">Enter Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button disabled={btnLoading} className="common-btn">
//             {btnLoading ? "Please Wait..." : "Forgot Password"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;


// import React, { useState } from "react";
// import "./forgot.css";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import axios from "axios";
// import { server } from "../../main";

// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [btnLoading, setBtnLoading] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setBtnLoading(true);
//     try {
//       const { data } = await axios.post(`${server}/api/user/forgot`, { email });

//       toast.success(data.message);
//       navigate("/login");
//       setBtnLoading(false);
//     } catch (error) {
//       toast.error(error.response.data.message);
//       setBtnLoading(false);
//     }
//   };
//   return (
//     <div className="auth-page">
//       <img src="https://images.unsplash.com/photo-1558611848-73f7eb4001a1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" style={{marginLeft:'200px', width:'333px',height:'300px'}} className="image" alt="" />
//       <div className="auth-form">
//       <h1>Nice <span className="and">&</span> Easy</h1>
//         <h3>Forgot Password</h3>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="text"></label>
//           <input
//           placeholder="Enter Email"
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button disabled={btnLoading} className="common-btn">
//             {btnLoading ? "Please Wait..." : "Forgot Password"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { server } from "../../main";
import "./forgot.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [btnLoading, setBtnLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setBtnLoading(true);
    try {
      const { data } = await axios.post(`${server}/api/user/forgot`, { email });
      toast.success(data.message);
      navigate("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
    setBtnLoading(false);
  };

  return (
    <>
    <div className="maincontainer">
      <div className="auth-page">        
        <div className="auth-form">
        <h1 className="h1got">Nice <span className="and">&</span> Easy</h1>
          <h2 style={{color:'black'}}>Forgot Password</h2>
          <p>Enter your registered email, and we’ll send you a reset link.</p>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={btnLoading} className="btng">
              {btnLoading ? "Processing..." : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ForgotPassword;

