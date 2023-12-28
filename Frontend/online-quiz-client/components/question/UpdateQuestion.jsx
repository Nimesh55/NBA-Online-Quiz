import React, { useEffect, useState } from "react";
import { getQuestionById, updateQuestion } from "../../utils/QuizService";
import { useParams } from "react-router-dom";

const UpdateQuestion = () => {
  const [question, setQuestion] = useState("");
  const [choices, setChoices] = useState([""]);
  const [correctAnswers, setCorrectAnswers] = useState([""]);
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const questionToUpadate = await getQuestionById(id);
      if (questionToUpadate) {
        setQuestion(questionToUpadate.question);
        setChoices(questionToUpadate.choices);
        setCorrectAnswers(questionToUpadate.correctAnswers);
      }
      setIsLoading(false);
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
      //   Todo: navigate back to all question page
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

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
            {choices.map((choice, index) => {
              <input
                key={index}
                className="form-control mb-4"
                type="text"
                value={choice}
                onChange={(e) => handleChoiceChange(index, e)}
              />;
            })}
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
            {/* Todo: add a link back to all questions */}
          </div>
        </form>
      </div>
    </section>
  );
};

export default UpdateQuestion;
