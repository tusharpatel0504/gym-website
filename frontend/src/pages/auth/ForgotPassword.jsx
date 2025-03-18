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
    <div className="forgot-page-code-container">
      <div className="forgot-page-code">

       
        <div className="forgot-page-code-form">
          <h1 className="forgot-page-code-title">
            Nice <span className="and">&</span> Easy
          </h1>
          <h2>Forgot Password</h2>
          <p>Enter your registered email, and we’ll send you a reset link.</p>

          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" disabled={btnLoading} className="forgot-page-code-btn">
              {btnLoading ? "Processing..." : "Send Reset Link"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
