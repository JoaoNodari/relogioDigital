const clock = setInterval(function time() {
    var hora = window.document.getElementById('hours')
    var minutos = window.document.getElementById('minutes')
    var segundos = window.document.getElementById('seconds')
    var data = window.document.getElementById('date')


    var horario = new Date()

    if (hora < 10) hora = '0' + hora
    if (minutos < 10) minutos = '0' + minutos
    if (segundos < 10) segundos = '0' + segundos

    hora.innerHTML = horario.getHours()
    minutos.innerHTML = horario.getMinutes()
    segundos.innerHTML = horario.getSeconds()
    
    data.innerHTML = horario.toLocaleDateString()
    data.style.textAlign = 'center'
    data.style.fontSize = '1.3em'
    data.style.fontWeight = 'bold'
    data.style.margin = '10px 0px'
    
})