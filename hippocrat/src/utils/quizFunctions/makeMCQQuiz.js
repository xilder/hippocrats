const makeMCQQuiz = (questions) => {
  const answers = {};
  for (const question of questions) {
    const options = {};
    for (const option of question.options) {
      options[option.id] = "U";
    }
    answers[question.id] = options;
  }
  return answers;
};

export default makeMCQQuiz;
