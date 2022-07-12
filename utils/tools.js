import seriesSchedule from '../pages/api/serie.json'

export const setTheTime = (number) =>{
    const setMinutes = (hour) =>{
        //odio esta funcion pero lo mejorare luego
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

export const getActualTime = () =>{
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    hours = hours >= 0 && hours <= 9? "0"+hours : hours
    minutes = minutes >= 0 && minutes < 30? "00" : "30"

    return hours+":"+minutes
}

export const isWeekend = () =>{
    let weekend = new Date().getDay()

    return weekend = weekend === 0 || weekend === 6? true : false
}

export const getSchedule = () =>{
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

    return list
}
