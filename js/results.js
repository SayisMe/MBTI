import { results, mbtis }from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const snackEl = document.querySelector('.snack')
// const boxEls = document.querySelectorAll('.box')
const boxEl = document.querySelector('.box')
const jobEls = document.querySelectorAll('.job')
// const lectureEl = document.querySelector('.lecture')
// const lectureImgEl = document.querySelector('.lecture img')

titleEl.innerHTML = result.title
snackEl.src = result.snack
// boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results
// })
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})
// lectureEl.href = result.lectureUrl
// lectureImgEl.src = result.lectureImg