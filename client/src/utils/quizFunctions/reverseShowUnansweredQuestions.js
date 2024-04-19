const reverseShowUansweredQuestions = (e) => {
    const element = e.target
    const targetParent = element.closest("q-div")
    if (targetParent.classList.includes("red-border")) {
        targetParent.classList.remove("red-border")
    }
};

export default reverseShowUansweredQuestions;
