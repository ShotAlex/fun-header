const headerTop = document.getElementById('header-top')
const menu = document.getElementById('menu')

let headerTopHeight = headerTop.offsetHeight
let menuHeight = menu.offsetHeight
let headerHeight = headerTopHeight + menuHeight


let prevPos = window.pageYOffset;
let delta = 70;


window.onscroll = () => {
    let curPos = window.pageYOffset

    if (headerTopHeight > curPos) {
        menu.style.transform = '0s'
        menu.style.position = 'static'
    } else if (curPos >= headerTopHeight && curPos < headerHeight) {
        menu.style.transform = '0.2s'
        menu.style.top = '0'
    } else {
        menu.style.top = `${-menuHeight}px`
        menu.style.position = 'fixed'

        if(curPos < prevPos) {
            menu.style.top = `0px`
        } else {
            menu.style.top = `${-menuHeight}px`
        }
        prevPos = curPos
    }


    // if(curPos <= (headerTopHeight + menuHeight++) ) {
    //     menu.style.top = `${headerTopHeight - curPos - 1}px`
    // } else if (curPos > prevPos) {
    //     menu.style.top = `${-menuHeight}px`;
    // } else {
    //     menu.style.top = `0`;
    // }
    // prevPos = curPos

}