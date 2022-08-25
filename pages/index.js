import Head from 'next/head'
import { useState, useEffect } from 'react'
import Player from '../components/Player'
import { isWeekend, getActualTime, getCurrentNextShow } from '../utils/tools'
import {
  CSSTransition
} from 'react-transition-group';

export default function Home() {
  const [minutes, setMinutes] = useState(0)
  const [currentShow, setCurrentShow] = useState({nombre: "Cargando.."})
  const [nextShow, setNextShow] = useState({nombre: "Cargando.."})
  const [showMsg, setShowMsg] = useState(false)
  let difference = minutes <= 30? 30 - minutes : 60 - minutes
  let ms = (difference-1) * 60000

  const getShowSchedule = () => {
    setCurrentShow(getCurrentNextShow(getActualTime(), isWeekend(), 0))
    setNextShow(getCurrentNextShow(getActualTime(), isWeekend(), 1))
    setMinutes(new Date().getMinutes())
  }

  useEffect(() => {
    setMinutes(new Date().getMinutes())
    setCurrentShow(getCurrentNextShow(getActualTime(), isWeekend(), 0))
    setNextShow(getCurrentNextShow(getActualTime(), isWeekend(), 1))
  }, [])

  useEffect(() => {
    const timer = window.setInterval(() => {
      getShowSchedule()
    }, ms)

    return () => {
      window.clearInterval(timer)
    }

  }, [minutes])

  return (
    <>
      <Head>
        <title>Magic Stream</title>
      </Head>
      <div className='singleCol'>
        <Player />
        <div className='streamControls'>
          <button onClick={() => setShowMsg(!showMsg)} type="button" className='btndefault button1 problemsBtn'>{showMsg? 'Cerrar' : 'Ayuda'} <img src='/icons/info.svg'/></button>
          <div>
            <p>Ahora: {currentShow.nombre}</p>
            <p>Despues: {nextShow.nombre}</p>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showMsg}
        timeout={300}
        unmountOnExit
        classNames="msgBox"
      >
      <ul className='msgBox'>
        <h1>Problemas Frecuentes</h1>
        <li>
          <h2>Veo manchas grises en la transmisión</h2>
          <p>- Es un problema del servidor, por lo general es cuando me encuentro usando el disco donde almaceno las series, no dura mas de unos minutos el error.</p>
        </li>
        <li>
          <h2>La transmisión se entre corta mucho</h2>
          <p>- En este caso puede ser por tu internet se recomienda tener almenos 3mb de internet estables para ver el stream, el bitrate de transmisión es de 600kb.</p>
        </li>
        <li>
          <h2>Escucho interferencias o zumbidos en el audio</h2>
          <p>- Si te sucede en los programas: Nivel X, A Jugar con Hugo, Kito Pizzas, Zona Virtual o programas en donde la calidad es muy baja, es problema del video.</p>
        </li>
        <li>
          <h2>Si tenes algun problema para ver el stream, te sugiero reportar el error en las redes sociales del pie de pagina.</h2>
          <h2>Aveces hago mantenimiento para organizar un poco por lo que puede que algunos dias el stream se encuentre inactivo.</h2>
        </li>
      </ul>
      </CSSTransition>
    </>
  )
}