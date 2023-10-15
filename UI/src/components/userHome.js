import React, { Component, useEffect, useState } from "react";
import HeaderPage from "./header";

export default function UserHome({ userData }) {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./sign-in";
  };
  return (
    <>
    <HeaderPage />
  
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>First Name: <b>{userData.fname}</b></div>
        <div>Middle Name: <b>{userData.fname}</b></div>
        <div>Last Name: <b>{userData.fname}</b></div>
        <div>Gender <b>Male</b></div>
        <div>Date of Birth <b>12/05/2005</b></div>
        <div>Email : <b>{userData.email}</b></div>
       
        <div>Course : <b>CSE</b></div>
         <div>
          <br/>
          <button onClick={logOut} className="btn btn-primary">
            Log Out
          </button>
          </div>
        </div>
      </div>
  
    </>
  );
}
