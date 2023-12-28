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
    <section
      className="container mt-5 p-5"
      style={{ background: "white", borderRadius: "20px" }}
    >
      <h3 className="text-info">Your Quiz Result Summary</h3>
      <hr />
      <h4 class="text-secondary">Subject: {selectedSubject}</h4>
      <h5 class="text-body">
        You answered {totalScores} out of {numOfQuestions} questions correctly.
      </h5>
      <p class="text-success">Your total score is {percentage} %.</p>
      <button className="btn btn-primary btn-sm" onClick={handleRetakeQuiz}>
        Retake this quiz
      </button>
    </section>
  );
};

export default QuizResult;
