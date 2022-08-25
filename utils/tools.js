import seriesSchedule from '../pages/api/serie.json'

export const setTheTime = (number) =>{
    const setMinutes = (hour) =>{

        switch (hour) {
            case 1: 
                return "00:00";
                break
            case 2: 
                return "00:30";
                break
            case 3: 
                return "01:00";
                break
            case 4: 
                return "01:30";
                break
            case 5: 
                return "02:00";
                break
            case 6: 
                return "02:30";
                break
            case 7: 
                return "03:00";
                break
            case 8: 
                return "03:30";
                break
            case 9: 
                return "04:00";
                break
            case 10: 
                return "04:30";
                break
            case 11: 
                return "05:00";
                break
            case 12: 
                return "05:30";
                break
            case 13: 
                return "06:00";
                break
            case 14: 
                return "06:30";
                break
            case 15: 
                return "07:00";
                break
            case 16: 
                return "07:30";
                break
            case 17: 
                return "08:00";
                break
            case 18: 
                return "08:30";
                break
            case 19: 
                return "09:00";
                break
            case 20: 
                return "09:30";
                break
            case 21: 
                return "10:00";
                break
            case 22: 
                return "10:30";
                break
            case 23: 
                return "11:00";
                break
            case 24: 
                return "11:30";
                break
            case 25: 
                return "12:00";
                break
            case 26: 
                return "12:30";
                break
            case 27: 
                return "13:00";
                break
            case 28: 
                return "13:30";
                break
            case 29: 
                return "14:00";
                break
            case 30: 
                return "14:30";
                break
            case 31: 
                return "15:00";
                break
            case 32: 
                return "15:30";
                break
            case 33: 
                return "16:00";
                break
            case 34: 
                return "16:30";
                break
            case 35: 
                return "17:00";
                break
            case 36: 
                return "17:30";
                break
            case 37: 
                return "18:00";
                break
            case 38: 
                return "18:30";
                break
            case 39: 
                return "19:00";
                break
            case 40: 
                return "19:30";
                break
            case 41: 
                return "20:00";
                break
            case 42: 
                return "20:30";
                break
            case 43: 
                return "21:00";
                break
            case 44: 
                return "21:30";
                break
            case 45: 
                return "22:00";
                break
            case 46: 
                return "22:30";
                break
            case 47: 
                return "23:00";
                break
            case 48: 
                return "23:30";
                break
            default:
                break;
        }
    }

    return setMinutes(number)
}

export const setDBTime = (number) =>{
    const setMinutes = (hour) =>{

        switch (hour) {
            case "00:00":
                return 1;
                break
            case "00:30":
                return 2;
                break
            case "01:00":
                return 3;
                break
            case "01:30":
                return 4;
                break
            case "02:00":
                return 5;
                break
            case "02:30":
                return 6;
                break
            case "03:00":
                return 7;
                break
            case "03:30":
                return 8;
                break
            case "04:00":
                return 9;
                break
            case "04:30":
                return 10;
                break
            case "05:00":
                return 11;
                break
            case "05:30":
                return 12;
                break
            case "06:00":
                return 13;
                break
            case "06:30":
                return 14;
                break
            case "07:00":
                return 15;
                break
            case "07:30":
                return 16;
                break
            case "08:00":
                return 17;
                break
            case "08:30":
                return 18;
                break
            case "09:00":
                return 19;
                break
            case "09:30":
                return 20;
                break
            case "10:00":
                return 21;
                break
            case "10:30":
                return 22;
                break
            case "11:00":
                return 23;
                break
            case "11:30":
                return 24;
                break
            case "12:00":
                return 25;
                break
            case "12:30":
                return 26;
                break
            case "13:00":
                return 27;
                break
            case "13:30":
                return 28;
                break
            case "14:00":
                return 29;
                break
            case "14:30":
                return 30;
                break
            case "15:00":
                return 31;
                break
            case "15:30":
                return 32;
                break
            case "16:00":
                return 33;
                break
            case "16:30":
                return 34;
                break
            case "17:00":
                return 35;
                break
            case "17:30":
                return 36;
                break
            case "18:00":
                return 37;
                break
            case "18:30":
                return 38;
                break
            case "19:00":
                return 39;
                break
            case "19:30":
                return 40;
                break
            case "20:00":
                return 41;
                break
            case "20:30":
                return 42;
                break
            case "21:00":
                return 43;
                break
            case "21:30":
                return 44;
                break
            case "22:00":
                return 45;
                break
            case "22:30":
                return 46;
                break
            case "23:00":
                return 47;
                break
            case "23:30":
                return 48;
                break
            default:
                break;
        }
    }

    return setMinutes(number)
}

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
                tiempo : setTheTime(i),
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

    const hour = setDBTime(hourString)
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