import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/Result.css';

const Result = ({ answers }) => {
  const navigate = useNavigate();

  if (!answers) {
    return (
      <div>
        <h2>No data available!</h2>
        <button onClick={() => navigate("/check")}>Go Back to Reality Check</button>
      </div>
    );
  }

  return (
    <div className="result-container">
      <h1>Your Reality Check Results</h1>
      <p>Coding Skills: {answers.codingSkills}/10</p>
      <p>Interview Preparation: {answers.interviewPrep}/10</p>
      <p>Completed Projects: {answers.projects}</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
};

export default Result;
