const markSBA = (quiz, answers) => {
  let total = 0;

  for (const key of Object.keys(quiz)) {
    const quizAnswer = quiz[key];
    const answer = answers[key];
    if (quizAnswer === answer) {
      total += 1;
    }
  }
  return total;
};

export default markSBA;
