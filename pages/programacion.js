import Head from 'next/head'
import { useState, useEffect } from 'react'
import Prog_Styles from '../styles/Programacion.module.css'

export default function Home() {

    const [tableAMPM, setTableAMPM] = useState(false)

    const changeSchedule = (prop) => {
        setTableAMPM(prop)
    }

    useEffect(() => {
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
                    <td>Lunes A Viernes</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>Sábados y Domingos</td>
                </tr>
                
                {
                tableAMPM === false?

                <>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Nivel X</td>
                        <td></td>
                        <td>00:00</td>
                        <td></td>
                        <td>Nivel X</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Detective Conan</td>
                        <td></td>
                        <td>00:30</td>
                        <td></td>
                        <td>Zenki</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>El Mundo de Beakman</td>
                        <td></td>
                        <td>01:00</td>
                        <td></td>
                        <td>Estan Arrestados</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Mikami la Cazafantasmas</td>
                        <td></td>
                        <td>01:30</td>
                        <td></td>
                        <td>Pelswick</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Slam Dunk</td>
                        <td></td>
                        <td>02:00</td>
                        <td></td>
                        <td>Koni Chan</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Ranma 1/2</td>
                        <td></td>
                        <td>02:30</td>
                        <td></td>
                        <td>Transformers Beast Wars</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sailor Moon</td>
                        <td></td>
                        <td>03:00</td>
                        <td></td>
                        <td>Detective Conan</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Zenki</td>
                        <td></td>
                        <td>03:30</td>
                        <td></td>
                        <td>Mikami la Cazafantasmas</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Estan Arrestados</td>
                        <td></td>
                        <td>04:00</td>
                        <td></td>
                        <td>Slam Dunk</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sakura Card Captor</td>
                        <td></td>
                        <td>04:30</td>
                        <td></td>
                        <td>Sakura Card Captor</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Transformers Beast Wars</td>
                        <td></td>
                        <td>05:00</td>
                        <td></td>
                        <td>Ranma 1/2</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>A Jugar con Hugo</td>
                        <td></td>
                        <td>05:30</td>
                        <td></td>
                        <td>A Jugar con Hugo</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Nivel X</td>
                        <td></td>
                        <td>06:00</td>
                        <td></td>
                        <td>Nivel X</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Kito Pizzas</td>
                        <td></td>
                        <td>06:30</td>
                        <td></td>
                        <td>Kito Pizzas</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Mikami la Cazafantasmas</td>
                        <td></td>
                        <td>07:00</td>
                        <td></td>
                        <td>Mikami la Cazafantasmas</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Doraemon</td>
                        <td></td>
                        <td>07:30</td>
                        <td></td>
                        <td>Doraemon</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Dragon Ball Z</td>
                        <td></td>
                        <td>08:00</td>
                        <td></td>
                        <td>Dragon Ball Z</td>
                    </tr>
                    
                    <tr className={Prog_Styles.tableRow}>
                        <td>Los Caballeros del Zodiaco</td>
                        <td></td>
                        <td>08:30</td>
                        <td></td>
                        <td>Los Caballeros del Zodiaco</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Ranma 1/2</td>
                        <td></td>
                        <td>09:00</td>
                        <td></td>
                        <td>Ranma 1/2</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sakura Card Captor</td>
                        <td></td>
                        <td>09:30</td>
                        <td></td>
                        <td>El Mundo de Beakman</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Koni Chan</td>
                        <td></td>
                        <td>10:00</td>
                        <td></td>
                        <td>Pelswick</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Slam Dunk</td>
                        <td></td>
                        <td>10:30</td>
                        <td></td>
                        <td>Slam Dunk</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Nivel X</td>
                        <td></td>
                        <td>11:00</td>
                        <td></td>
                        <td>Transformers Beast Wars</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>A Jugar Con Hugo</td>
                        <td></td>
                        <td>11:30</td>
                        <td></td>
                        <td>Kito Pizzas</td>
                    </tr>
                
                </>
                :
                <>
                    <tr className={Prog_Styles.tableRow}>
                        <td>Kito Pizzas</td>
                        <td></td>
                        <td>12:00</td>
                        <td></td>
                        <td>A Jugar con Hugo</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Zenki</td>
                        <td></td>
                        <td>12:30</td>
                        <td></td>
                        <td>Zenki</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Dragon Ball Z</td>
                        <td></td>
                        <td>13:00</td>
                        <td></td>
                        <td>Dragon Ball Z</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sailor Moon</td>
                        <td></td>
                        <td>13:30</td>
                        <td></td>
                        <td>Estan Arrestados</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>El Mundo de Beakman</td>
                        <td></td>
                        <td>14:00</td>
                        <td></td>
                        <td>El Mundo de Beakman</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Koni Chan</td>
                        <td></td>
                        <td>14:30</td>
                        <td></td>
                        <td>Doraemon</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Zona Virtual</td>
                        <td></td>
                        <td>15:00</td>
                        <td></td>
                        <td>Zona Virtual</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Detective Conan</td>
                        <td></td>
                        <td>15:30</td>
                        <td></td>
                        <td>Mikami la Cazafantasmas</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Transformers Beast Wars</td>
                        <td></td>
                        <td>16:00</td>
                        <td></td>
                        <td>Koni Chan</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Los Caballeros del Zodiaco</td>
                        <td></td>
                        <td>16:30</td>
                        <td></td>
                        <td>Los Caballeros del Zodiaco</td>
                    </tr>
                    
                    <tr className={Prog_Styles.tableRow}>
                        <td>Estan Arrestados</td>
                        <td></td>
                        <td>17:00</td>
                        <td></td>
                        <td>Estan Arrestados</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Ranma 1/2</td>
                        <td></td>
                        <td>17:30</td>
                        <td></td>
                        <td>Detective Conan</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Slam Dunk</td>
                        <td></td>
                        <td>18:00</td>
                        <td></td>
                        <td>Slam Dunk</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Pelswick</td>
                        <td></td>
                        <td>18:30</td>
                        <td></td>
                        <td>Pelswick</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sakura Card Captor</td>
                        <td></td>
                        <td>19:00</td>
                        <td></td>
                        <td>Sakura Card Captor</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>El Mundo de Beakman</td>
                        <td></td>
                        <td>19:30</td>
                        <td></td>
                        <td>Zona Virtual</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Zenki</td>
                        <td></td>
                        <td>20:00</td>
                        <td></td>
                        <td>Zenki</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Transformers Beast Wars</td>
                        <td></td>
                        <td>20:30</td>
                        <td></td>
                        <td>Transformers Beast Wars</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Detective Conan</td>
                        <td></td>
                        <td>21:00</td>
                        <td></td>
                        <td>Detective Conan</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Dragon Ball Z</td>
                        <td></td>
                        <td>21:30</td>
                        <td></td>
                        <td>Dragon Ball Z</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Mikami la Cazafantasmas</td>
                        <td></td>
                        <td>22:00</td>
                        <td></td>
                        <td>Mikami la Cazafantasmas</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Zona Virtual</td>
                        <td></td>
                        <td>22:30</td>
                        <td></td>
                        <td>Ranma 1/2</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Sailor Moon</td>
                        <td></td>
                        <td>23:00</td>
                        <td></td>
                        <td>Sailor Moon</td>
                    </tr>

                    <tr className={Prog_Styles.tableRow}>
                        <td>Los Caballeros del Zodiaco</td>
                        <td></td>
                        <td>23:30</td>
                        <td></td>
                        <td>Los Caballeros del Zodiaco</td>
                    </tr>
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