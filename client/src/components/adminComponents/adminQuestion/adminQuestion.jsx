import React from "react";
import "./adminQuestion.module.scss";

const AdminQuestion = ({ adminQuestion, setAdminQuestion }) => {
  const handleChange = (e) => {
    setAdminQuestion(e.target.value);
  };
  return (
    <div>
      <label>
        Question:
        <input type="textarea" onChange={handleChange} value={adminQuestion} />
      </label>
    </div>
  );
};
export default AdminQuestion;
