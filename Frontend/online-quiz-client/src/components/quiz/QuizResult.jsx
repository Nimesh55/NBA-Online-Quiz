import React from "react";
import { useLocation } from "react-router-dom";

const QuizResult = () => {
  const location = useLocation();
  const { quizQuestion, totalScores } = location.state;
  const numOfQuestions = quizQuestion.length;
  const percentage = Math.round((totalScores / numOfQuestions) * 100);

  const handleRetakeQuiz = () => {
    alert("Functionality was no implemented");
  };

  return (
    <section className="container mt-5">
      <h3>Your Quiz Result Summary</h3>
      <hr />
      <h5>
        You answered {totalScores} out of {numOfQuestions} questions correctly.
      </h5>
      <p>Your total score is {percentage} %.</p>
      <button className="btn btn=primary btn-sm" onClick={handleRetakeQuiz}>
        Retake this quiz
      </button>
    </section>
  );
};

export default QuizResult;
