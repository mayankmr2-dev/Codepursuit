const quizData = [
    {
        question: "Which of the following country won Football world Cup maximum times?",
        a: "Germany",
        b: "Italy",
        c: "Argentina",
        d: "Brazil",
        correct: "d"

    },
    {
        question: "When was the first FIFA World Cup inaugurated?",
        a: "1930",
        b: "1931",
        c: "1932",
        d: "1933",
        correct: "a"
    },
    {
        question: "Which of following team do not play in stripes?",
        a: "Newcastle",
        b: "Southampton",
        c: "Tottenham Hotspur",
        d: "Lincoln City",
        correct: "c"
    },
    {
        question: "Which of the following country hosted the first Football World Cup?",
        a: "America",
        b: "Argentina",
        c: "Brazil",
        d: "Uruguay",
        correct: "d"
    },
    {
        question: "Which country became the first nation to win the Football World Cup?",
        a: "Uruguay",
        b: "Germany",
        c: "Argentina",
        d: "Belgium",
        correct: "a"
    },
    {
        question: "When was first official international football match was played?",
        a: "1929",
        b: "1872",
        c: "1902",
        d: "1870",
        correct: "b"
    },
    {
        question: "Who among the following scored the first goal in World Cup history?",
        a: "Johino",
        b: "Bert Patenaude",
        c: "Lucien Laurent",
        d: "Pele",
        correct: "c"
    }
]

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz")
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;


loadQuiz();

function loadQuiz() {
    deselectAns()
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function getSelected() {
    const answerEls = document.querySelectorAll(".answer");
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAns() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    const answer = getSelected()
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            // alert(`You have finished the questions  !`);
            quiz.innerHTML = `<h2>You have scored ${score}/${quizData.length} </h2>`
        }
    }

})