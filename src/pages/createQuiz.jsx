import React, { useState } from "react";
import axios from "axios";
import "../styles/createquiz.css"; // Import the CSS file
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
import { server } from "..";

export const CreateQuiz = () => {

  const navigate=useNavigate();
  const initialQuestionState = {
    question: "",
    options: ["", "", ""],
    correctOptionIndex: 0,
  };

  const [quizData, setQuizData] = useState([
    {
      title: "",
      questions: [initialQuestionState],
    },
  ]);

  const handleInputChange = (e, questionIndex, optionIndex = null) => {
    const { name, value } = e.target;
    const updatedQuizData = [...quizData];

    if (name === "title") {
      updatedQuizData[0][name] = value;
    } else if (name === "question") {
      updatedQuizData[0].questions[questionIndex][name] = value;
    } else if (name.includes("option")) {
      updatedQuizData[0].questions[questionIndex].options[optionIndex] = value;
    } else if (name === "correctOptionIndex") {
      updatedQuizData[0].questions[questionIndex].correctOptionIndex = parseInt(value);
    }

    setQuizData(updatedQuizData);
  };

  const addQuestion = () => {
    const updatedQuizData = [...quizData];
    updatedQuizData[0].questions.push({ ...initialQuestionState });
    setQuizData(updatedQuizData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${server}/tasks/new`,
        quizData[0],
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Quiz creation successful:", response.data.message);
      alert("Quiz Submitted Sucess fully");
      navigate('/')
      // Optionally, you can reset form state or redirect to another page upon successful creation
    } catch (error) {
      console.error("Error creating quiz:", error);
      // Handle errors (e.g., display error messages to the user)
    }
  };

  return (
    <>
    <Navbar/>
    <div className="Createthis" >
      <h1 className="quiz-title">CREATE QUIZ</h1>
      <form className="quiz-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">
           <h1> Quiz Title:</h1>
            <input
              type="text"
              name="title"
              value={quizData[0].title}
              onChange={(e) => handleInputChange(e, 0)}
              className="form-input"
              required
            />
          </label>
        </div>

        {quizData[0].questions.map((question, questionIndex) => (
          <div key={questionIndex} className="form-group">
            <label className="form-label">
              <h2>Question {questionIndex + 1}:</h2>
              <input
                type="text"
                name="question"
                value={question.question}
                onChange={(e) => handleInputChange(e, questionIndex)}
                className="form-input"
                required
              />
            </label>

            {question.options.map((option, optionIndex) => (
              <label key={optionIndex} className="form-label">
                Option {optionIndex }:
                <input
                  type="text"
                  name={`option-${optionIndex}`}
                  value={option}
                  onChange={(e) => handleInputChange(e, questionIndex, optionIndex)}
                  className="form-input"
                  required
                />
              </label>
            ))}

            <label className="form-label">
              Correct Option Index:
              <input
                type="number"
                name="correctOptionIndex"
                value={question.correctOptionIndex}
                onChange={(e) => handleInputChange(e, questionIndex)}
                className="form-input"
                min="0"
                max={question.options.length - 1}
                required
              />
            </label>
          </div>
        ))}

        <div className="form-actions">
          <button type="button" className="button" onClick={addQuestion}>
            Add Question
          </button>
          <button type="submit" className="button">
            Submit Quiz
          </button>
        </div>
      </form>
    </div>
    </>
  );
};
