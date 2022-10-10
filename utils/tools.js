import weekTable from '../pages/api/week.json'
import weekendTable from '../pages/api/weekend.json'
import hoursTable from '../pages/api/hours.json'

//Nav Menu Button
//Check if the menu is opened
//if its opened the scroll on page is enabled, the header is transparent
//and the menu classes are removed

//if the menu is not opened
//the header background is changed
//the page scroll is disabled
//and finally the menu is opened

export const openNav = () => {
    const nav = document.querySelector('.nav')

    if(nav.classList.contains('navOpen')){
        nav.classList.add('navClose')
        document.body.classList.remove('noScroll')
        document.getElementsByTagName('header')[0].classList.remove('header_bg')
        setTimeout(() => {
            nav.classList.remove('navClose')
        }, 300);
        setTimeout(() => {
            nav.classList.remove('navOpen')
        }, 200);
    }
    else
    {
        document.getElementsByTagName('header')[0].classList.toggle('header_bg')
        document.body.classList.toggle('noScroll')
        nav.classList.toggle('navOpen')
    }
}

// Hide menu slider when the page logo is pressed

export const logoNav = () => {
    const nav = document.querySelector('.nav')

    if(nav && nav.classList.contains('navOpen')){
        openNav()
    }   
}

//Schedule section

//gets the actual time on the client but converted to Argentinean Time
//this function only returns the time in blocks of 30 minutes
//for example
//10:11 will be returned as 10:00
//10:37 will be returned as 10:30

export const getActualTime = () =>{
    let hours = new Date().toLocaleString('es-AR', { hour:'2-digit', timeZone: 'America/Buenos_Aires'})
    let minutes = new Date().toLocaleString('es-AR', { minute:'2-digit', timeZone: 'America/Buenos_Aires'})
    minutes = Number(minutes);
    minutes = minutes < 30? "00" : "30"

    return hours+":"+minutes
}

//if its weekend returns true if not false

export const isWeekend = () =>{
    const weekend = new Date().getDay()

    return weekend === 0 || weekend === 6? true : false
}

// Returns Actual and Next show
//validates week and weekend tables 
//validates 48 shows from week and weekend tables
//validates friday and saturday at 23:30 and applys the right table for the day
//returns an object with the current show and next show

export const nextShow = (rightNow,weekStatus) => {
    const today = new Date().getDay()
    const indexHour = hoursTable.indexOf(rightNow)
    const indexHourNext = indexHour+1 > 47 ? 0 : indexHour+1
    const isSaturday = indexHour+1 > 47 && today === 5 ? 1 : null
    const weekdb = weekStatus? weekendTable : weekTable

    return {
        now : weekdb[indexHour].show,
        next : isSaturday? weekendTable[0].show : weekdb[indexHourNext].show
    }
}

//returns an array validating morning ,afternoon and hours tables
//dbopt: 1 returns hours, 2 returns week, 3 returns weekend
//ampm: returns the half of each table depending the morning or afternoon parameter

export const getData = (dbOpt, ampm) => {
    if (ampm === 'AM') {
        return dbOpt === 1? hoursTable.slice(0,24) : dbOpt === 2? weekTable.slice(0,24) : weekendTable.slice(0,24)
    }
    else
    {
        return dbOpt === 1? hoursTable.slice(24,48) : dbOpt === 2? weekTable.slice(24, 48) : weekendTable.slice(24,48)
    }
}