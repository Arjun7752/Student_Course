import React from "react";

import HeaderPage from "./header";



function HomePage() {
  return (
    <>
    <HeaderPage />
    <div className="home-main">
        <h1> <a href="/sign-up">Registration System</a></h1>
        <h1> <a href="/sign-in">Student Information</a></h1>
    </div>
    </>
  );
}

export default HomePage;
