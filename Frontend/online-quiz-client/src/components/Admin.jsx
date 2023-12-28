import { Link } from "react-router-dom";

const Admin = () => {
  return (
    <section
      className="container mt-5 p-5"
      style={{ background: "white", borderRadius: "20px" }}
    >
      <h2 className="text-info">Welcome to Admin Home Page</h2>
      <hr />
      <nav className="nav flex-column">
        <Link to={"/create-quiz"} className="nav-link">
          Create a New Quiz
        </Link>
        <Link to={"/all-quizzes"} className="nav-link">
          Manage existing Quizes
        </Link>
      </nav>
    </section>
  );
};

export default Admin;
