import seriesSchedule from '../pages/api/serie.json'
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
        }, 200);
        setTimeout(() => {
            nav.classList.remove('navOpen')
        }, 100);
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

//gets the actual time on the client but converted to Argentina Time
//this function only returns the time in blocks of 30 minutes
//for example
//10:11 will be returned as 10:00
//10:37 will be returned as 10:30

export const getActualTime = () =>{
    let hours = new Date().toLocaleString('es-AR', { hour:'2-digit', timeZone: 'America/Buenos_Aires'})
    let minutes = new Date().toLocaleString('es-AR', { minute:'2-digit', timeZone: 'America/Buenos_Aires'})
    minutes = minutes < 30? "00" : "30"

    return hours+":"+minutes
}

//if its weekend returns true if not false

export const isWeekend = () =>{
    let weekend = new Date().getDay()

    return weekend = weekend === 0 || weekend === 6? true : false
}

//this function returns a list of 24 sections
//the option param is to specify which list do you want: AM or PM
//in the first for checks the series database and gets the week data
//and replace the time index of the section with the specific hour (blocks of 30 minutes)
//in the second for check for the weekend data
//and returns the list sliced for AM or PM schedule based on the option param


export const getSchedule = (option) =>{
    let list = [];

    for (let i = 0; i <= 48; i++) {
        seriesSchedule.filter(serie => serie.emision_1_week === i || serie.emision_2_week === i  || serie.emision_3_week === i ).map(dato => (
        list[i] = {
                id : i,
                nombre : dato.nombre,
                tiempo : hoursTable[i-1],
                nombre_weekend : "Fuera de Transmisión"
            }
        ))
    }

    for (let i = 0; i <= 48; i++) {
        seriesSchedule.filter(serie => serie.emision_1_weekend === i || serie.emision_2_weekend === i || serie.emision_3_weekend === i).map(dato => (
        list[i] = {
                ...list[i],
                nombre_weekend : dato.nombre
            }
        ))
    }

    return option === "AM" ? list.slice(0,25) : option === "PM" ? list.slice(25,49) : list
}

//this function returns an object with the current and next show
//we get the actual time value based in the hours table and weekend status
//then validate the next show time based on the hour if its 48 the it returns 1 to repeat the day
//check if its weekend or not and filter the data based on the data we saved before
//then return the object with the data found in the previous filters

export const getCurrentNextShow = () =>{

    const hour = hoursTable.indexOf(getActualTime())+1
    const weekend = isWeekend()
    const nextHour = hour === 48? 1 : hour+1
    let current, next

    let currentNext = [
        {
            id: 1,
            show: ""
        },
        {
            id: 2,
            show: ""
        }
    ]

    if(weekend){
        current = seriesSchedule.find(show => show.emision_1_weekend === hour || show.emision_2_weekend === hour || show.emision_3_weekend === hour)
        next = seriesSchedule.find(show => show.emision_1_weekend === nextHour || show.emision_2_weekend === nextHour || show.emision_3_weekend === nextHour)
    }else{
        current = seriesSchedule.find(show => show.emision_1_week === hour || show.emision_2_week === hour || show.emision_3_week === hour)
        next = seriesSchedule.find(show => show.emision_1_week === nextHour || show.emision_2_week === nextHour || show.emision_3_week === nextHour)
    }

    currentNext[0].show = current.nombre? current.nombre : "Cargando..."
    currentNext[1].show = next.nombre? next.nombre : "Cargando..."

    return currentNext
}