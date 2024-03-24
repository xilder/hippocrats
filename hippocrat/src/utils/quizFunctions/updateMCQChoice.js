const updateMCQChoice = (prevState, question_id, option_id, value) => {
  const newState = { ...prevState };
  newState[question_id][option_id] = value;
  return newState;
};

export default updateMCQChoice;
