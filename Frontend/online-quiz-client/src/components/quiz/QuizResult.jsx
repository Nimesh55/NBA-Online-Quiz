import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizQuestions, totalScores, selectedSubject } = location.state;
  const numOfQuestions = quizQuestions.length;
  const percentage = Math.round((totalScores / numOfQuestions) * 100);

  const handleRetakeQuiz = () => {
    navigate("/take-quiz", {
      state: { selectedNumOfQuestions: numOfQuestions, selectedSubject },
    });
  };

  return (
    <section className="container mt-5">
      <h3>Your Quiz Result Summary</h3>
      <hr />
      <h4>Subject: {selectedSubject}</h4>
      <h5>
        You answered {totalScores} out of {numOfQuestions} questions correctly.
      </h5>
      <p>Your total score is {percentage} %.</p>
      <button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
        Retake this quiz
      </button>
    </section>
  );
};

export default QuizResult;
