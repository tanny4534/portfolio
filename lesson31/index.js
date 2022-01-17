// // typeof undefined // "undefined"

// // typeof 0 // "number"

// // typeof 10n // "bigint"

// // typeof true // "boolean"

// // typeof "foo" // "string"

// // typeof Symbol("id") // "symbol"

// // typeof Math // "object" (1)

// // typeof null // "object" (2)

// // typeof alert // "function" (3)

// // alert( Number(" 123 ") ); // 123
// // alert( Number("123z") ); // NaN (ошибка чтения числа на месте символа "z")
// // alert( Number(true) ); // 1
// // alert( Number(false) ); // 0

// let body = document.querySelector('body')
// body.insertAdjacentHTML('afterbegin',`
// <h1>Learning JavaScript</h1>
// <h1>Learning JavaScript</h1>
// <button onclick='changeColor()'>Change color</button>
// `)
// let mainHeading = document.querySelector('h1')
// let changeBTN = document.querySelector('button')

// mainHeading.style.color = 'blue'

// function changeColor () {
// let red = Math.round(Math.random()*255)
// // alert(red)
// mainHeading.style.color = rgb(${red},21,211)
// mainHeading.style.fontSize = '50px'
// changeBTN.innerHTML = mainHeading.style.color
// }

function begin1() {
     let a = Number(prompt('input number'))
     alert(`Perimetr = ${4*a}`)
 }
 function begin2() {
  let a = Number(prompt('input number'))
  alert(`S2 = ${a ** 2}`)
 }
 function begin3() {
  let a = Number(prompt('input number'))
  alert(`S4 = ${Math.PI*a}`)
 }
 function begin6() {
  let a = Number(prompt('input number'))
  alert(`${3,14*a**2}`)

 }
 function begin14() {
  let R = Number(prompt('input number'))
  alert(`L = ${2*Math.PI*R }`)
  alert(`S = ${Math.PI*R**2}`)


 }
 
 function begin16() {
  let A = Number(prompt('input number'))
  let B = Number(prompt('input number'))
  let C = Number(prompt('input number'))
  alert(`AC = ${Math.abs(C-A)}`)
  alert(`BC = ${Math.abs(C-B)}`)


 }
 function begin17() {
  let A = Number(prompt('input number'))
  let C = Number(prompt('input number'))
  let B = Number(prompt('input number'))
  let AC = Math.abs(C-A)
  let =BC = Math.abs(C-B)
  alert(`AC = ${AC}`)
  alert(`BC = ${BC}`)
  alert(`H = ${ AC*BC}`)
  


 }



