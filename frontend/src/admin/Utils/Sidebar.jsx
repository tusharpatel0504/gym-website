import React, { useState } from "react";
import "./common.css";
import { useNavigate } from "react-router-dom";
import { AiFillHome, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";

const Sidebar = () => {
  const { user } = UserData();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      {/* <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineMenu />
      </button> */}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li>
            <button onClick={() => navigate("/admin/dashboard")}>
              <div className="icon">
                <AiFillHome />
              </div>
              <span className="textadmin">Admin Home</span>
            </button>
          </li>

          <li>
            <button onClick={() => navigate("/admin/course")}>
              <div className="icon">
                <FaBook />
              </div>
              <span className="textadmin">Courses</span>
            </button>
          </li>

          <li>
            <button onClick={() => navigate("/admin/contactSubmissions")}>
              <div className="icon">
                <FaBook />
              </div>
              <span className="textadmin">Contact Submissions</span>
            </button>
          </li>

          {user && user.mainrole === "admin" && (
            <li>
              <button onClick={() => navigate("/admin/users")}>
                <div className="icon">
                  <FaUserAlt />
                </div>
                <span className="textadmin">Users</span>
              </button>
            </li>
          )}

          <li>
            <button onClick={() => navigate("/account")}>
              <div className="icon">
                <AiOutlineLogout />
              </div>
              <span className="textadmin">Back</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
