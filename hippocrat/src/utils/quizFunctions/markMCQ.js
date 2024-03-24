const markMCQ = (quiz, answers) => {
  let total = 0;

  for (const key of Object.keys(quiz)) {
    for (const k of Object.keys(quiz[key])) {
      const answer = answers[key][k];
      const quizAnswer = quiz[key][k];
      if (quizAnswer === "U") {
        total += 0;
      } else if (quizAnswer === answer) {
        total += 0;
      } else {
        total -= 0.5;
      }
    }
  }
  return total;
};

export default markMCQ;
