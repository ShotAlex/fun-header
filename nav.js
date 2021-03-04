const headerTop = document.getElementById('header-top');
const menu = document.getElementById('menu');

let headerTopHeight = headerTop.offsetHeight;
let menuHeight = menu.offsetHeight;
let headerHeight = headerTopHeight + menuHeight;

let prevPos = window.pageYOffset;
let delta = 70;
let dotShow = headerHeight;


window.onscroll = () => {
    let curPos = window.pageYOffset;

    if (headerTopHeight > curPos) {
        menu.style.position = 'static';
    } else if (curPos >= headerTopHeight && curPos < headerHeight) {
        menu.style.top = '0';
        menu.style.transform = 'translateY(0px)';
    } else {
        menu.style.position = 'fixed';
        menu.style.top = `${0}px`;

        if(curPos < prevPos) {
            if(dotShow - curPos > delta) {
                menu.style.transform = 'translateY(0px)';
            }
        } else {
            menu.style.transform = `translateY(-${menuHeight}px)`;
            dotShow = curPos;
        }
        prevPos = curPos;
    }
}