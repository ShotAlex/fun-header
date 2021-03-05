const headerTop = document.getElementById('header-top');
const header = document.getElementById('header');

const menu = document.getElementById('menu');

let headerTopHeight = headerTop.offsetHeight;
let menuHeight = menu.offsetHeight;
let headerHeight = headerTopHeight + menuHeight;

let prevPos = window.pageYOffset;
let delta = 70;
let dotShow = headerHeight;


window.onscroll = function() {
    visibleMenu()
//     // window.requestAnimationFrame(visibleMenu)
//     // window.webkitRequestAnimationFrame(visibleMenu)
}

// visibleMenu()

function visibleMenu() {
    let curPos = window.pageYOffset;

    // top of the screen between Top Menu in Header
    if (headerTopHeight > curPos) {
        menu.classList.remove('fixed')
        header.style.paddingBottom = 0;

    // top of the screen between Menu in Header
    } else if (curPos > headerTopHeight && curPos < headerHeight) {
        menu.style.transform = 'translateY(0px)';

    // top of the screen on rest of the page
    } else {
        menu.style.top = `${-menuHeight}px`
        header.style.paddingBottom = `${menuHeight}px`
        menu.classList.add('fixed')

        if(curPos < prevPos) {
            if(dotShow - curPos > delta) {
                // menu.style.transform = 'translateY(0px)';
                menu.style.transform = `translateY(${menuHeight}px)`;

            }
        } else {
            menu.style.transform = `translateY(-${menuHeight}px)`;
            dotShow = curPos;
        }
        prevPos = curPos;
    }
}




















// TEST event onWheel
// const fun = document.getElementById('fun')
// let hOneSize = 20;

// fun.onwheel = (e) => {
//     hOneSize += e.deltaY;
//     fun.style.fontSize = `${hOneSize}px`;
// }