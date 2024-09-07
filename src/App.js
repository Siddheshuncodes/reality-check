import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Questionnaire from "./pages/Questionnaire";
import Result from "./pages/Result";
import './css/App.css';

function App() {
  const [answers, setAnswers] = useState(null);

  // This function will handle form submission
  const handleFormSubmit = (formAnswers) => {
    setAnswers(formAnswers);
  };

  return (
    <Router>
      <Routes>
        {/* Passing the handleFormSubmit as onSubmit */}
        <Route path="/" element={<Home />} />
        <Route path="/check" element={<Questionnaire onSubmit={handleFormSubmit} />} />
        <Route path="/result" element={<Result answers={answers} />} />
      </Routes>
    </Router>
  );
}

export default App;
