import Head from 'next/head'
import { useState, useEffect, useRef } from 'react'
import animateScrollTo from 'animated-scroll-to';
import { getActualTime, isWeekend, getSchedule, scrollToBlock } from '../utils/tools'
import Prog_Styles from '../styles/Programacion.module.css'

export default function Home() {
    const isLiveNow = useRef()
    const [ListAM, setListAM] = useState([])
    const [ListPM, setListPM] = useState([])
    const [tableAMPM, setTableAMPM] = useState(false)

    const time = new Date().getHours()
    const rightNow = getActualTime()
    const weekend = isWeekend()

    function changeSchedule(prop){
        animateScrollTo(0)
        setTableAMPM(prop)
    }

    useEffect(() => {
        setListAM(getSchedule().slice(0,25))
        setListPM(getSchedule().slice(25,49))

        return time < 12 ? setTableAMPM(false) : setTableAMPM(true)
    }, [])

    useEffect(() => {
        scrollToBlock(isLiveNow)
    }, [tableAMPM])

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
                        <td className={`${weekend === true && Prog_Styles.notToday}`}>{serie.nombre}</td>
                        
                        {
                            serie.tiempo === rightNow?
                            <td ref={isLiveNow}>{serie.tiempo}</td>
                            :
                            <td>{serie.tiempo}</td>
                        }
                        
                        <td className={`${weekend === false && Prog_Styles.notToday}`}>{serie.nombre_weekend}</td>
                        </tr>
                    ))
                }
                </>
                :
                <>
                {
                    ListPM.map(serie => (
                        <tr key={serie.id} className={`${serie.tiempo === rightNow? "liveNow" : ""}`}>
                        <td className={`${weekend === true && Prog_Styles.notToday}`}>{serie.nombre}</td>
                        
                        {
                            serie.tiempo === rightNow?
                            <td ref={isLiveNow}>{serie.tiempo}</td>
                            :
                            <td>{serie.tiempo}</td>
                        }
                        
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