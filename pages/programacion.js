import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getActualTime, isWeekend, getSchedule } from '../utils/tools'
import Prog_Styles from '../styles/Programacion.module.css'

export default function Home() {
    const [listAM, setListAM] = useState([])
    const [listPM, setListPM] = useState([])
    const [tableAMPM, setTableAMPM] = useState(false)

    const time = new Date().getHours()
    const rightNow = getActualTime()
    const weekend = isWeekend()

    function changeSchedule(prop){
        setTimeout(() => {
            window.scrollTo(0,0)
        }, 100);
        
        setTableAMPM(prop)
    }

    useEffect(() => {
        setListAM(getSchedule("AM"))
        setListPM(getSchedule("PM"))

        return time < 12 ? setTableAMPM(false) : setTableAMPM(true)
    }, [])

    return (
    <>
      <Head>
        <title>Programación</title>
      </Head>
      <div className='lowerScreen'>
        <p>Lo sentimos para ver la grilla gira la pantalla de tu celular o ingresa desde otro dispositivo.</p>
      </div>
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
                    listAM.map(serie => (
                        <tr key={serie.id} className={`${serie.tiempo === rightNow? Prog_Styles.liveNow : ""}`}>
                        {
                            weekend === true?
                            <td className={Prog_Styles.notToday}>{serie.nombre}</td>
                            :
                            <td>{serie.nombre}</td>
                        }
                        
                        <td>{serie.tiempo}</td>
                        
                        {
                            weekend === false?
                            <td className={Prog_Styles.notToday}>{serie.nombre_weekend}</td>
                            :
                            <td>{serie.nombre_weekend}</td>
                        }
                        </tr>
                    ))
                }
                </>
                :
                <>
                {
                    listPM.map(serie => (
                        <tr key={serie.id} className={`${serie.tiempo === rightNow? Prog_Styles.liveNow : ""}`}>
                        {
                            weekend === true?
                            <td className={Prog_Styles.notToday}>{serie.nombre}</td>
                            :
                            <td>{serie.nombre}</td>
                        }
                        
                        <td>{serie.tiempo}</td>
                        
                        {
                            weekend === false?
                            <td className={Prog_Styles.notToday}>{serie.nombre_weekend}</td>
                            :
                            <td>{serie.nombre_weekend}</td>
                        }
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