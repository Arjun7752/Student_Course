import React from "react";
import "../App.css"
import logo  from "../asserts/logo.png"


function HeaderPage() {
 
  return (
    <div className="header">
        <img src={logo} alt="student course management system" width="100" height="90" />
        <h1>STUDENT COURSE MANAGEMENT SYSTEM</h1>
        <a className="back" href="/"> Back</a>
    </div>
  );
}

export default HeaderPage;
