const $hora = document.querySelector('.hora')
const $fecha = document.querySelector('.fecha')
const $contenedor = document.querySelector('.relojContenedor')

const showDate = () => {
  let date = new Date()
  let hour = formatDate(date.getHours())
  let minute = formatDate(date.getMinutes())
  let second = formatDate(date.getSeconds())
  $hora.innerHTML = `${hour}:${minute}:${second}`

  let days = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado']
  let month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Ago','Sep','Oct','Nov','Dic']
  let getDay = days[date.getDay()]
  let getMonth = month[date.getMonth()]
  let number = formatDate(date.getDate())
  $fecha.innerHTML = `${getDay} ${number} de ${getMonth}`

  //funcion toggle es como un interruptor, si esta aplicado el estilo, lo va a quitar
  $contenedor.classList.toggle('animar')

}


setInterval(showDate,1000)

const formatDate = (date) => {
  if(date < 10){
    date = '0' + date
  }
  return date
}