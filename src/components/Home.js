import React from "react";
import { Navigate } from "react-router-dom";

const Home = ({ validLogin }) => {
  return (
    <div className="container">
      {!validLogin && <Navigate to="/login" />}Home
    </div>
  );
};

export default Home;
