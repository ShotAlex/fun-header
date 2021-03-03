const header = document.getElementById('header');

let prevPos = window.pageYOffset;
let delta = 70;

window.onscroll = () => {
    let curPos = window.pageYOffset;

    if((Math.abs(prevPos - curPos)) >= delta) {

        if(prevPos > curPos) {
            header.style.top = '0';
        } else {
            header.style.top = '-8em';
        }

        prevPos = curPos
    }
}
