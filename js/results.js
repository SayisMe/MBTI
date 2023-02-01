import { results, mbtis }from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

const titleEl = document.querySelector('.page-title')
const snackEl = document.querySelector('.snack')
// const boxEls = document.querySelectorAll('.box')
const boxEl = document.querySelector('.box')
const goodEls = document.querySelectorAll('.good')
const badEls = document.querySelectorAll('.bad')
// const lectureEl = document.querySelector('.lecture')
// const lectureImgEl = document.querySelector('.lecture img')

// document.body.style.backgroundColor = result.bgColor
document.body.querySelector('.bg').style.backgroundColor = result.bgColor
if(result.bgColor !== '#ffffff' && result.bgColor !== '#ffe919') {
  // document.querySelector('h3').style.color = '#ffffff'
  document.querySelectorAll('h3').forEach(function (h3El) {
    h3El.style.color = '#ffffff'
  })
}
titleEl.innerHTML = result.title
snackEl.src = result.snack
// boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results
// })
goodEls.forEach(function (goodEl, index) {
  goodEl.src = '/images/' + result.goods[index] + '.png'
})
badEls.forEach(function (badEl, index) {
  badEl.src = '/images/' + result.bads[index] + '.png'
})
// lectureEl.href = result.lectureUrl
// lectureImgEl.src = result.lectureImg