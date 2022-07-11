import Head from 'next/head'
import { useState, useEffect } from 'react'
import seriesSchedule from './api/serie.json'
import {setTheTime} from '../utils/tools'
import Prog_Styles from '../styles/Programacion.module.css'

export default function Home() {
    const [ListAM, setListAM] = useState([])
    const [ListPM, setListPM] = useState([])
    const [tableAMPM, setTableAMPM] = useState(false)
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()
    hours = hours >= 0 && hours <= 9? "0"+hours : hours
    minutes = minutes >= 0 && minutes < 30? "00" : "30"
    let rightNow = hours+":"+minutes
    
    let weekend = new Date().getDay()
    weekend = weekend === 0 || weekend === 6? true : false

    const changeSchedule = (prop) => {
        setTableAMPM(prop)
    }

    const getSchedule = () =>{
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

    useEffect(() => {
        setListAM(getSchedule().slice(0,25))
        setListPM(getSchedule().slice(25,49))
        const today = new Date(),
        time = today.getHours()

        return time < 12 ? setTableAMPM(false) : setTableAMPM(true)
    }, [])

  return (
    <>
      <Head>
        <title>Programación</title>
      </Head>
      <div className={Prog_Styles.tableBox}>
        <table className={Prog_Styles.tableData}>
            <tbody>
                <tr className={Prog_Styles.titlesRow}>
                    <td>Lunes a Viernes</td>
                    <td><img src='/img/mk_logo_blue.png'/></td>
                    <td>Sábados y Domingos</td>
                </tr>
                
                {
                tableAMPM === false?
                <>
                {
                    ListAM.map(serie => (
                        <tr key={serie.id} className={`${serie.tiempo === rightNow? "liveNow" : ""}`}>
                        <td>{serie.nombre}</td>
                        
                        <td>{serie.tiempo}</td>
                        
                        <td>{serie.nombre_weekend}</td>
                        </tr>
                    ))
                }
                </>
                :
                <>
                {
                    ListPM.map(serie => (
                        <tr key={serie.id} className={`${serie.tiempo === rightNow? "liveNow" : ""}`}>
                        <td className={`${weekend === true && Prog_Styles.notToday}`} >{serie.nombre}</td>
                        
                        <td>{serie.tiempo}</td>
                        
                        <td className={`${weekend === false && Prog_Styles.notToday}`}>{serie.nombre_weekend}</td>
                        </tr>
                    ))
                }
                </>
                }
            </tbody>
        </table>
        <div className={Prog_Styles.schedule_Buttons}>
            <button className={ !tableAMPM? Prog_Styles.selectedButton : ''} onClick={() => changeSchedule(false)}>
                00:00-11:30Hs
            </button>

            <button className={ tableAMPM? Prog_Styles.selectedButton : ''} onClick={() => changeSchedule(true)}>
                12:00-23:30Hs
            </button>
        </div>
      </div>
    </>
  )
}