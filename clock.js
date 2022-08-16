/* Getting the name of the visitor */
let visitorName = prompt('İsminizi giriniz:');
myName.innerHTML = visitorName;

/* Date */
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

function showTime() {
    const today = new Date();
    let d = days[today.getDay()];
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('myClock').innerHTML = h + ":" + m + ":" + s + " " + d;
    setTimeout(showTime, 1000);
}



function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}
showTime()

