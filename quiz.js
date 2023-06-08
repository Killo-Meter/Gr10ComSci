const startButton = document.getElementById('start-btn')
const quiz= document.getElementById('quiz')
startButton.addEventListener('click', startGame);
function startGame() {
	console.log('Started');
	startButton.classList.add('hide');
	quiz.classList.remove('hide');
}
const quizData = [
    {
        question: "Best FromSoft Game?",
        a: "Dark Souls 3",
        b: "Bloodborne",
        c: "Sekiro",
        d: "Elden Ring",
        correct: "d",
    },
    {
        question: "Best Location in Elden Ring?",
        a: "Farum Azula",
        b: "Limgrave",
        c: "Volcano Manor",
        d: "Layndel",
        correct: "b",
    },
    {
        question: "Hardest Elden Ring Boss?",
        a: "Melania",
        b: "RadaBeast",
        c: "Godfrey",
        d: "Radhan",
        correct: "a",
    },
    {
        question: "Hardest Bloodborne Boss?",
        a: "Orphan of Kos",
        b: "Laurance the First Vicar",
        c: "Ludwig the Accursed",
        d: "Gerhman the First Hunter",
        correct: "a",
	},
	{
        question: "Hardest Dark Souls 3 Boss?",
        a: "Sister Freid",
        b: "Nameless King",
        c: "Soul of Cinder",
        d: "DarkEater Midir",
        correct: "d",
    },
		{
        question: "Hardest Sekiro Boss?",
        a: "Demon of Hatred",
        b: "Gardian Apes",
        c: "Isshin the Sword Saint",
        d: "Father",
        correct: "c",
    },	{
        question: "Hardest FromSoft Boss",
        a: "Isshin the Sword Saint",
        b: "DarkEater Midir",
        c: "Orphan of Kos",
        d: "Melania",
        correct: "a",
    },	{
        question: "Best FromSoft Boss?",
        a: "Ornstein and Smough",
        b: "Soul of Cinder",
        c: "Slave Knight Geal",
        d: "Morgot Omen King",
        correct: "c",
	},	
];
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Retry</button>
           `
       }
    }
})