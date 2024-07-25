import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";
import "../styles/readques.css"
import { server } from "..";

export const ReadQues = () => {
  const { title } = useParams();
  const [ques, setQues] = useState([]);
  const [showanswer, setsetShowanswer] = useState(false);

  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get(
        `${server}/tasks/gettask/${title}`,
        {
          withCredentials: true, // Pass credentials, including cookies
        }
      );
      // console.log("data",response.data)
      console.log("data-ques", response.data.ques[0]);
      console.log("data-ques  not 0", response.data.ques);
      setQues(response.data.ques[0]);

      // Assuming response.data.ques is an array
      
    } catch (error) {
      console.error("Error fetching tasks:", error);
      // Handle error (show error message, retry mechanism, etc.)
    }
  };

  const handleAnswerSelection = (questionIndex, optionIndex) => {
    const newAnswers = [...userAnswers];
    newAnswers[questionIndex] = optionIndex;
    setUserAnswers(newAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
    setsetShowanswer(true);
  };

  const calculateScore = () => {
    let score = 0;
    ques.forEach((question, index) => {
      if (question.correctOptionIndex === userAnswers[index]) {
        score++;
      }
    });
    return score;
  };

  return (
    <>
      <Navbar />
      <div className="read-ques">
        <h1>Questions</h1>
        {ques.map((quest, index) => (
          <div className="ques-index" key={index}>
            <h2>Question {index + 1}:</h2>

            <h3>{quest.question}</h3>
            <div className="option-index">
              {quest.options.map((option, optionIndex) => (
                <div className="option" key={optionIndex}>
                  <input
                    type="radio"
                    id={`option_${index}_${optionIndex}`}
                    name={`question_${index}`}
                    value={optionIndex}
                    checked={userAnswers[index] === optionIndex}
                    onChange={() => handleAnswerSelection(index, optionIndex)}
                  />
                  <label htmlFor={`option_${index}_${optionIndex}`}>
                    {option}
                  </label>
                </div>
              ))}

              {console.log(userAnswers)}
            </div>

            {showanswer && (
              <p>Correct Option Index: {quest.correctOptionIndex + 1}</p>
            )}
          </div>
        ))}

        <button className="submitanswer" onClick={handleSubmit}>
          Submit Answers
        </button>
        {showResults && (
          <div>
            <h2>Results</h2>
            <p>
              You scored: {calculateScore()} out of {ques.length}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
