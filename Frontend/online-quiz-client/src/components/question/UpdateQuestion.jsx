import React, { useEffect, useState } from "react";
import { getQuestionById, updateQuestion } from "../../../utils/QuizService";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateQuestion = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([""]);
  const [correctAnswers, setCorrectAnswers] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const questionToUpadate = await getQuestionById(id);
      console.log(questionToUpadate);
      if (questionToUpadate) {
        setQuestion(questionToUpadate.question);
        setChoices(questionToUpadate.choices);
        setCorrectAnswers(questionToUpadate.correctAnswers);
      }
      setTimeout(() => {
        setIsLoading(false);
        console.log(question);
        console.log(choices);
        console.log(correctAnswers);
      }, 10000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleChoiceChange = (index, e) => {
    const updateChoices = [...choices];
    updateChoices[index] = e.target.value;
    setChoices(updateChoices);
  };

  const handleCorrectAnswerChange = (e) => {
    setCorrectAnswers(e.target.value);
  };

  const handleQuestionUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedQuestion = {
        question,
        choices,
        correctAnswers: correctAnswers
          .toString()
          .split(",")
          .map((answer) => answer.trim()),
      };

      await updateQuestion(id, updatedQuestion);
      navigate("/all-quizzes");
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  console.log("===================", choices);

  return (
    <section className="container">
      <h4 className="nt-5" style={{ color: "GrayText" }}>
        Update Quiz Question
      </h4>

      <div className="col-md-8">
        <form onSubmit={handleQuestionUpdate}>
          <div className="form-group">
            <label className="text-info" htmlFor="question">
              Question:
            </label>
            <textarea
              className="form-control"
              name="question"
              id="question"
              rows={4}
              onChange={handleQuestionChange}
            />
          </div>

          <div className="form-group">
            <label className="text-info" htmlFor="choices">
              Choices:
            </label>
            {choices.map((choice, index) => (
              <input
                key={index}
                className="form-control mb-4"
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e)}
              />
            ))}
          </div>

          <div className="form-group">
            <label className="text-info" htmlFor="correctAnswers">
              Correct Answer (s):
            </label>
            <input
              className="form-control mb-4"
              type="text"
              value={correctAnswers}
              onChange={handleCorrectAnswerChange}
            />
          </div>

          <div className="btn-group">
            <button type="submit" className="btn btn-sm btn-outline-warning">
              Update Question
            </button>
            <Link to={"/all-quizzes"} className="btn btn-outline-primary ml-2">
              Back to all questions
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateQuestion;
