import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/readQuiz.css";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import { server } from "..";


export const ReadQuiz = () => {
  const navigate = useNavigate();
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `${server}/tasks/gettask`,
        {
          withCredentials: true, // Pass credentials, including cookies
        }
      );
      setTitles(response.data.title); // Assuming response.data.title is an array of quiz titles
    } catch (error) {
      console.error("Error fetching titles:", error);
      // Handle error (show error message, retry mechanism, etc.)
    }
  };

  const handleSelectQuiz = (title) => {
    navigate(`/ques/${title}`);
  };

  const handleDeleteQuiz = async (title) => {
    try {
      await axios.delete(
        `${server}/tasks/gettask/${title}`,
        {
          withCredentials: true, // Ensure credentials are passed if needed
        }
      );

      // Update local state (titles) to reflect the deleted quiz
      setTitles((prevTitles) => prevTitles.filter((t) => t !== title));
    } catch (error) {
      console.error("Error deleting quiz:", error);
      // Handle error (show error message, retry mechanism, etc.)
    }
  };

  return (
  <>
    <Navbar/>
    <div className="read">
      {titles.map((title, index) => (
        <div
          key={index}
          className="quiz-container"
         
        >
          <button
            onClick={() => handleSelectQuiz(title)}
            className="quiz-link"
          >
            {title}
          </button>
          <button
            onClick={() => handleDeleteQuiz(title)}
           className="delete-button"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
    </>
  );
};
