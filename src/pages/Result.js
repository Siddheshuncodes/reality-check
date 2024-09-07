import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from '../supabaseClient';
import '../css/Result.css';

const Result = () => {
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from Supabase (you may need to adjust this according to your setup)
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('user_data')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(1); // Adjust according to your use case

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setUserData(data[0]);
      }
    };

    fetchData();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="result-container">
      <h1>Your Reality Check Results</h1>
      <p>Name: {userData.name}</p>
      <p>Phone Number: {userData.phone}</p>
      <p>Email: {userData.email}</p>
      <p>Coding Skills: {userData.codingSkills}/10</p>
      <p>Interview Preparation: {userData.interviewPrep}/10</p>
      <p>Completed Projects: {userData.projects}</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
};

export default Result;
