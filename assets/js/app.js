const seconds_needle = document.getElementById('_needle1');
const minutes_needle = document.getElementById('_needle2');
const hours_needle = document.getElementById('_needle3');



const time = new Date();

let seconds = time.getSeconds();
let minutes = time.getMinutes();
let hours = time.getHours();

var s_r = seconds *6;
var m_r = minutes*6;
var h_r = hours*30;
seconds_needle.style.transform = `translate(-50%,-100%) rotate(${s_r}deg)`
minutes_needle.style.transform = `translate(-50%,-100%) rotate(${m_r}deg)`;
hours_needle.style.transform = `translate(-50%,-100%) rotate(${h_r}deg)`;
function updateHours() {
    h_r += 30;
    hours_needle.style.transform = `translate(-50%,-100%) rotate(${h_r}deg)`;
}
function updateMinutes() {
    m_r += 6;
    minutes_needle.style.transform = `translate(-50%,-100%) rotate(${m_r}deg)`;
    if (m_r%360 == 0) {
        updateMinutes()
    }
}
function updateSeconds() {
    s_r += 6;
    seconds_needle.style.transform = `translate(-50%,-100%) rotate(${s_r}deg)`;
    if (s_r%360 == 0) {
        updateMinutes()
    }
}

setInterval(updateSeconds, 1000);
