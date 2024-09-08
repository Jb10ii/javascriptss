const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: "A: Paris, B: London, C: Berlin, D: Washington DC",
        correctAnswer: "A"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: "A: Earth, B: Mars, C: Jupiter, D: Venus",
        correctAnswer: "B"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: "A: Atlantic Ocean, B: Indian Ocean, C: Pacific Ocean, D: Arctic Ocean",
        correctAnswer: "C"
    }
];


let score = 0;

for (let i = 0; i < quizQuestions.length; i++) {
    if(currentQuestion = quizQuestions[i]) 
    console.log(currentQuestion);

    const userAnswer = prompt(currentQuestion.question + " " + currentQuestion.answers);
    if (userAnswer == currentQuestion.correctAnswer) {
        alert("Correct!");
        score++; 
    } else {
        alert("Wrong! The correct answer was " + currentQuestion.correctAnswer);
    }
}

alert("You got" + " " + score + " " + "out of" + " " + quizQuestions.length + " " + "correct!");
