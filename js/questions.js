import { questions } from './data.js'

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''
let mbtis = {
  e : 0,
  i : 0,
  s : 0,
  n : 0,
  t : 0,
  f : 0,
  j : 0,
  p : 0
}

function renderQuestion() {
  const question = questions[currentNumber]
  numberEl.innerHTML = question.number
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber + 1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
  if (currentNumber === questions.length - 1) {
    let ei = mbtis['e'] > mbtis['i'] ? 'e' : 'i'
    let sn = mbtis['s'] > mbtis['n'] ? 's' : 'n'
    let tf = mbtis['t'] > mbtis['f'] ? 't' : 'f'
    let jp = mbtis['j'] > mbtis['p'] ? 'j' : 'p'
    mbti = ei + sn + tf + jp
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  let currentMBTI = question.choices[choiceNumber].value;
  mbtis[currentMBTI] = mbtis[currentMBTI] + 1
  // mbti = mbti + question.choices[choiceNumber].value;
  currentNumber = currentNumber + 1
  renderQuestion()
}
function showResultPage() {
  location.href = '/results.html?mbti=' + mbti // 쿼리스트링
}
choice1El.addEventListener('click', function () {
  nextQuestion(0)
})
choice2El.addEventListener('click', function () {
  nextQuestion(1)
})
renderQuestion()