const makeMCQAnswers = (questions) => {
  /**
   * returns an object of question-correct_answer
   * question (array): an array of MCQ-type quiz questions
   * result is compared with user's answers
   */
  const answers = {};
  for (const question of questions) {
    const options = {};
    for (const option of question.options) {
      options[option.id] = option.valid;
    }
    answers[question.id] = options;
  }
  return answers;
};

export default makeMCQAnswers;
