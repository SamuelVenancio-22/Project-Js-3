let number = 0
let cron 
let h1 = document.querySelector('.time')
const btn1time = document.querySelector(".btn-1")

function start() {
    cron = setInterval(() => {
        number++
        let date = new Date(number * 1000)
        h1.innerHTML = date.toLocaleTimeString('pt-BR', { hour12: false, timeZone: 'UTC' })
    }, 1000)
}

 function stop() {
    clearInterval(cron)
}

function reset() {
    clearInterval(cron)
    number = 0
    h1.innerHTML = '00:00:00'
}




    