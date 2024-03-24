import React from "react";
import "./adminInput.module.scss";

const AdminInput = ({ adminOption, adminText, setAdminText }) => {
  const change = (prevState, text) => {
    const newState = { ...prevState };
    newState["text"] = text;
    return newState;
  };
  const handleChange = (e) => {
    const text = e.target.value;
    setAdminText((prevState) => change(prevState, text));
  };
  return (
    <div>
      <div>
        <p>{adminOption}. </p>
        <input type="text" onChange={handleChange} value={adminText} />
      </div>
    </div>
  );
};

export default AdminInput;
