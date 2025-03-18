import React from 'react';
import CountUp from 'react-countup';
import "./record.css";
import certifiedLogo from "../../assets/stripcertifiedlogo.svg";
import customerLogo from "../../assets/stripcustlogo.svg";
import workoutLogo from "../../assets/stripworkoutlogo.svg";

const Record = () => {
  return (
    <div className="record_cont_main">
      
      <div className="record_cont_item">
        <div className="record_cont_icon_box">
          <img src={customerLogo} alt="Happy Customers" className="record_cont_icon" />
        </div>
        <div className="record_cont_text">
          <span className="record_cont_label">Happy Customers</span>
          <span className="record_cont_number">
            <CountUp start={88000} end={90000} duration={5} />
          </span>
        </div>
      </div>

      <div className="record_cont_item">
        <div className="record_cont_icon_box">
          <img src={workoutLogo} alt="Workout Programs" className="record_cont_icon" />
        </div>
        <div className="record_cont_text">
          <span className="record_cont_label">Workout Programs</span>
          <span className="record_cont_number">
            <CountUp start={8800} end={9088} duration={4} />
          </span>
        </div>
      </div>

      <div className="record_cont_item">
        <div className="record_cont_icon_box">
          <img src={certifiedLogo} alt="Certified Trainers" className="record_cont_icon" />
        </div>
        <div className="record_cont_text">
          <span className="record_cont_label">Certified Trainers</span>
          <span className="record_cont_number">
            <CountUp start={880} end={988} duration={3} />
          </span>
        </div>
      </div>

    </div>
  );
};

export default Record;
