import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../css/Questionnaire.css';

const Questionnaire = ({ onSubmit }) => {
  const [answers, setAnswers] = useState({
    codingSkills: "",
    interviewPrep: "",
    projects: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (typeof onSubmit === "function") {
      onSubmit(answers);
      navigate("/result");  // Redirect to the result page
    } else {
      console.error('onSubmit is not defined or is not a function.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="questionnaire-form">
      <label>
        Rate your coding skills (1-10):
        <input 
          type="number" 
          name="codingSkills" 
          value={answers.codingSkills} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Rate your interview prep (1-10):
        <input 
          type="number" 
          name="interviewPrep" 
          value={answers.interviewPrep} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <label>
        Number of completed projects:
        <input 
          type="number" 
          name="projects" 
          value={answers.projects} 
          onChange={handleChange} 
          required 
        />
      </label>
      <br />
      <button type="submit">Get My Reality Check</button>
    </form>
  );
};

export default Questionnaire;
