import seriesSchedule from '../pages/api/serie.json'
import hoursTable from '../pages/api/hours.json'

export const getActualTime = () =>{
    let hours = new Date().toLocaleString('es-AR', { hour:'2-digit', timeZone: 'America/Buenos_Aires'})
    let minutes = new Date().toLocaleString('es-AR', { minute:'2-digit', timeZone: 'America/Buenos_Aires'})
    minutes = minutes >= 0 && minutes < 30? "00" : "30"

    return hours+":"+minutes
}

export const isWeekend = () =>{
    let weekend = new Date().getDay()

    return weekend = weekend === 0 || weekend === 6? true : false
}

export const getSchedule = (option) =>{
    let list = [];

    for (let i = 0; i <= 48; i++) {
        seriesSchedule.filter(serie => serie.emision_1_week === i || serie.emision_2_week === i  || serie.emision_3_week === i ).map(dato => (
        list[i] = {
                id : i,
                nombre : dato.nombre,
                tiempo : hoursTable[i-1],
                nombre_weekend : "No Disponible por Ahora"
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

export const getCurrentNextShow = (hourString, weekend, nextShow) =>{

    const hour = hoursTable.indexOf(hourString)+1
    const nextHour = hour === 48? 1 : hour+1 
    const list = seriesSchedule
    let current, next

    if(weekend){
        current = list.filter(show => show.emision_1_weekend === hour || show.emision_2_weekend === hour || show.emision_3_weekend === hour).map((show) => {return show})
        next = list.filter(show => show.emision_1_weekend === nextHour || show.emision_2_weekend === nextHour || show.emision_3_weekend === nextHour).map((show) => {return show})
    }else{
        current = list.filter(show => show.emision_1_week === hour || show.emision_2_week === hour || show.emision_3_week === hour).map((show) => {return show})
        next = list.filter(show => show.emision_1_week === nextHour || show.emision_2_week === nextHour || show.emision_3_week === nextHour).map((show) => {return show})
    }

    return nextShow? next[0] : current[0]
}

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

export const logoNav = () => {
    const nav = document.querySelector('.nav')

    if(nav && nav.classList.contains('navOpen')){
        openNav()
    }   
}