const updateSBAChoice = (prevState, question_id, option_id) => {
  const newState = { ...prevState };
  newState[question_id] = option_id;
  return newState;
};

export default updateSBAChoice;
