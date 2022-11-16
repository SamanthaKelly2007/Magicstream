import Head from 'next/head'
import { useState, useEffect } from 'react'
import { getActualTime, isWeekend, getData } from '../utils/tools'

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
            setHourList(getData(1,'AM')) // 1,'AM'
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

        <div className='tableBox'>
        <div className='titlesRow'>
            <div className='bottom_arrow'>
                <p>Lunes a Viernes</p>
            </div>
            <div>
                <p>::::::::</p>
            </div>
            <div className='bottom_arrow'>
                <p>Sábados y Domingos</p>
            </div>
        </div>
        <table className='tableData'>
            <tbody>                
                {
                    hourList.map((hours,index) => (
                    <tr key={index} className={hours === getActualTime()? 'liveNow' : undefined}>
                        <td className={isWeekend() === true? 'notToday' : undefined}>{weekSerieList[index].show}</td>
                        <td>{hours}</td>
                        <td className={isWeekend() === false? 'notToday' : undefined}>{weekendSerieList[index].show}</td>
                    </tr>
                    ))
                }
            </tbody>
        </table>
        <div className='schedule_Buttons'>
            <div>
                <button className={ !ampm? 'selectedButton' : undefined} onClick={() => changeSchedule(false)}>
                    0hs a 11:30Hs
                </button>
            </div>
            <div>
                <p>::::::::</p>
            </div>
            <div>
                <button className={ ampm? 'selectedButton' : undefined} onClick={() => changeSchedule(true)}>
                    12:00hs a 23:30Hs
                </button>
            </div>
        </div>
      </div>
    </>
  )
}