var dia 
var diaSem
var mes
var ano

var hora
var minutos
var segundos


function loadTime(){
    const newData = new Date()
    dia = newData.getDate()
    diaSem = newData.getDay() 
    mes = newData.getMonth()
    ano = newData.getFullYear()

    hora = newData.getHours()
    minutos = newData.getMinutes()
    segundos = newData.getSeconds()

    time = setTimeout('loadTime()')
   
    dia = addZero(dia)
    hora = addZero(hora)
    minutos = addZero(minutos)
    segundos = addZero(segundos)

    switch(diaSem){
        case 0:
            diaSem = 'Domingo'
            break;
        case 1:
            diaSem = 'Segunda-Feira'
            break
        case 2:
            diaSem = 'Terça-Feira'
            break
        case 3:
            diaSem = 'Quarta-Feira'
            break
        case 4:
            diaSem = 'Quinta-Feira'
            break
        case 5:
            diaSem = 'Sexta-Feira'
            break
        case 6:
            diaSem = 'Sábado'
            break
    }

    switch(mes){
        case 0:
            mes = 'Jan.'
            break;
        case 1:
            mes = 'Fev.'    
            break;
        case 2:
            mes = 'Março'    
            break;
        case 3:
            mes = 'Abril'    
            break;
        case 4:
            mes = 'Maio'    
            break;
        case 5:
            mes = 'Jun.'    
            break;
        case 6:
            mes = 'Jul.'    
            break;
        case 7: 
            mes = 'Ago.'    
            break;
        case 8:
            mes = 'Set.'    
            break;
        case 9:
            mes = 'Out.'    
            break;
        case 10: 
            mes = 'Nov.'    
            break;
        case 11:
            mes = 'Dez.'    
            break;
        default:
            mes = 'Mês não listado'
            break;

    }

}

function appendDate(){
    loadTime()
    const timeElement = document.getElementById('time')
    const dataElement = document.getElementById('datas')
    const diaSemElement = document.getElementById('diaSem')

    timeElement.innerHTML = `${hora}:${minutos}:${segundos}`
    dataElement.innerHTML = `${dia}/${mes}/${ano}`
    diaSemElement.innerHTML = `${diaSem}`
}

function addZero(alvo){
    if(alvo <= 9){
        return '0'+alvo
    }
    return alvo
}
window.addEventListener('load', appendDate())