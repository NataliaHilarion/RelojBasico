const $legend = document.querySelector('.legend')
const $hour = document.querySelector('.hour')

// function number(numero) {
//   return numero < 10 ? `0${numero}` : numero
// }

let diasSemana = ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"]
let mesesAño = ['enero', 'febrero', 'marzo', 'abril', 'mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

const today = new Date()
const currentDay = `${diasSemana[today.getDay()]},
${today.getDate()} de ${mesesAño[today.getMonth()]} de ${today.getFullYear() }  `
$legend.textContent = currentDay


setInterval(() => {
  const currentDate = new Date()
  // const currentHour = number(currentDate.getHours())
  // const currentMinute = number(currentDate.getMinutes())
  // const currentSeconds = number(currentDate.getSeconds())

  // $hour.textContent = `${currentHour}:${currentMinute}:${currentSeconds}`

  $hour.textContent = currentDate.toLocaleTimeString()

}, 1000)
