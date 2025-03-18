import React from "react";
import "./common.css";
import { Link } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";
import ContactSubmissions from "../../components/ContactSubmissions/ContactSubmissions";

const Sidebar = () => {
  const { user } = UserData();
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to={"/admin/dashboard"}>
            <div className="icon">
              <AiFillHome />
            </div>
            <span className="textadmin">Admin Home</span>
          </Link>
        </li>

        <li>
          <Link to={"/admin/course"}>
            <div className="icon">
              <FaBook />
            </div>
            <span className="textadmin" >Courses</span>
          </Link>
          
        </li>
        <li>
          <Link to={"/admin/contactSubmissions"}>
            <div className="icon">
              <FaBook />
            </div>
            <span className="textadmin" >Contact Submissions</span>
          </Link>
          
        </li>

        {user && user.mainrole === "admin" && (
          <li>
            <Link to={"/admin/users"}>
              <div className="icon">
                <FaUserAlt />
              </div>
              <span className="textadmin" >Users</span>
            </Link>
          </li>
        )}

        <li>
          <Link to={"/account"}>
            <div className="icon">
              <AiOutlineLogout />
            </div>
            <span className="textadmin" >Back</span>
          </Link>

        </li>        
      </ul>
    </div>
  );
};

export default Sidebar;
