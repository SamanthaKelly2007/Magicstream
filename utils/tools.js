import weekTable from '../db/week.json'
import weekendTable from '../db/weekend.json'
import hoursTable from '../db/hours.json'

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

/**
 * Gets the actual time on the client but converted to Argentinean Time in blocks of 30 minutes
 * for example
 * 10:11 will be returned as "10:00"
 * 10:37 will be returned as "10:30"
 * @return {string} the time in string
*/

export const getActualTime = () =>{
    let hours = new Date().toLocaleString('es-AR', { hour:'2-digit', timeZone: 'America/Buenos_Aires'})
    let minutes = new Date().toLocaleString('es-AR', { minute:'2-digit', timeZone: 'America/Buenos_Aires'})
    minutes = Number(minutes);
    minutes = minutes < 30? "00" : "30"

    return hours+":"+minutes
}

/**
 * validates if its weekend
 * @return {boolean} returns if its weekend or not
*/
export const isWeekend = () =>{
    const weekend = new Date().getDay()

    return weekend === 0 || weekend === 6? true : false
}

/**Returns Actual and Next show
 * validates week and weekend tables 
 * validates 48 blocks of data for each week and weekend tables
 * validates friday and saturday at 23:30 and applys the right table data for the day
 * @param {string} rightNow the actual time but parsed with the function getActualTime
 * @param {boolean} weekStatus if its weekend or not
 * @return {array} returns an object with the current and next show
*/
export const nextShow = (rightNow,weekStatus) => {
    try {
        const today = new Date().getDay()
        const indexHour = hoursTable.indexOf(rightNow)
        const indexHourNext = indexHour+1 > 47 ? 0 : indexHour+1
        const isSaturday = indexHour+1 > 47 && today === 5 ? 1 : null
        const weekdb = weekStatus? weekendTable : weekTable

        return {
            now : weekdb[indexHour].show,
            next : isSaturday? weekendTable[0].show : weekdb[indexHourNext].show
        }
    } catch (err) {
        return {
            now : 'error',
            next : 'error'
        }   
    }
}

/**
 * Returns the schedule list validating morning ,afternoon and hours tables
 @param {string} dbOpt requires the value between 1 and 3 about the table wanted: 1 returns hours, 2 returns week, 3 returns weekend
 @param {string} ampm requires the values "AM" or "PM" that means morning or afternoon
 @return {array} returns a table with the values filtered by the params
*/
export const getData = (dbOpt, ampm) => {
    if (ampm === 'AM') {
        return dbOpt === 1? hoursTable.slice(0,24) : dbOpt === 2? weekTable.slice(0,24) : weekendTable.slice(0,24)
    }
    else
    {
        return dbOpt === 1? hoursTable.slice(24,48) : dbOpt === 2? weekTable.slice(24, 48) : weekendTable.slice(24,48)
    }
}