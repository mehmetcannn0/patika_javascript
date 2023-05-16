let inputname =prompt("Adiniz nedir? ")
let username = document.querySelector("#myName")
username.innerHTML=`${inputname}`

function showTime(){
let dateData = new Date()
let hours = dateData.getHours()
let minutes=dateData.getMinutes()
let seconds=dateData.getSeconds()

let days = [ 'Pazar','Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi']
let dayName = days[dateData.getDay()]

let info =document.querySelector("#myClock")
info.innerHTML = `${hours}:${minutes}:${seconds} ${dayName}`

}
setInterval(showTime,1000);