import React, { useState } from "react";
import Header from "../../components/header/header";
import AdminQuestion from "../../components/adminComponents/adminQuestion/adminQuestion";
import AdminExplanation from "../../components/adminComponents/adminExplanation/adminExplanation";
import AdminInput from "../../components/adminComponents/adminInput/adminInput";
import "./admin.scss";

const Admin = () => {
  const [adminType, setAdminType] = useState("SBA");
  const [adminQuestion, setAdminQuestion] = useState("");
  const [adminOptionA, setAdminOptionA] = useState({ option: "A", text: "" });
  const [adminOptionB, setAdminOptionB] = useState({ option: "B", text: "" });
  const [adminOptionC, setAdminOptionC] = useState({ option: "C", text: "" });
  const [adminOptionD, setAdminOptionD] = useState({ option: "D", text: "" });
  const [adminOptionE, setAdminOptionE] = useState({ option: "E", text: "" });
  const [adminExplanation, setAdminExplanation] = useState("");
  const submitQuestion = (e) => {
    e.preventDefault();
    const question = {};
    question["type"] = adminType;
    question["question"] = adminQuestion;
    question["options"] = [];
    question["explanation"] = adminExplanation;
    question["options"].push(adminOptionA);
    question["options"].push(adminOptionB);
    question["options"].push(adminOptionC);
    question["options"].push(adminOptionD);
    question["options"].push(adminOptionE);
    console.log(question);
  };
  return (
    <div>
      <Header />
      <div>
        <div>
          <form onSubmit={submitQuestion}>
            <fieldset>
              <AdminQuestion
                adminQuestion={adminQuestion}
                setAdminQuestion={setAdminQuestion}
              />
              <input
                type="radio"
                name="questionType"
                value="SBA"
                defaultChecked
                onChange={(e) => setAdminType(e.target.value)}
              />
              <input
                type="radio"
                name="questionType"
                value="MCQ"
                onChange={(e) => setAdminType(e.target.value)}
              />
              <AdminInput
                adminOption="A"
                adminText={adminOptionA["text"]}
                setAdminText={setAdminOptionA}
              />
              <AdminInput
                adminOption="B"
                adminText={adminOptionB["text"]}
                setAdminText={setAdminOptionB}
              />
              <AdminInput
                adminOption="C"
                adminText={adminOptionC["text"]}
                setAdminText={setAdminOptionC}
              />
              <AdminInput
                adminOption="D"
                adminText={adminOptionD["text"]}
                setAdminText={setAdminOptionD}
              />
              <AdminInput
                adminOption="E"
                adminText={adminOptionE["text"]}
                setAdminText={setAdminOptionE}
              />
              <AdminExplanation
                adminExplanation={adminExplanation}
                setAdminExplanation={setAdminExplanation}
              />
              <input type="submit" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
