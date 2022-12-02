import React from "react";
import "./list.scss";
import image from "../../images/doc3.svg";
import DoctorForm from "../../components/DoctorForm";
import { Link } from "react-router-dom";

const List = () => {
  return (
    <>
      <div className="top">
        <div className="logo">
          <Link to="/">
            <img src="../../images/logo.jpg" alt="logo" className="logo-img" />
            SENSEI
          </Link>
        </div>
        <div className="form-container">
          <div className="left">
            <h1>List your practice now -- it's free</h1>
            <p>
              Get your practice in front of 1 in 3 Kenyans when you create a
              free profile on SENSEI. Make it easy for patients to find and
              connect with your practice via the SENSEI app or website.
            </p>
            <DoctorForm />
          </div>
          <div className="right">
            <img src={image} alt="logo" />
          </div>
        </div>
      </div>
      <div className="bottom">
        <div>
          <img src="../../images/logo.jpg" alt="logo" className="logo-img" />
          SENSEI
        </div>
      </div>
    </>
  );
};

export default List;
