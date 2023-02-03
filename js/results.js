import { results, mbtis }from './data.js'

const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]

// const titleEl = document.querySelector('.page-title')
const snackEl = document.querySelector('.snack')
// const boxEls = document.querySelectorAll('.box')
const boxEl = document.querySelector('.box')
const goodEls = document.querySelectorAll('.good')
const badEls = document.querySelectorAll('.bad')
const resultEls = document.getElementsByName('result-image')

// document.body.style.backgroundColor = result.bgColor
document.body.querySelector('.bg').style.backgroundColor = result.bgColor
if(result.bgColor !== '#ffffff' && result.bgColor !== '#ffe919'
&& result.bgColor !== '#fff5e6' && result.bgColor !== '#fbdc02'
&& result.bgColor !== '#ffd20d') {
  document.querySelectorAll('h3').forEach(function (h3El) {
    h3El.style.color = '#ffffff'
  })
}
// titleEl.innerHTML = result.title
snackEl.src = result.snack
// boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results
// })
goodEls.forEach(function (goodEl, index) {
  goodEl.src = '/images/' + result.goods[index].snackName + '.png'
  goodEl.style.backgroundColor = result.goods[index].bgValue
})
badEls.forEach(function (badEl, index) {
  badEl.src = '/images/' + result.bads[index].snackName + '.png'
  badEl.style.backgroundColor = result.bads[index].bgValue
})
resultEls.forEach(function (resultEl, index) {
  resultEl.setAttribute('content', result.snack)
})