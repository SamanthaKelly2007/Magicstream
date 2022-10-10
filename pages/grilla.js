import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getActualTime, isWeekend, getData } from '../utils/tools'
import Prog_Styles from '../styles/Programacion.module.css'

export default function Grilla() {
    const [hourList, setHourList] = useState([]);
    const [weekSerieList, setWeekSerieList] = useState([]);
    const [weekendSerieList, setWeekendSerieList] = useState([]);
    const [ampm, setAmpm] = useState(new Date().getHours() < 12? false : true);

    function changeSchedule(prop){
        setTimeout(() => {
            window.scrollTo(0,0)
        }, 100);
        
        setAmpm(prop)
    }

    const changeScheduleList = (opt) => {
        if (opt) {
            setHourList(getData(1,'PM'))
            setWeekSerieList(getData(2,'PM'))
            setWeekendSerieList(getData(3,'PM'))
        }
        else
        {
            setHourList(getData(1,'AM'))
            setWeekSerieList(getData(2,'AM'))
            setWeekendSerieList(getData(3,'AM'))
        }
    }

    useEffect(() => {
        changeScheduleList(ampm)
    }, [ampm])

    return (
    <>
      <Head>
        <title>Grilla</title>
      </Head>
      <div className={Prog_Styles.tableBox}>
        <table className={Prog_Styles.tableData}>
            <tbody>
                <tr className={Prog_Styles.titlesRow}>
                    <td>Lunes a Viernes</td>
                    <td><img src='/img/mk_logo_blue.png' alt='icon'/></td>
                    <td>Sábados y Domingos</td>
                </tr>
                
                {
                    hourList.map((hours,index) => (
                    <tr key={index} className={hours === getActualTime()? Prog_Styles.liveNow : undefined}>
                        <td className={isWeekend() === true? Prog_Styles.notToday : undefined}>{weekSerieList[index].show}</td>
                        <td>{hours}</td>
                        <td className={isWeekend() === false? Prog_Styles.notToday : undefined}>{weekendSerieList[index].show}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <div className={Prog_Styles.schedule_Buttons}>
            <button className={ !ampm? Prog_Styles.selectedButton : undefined} onClick={() => changeSchedule(false)}>
                00:00-11:30Hs
            </button>

            <button className={ ampm? Prog_Styles.selectedButton : undefined} onClick={() => changeSchedule(true)}>
                12:00-23:30Hs
            </button>
        </div>
      </div>
    </>
  )
}