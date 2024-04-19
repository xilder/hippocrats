import React from "react";
import "./adminExplanation.module.scss";

const AdminExplanation = ({ adminExplanation, setAdminExplanation }) => {
  const handleChange = (e) => {
    setAdminExplanation(e.target.value);
  };
  return (
    <div>
      <p>Explanation:</p>
      <input type="textarea" onChange={handleChange} value={adminExplanation} />
    </div>
  );
};

export default AdminExplanation;
