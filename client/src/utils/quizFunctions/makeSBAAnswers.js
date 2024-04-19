const makeSBAAnswers = (questions) => {
  /**
   * returns an object of question-correct_answer
   * question (array): an array of SBA-type quiz questions
   * result is compared with user's answers
   */
  const answers = {};
  for (const question of questions) {
    for (const option of question.options) {
      if (option.valid === "T") {
        answers[question.id] = option.id;
      }
    }
  }
  return answers;
};

export default makeSBAAnswers;
