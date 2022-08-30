import Head from 'next/head'
import { useState, useEffect} from 'react'
import Player from '../components/Player'
import { getCurrentNextShow, getActualTime } from '../utils/tools'
import {
  CSSTransition
} from 'react-transition-group';


export default function Home() {

  const [showMsg, setShowMsg] = useState(false)
  const [showsNav, setShowsNav] = useState([
    {
      id: 1,
      show: "Cargando..."
    },
    {
      id: 2,
      show: "Cargando..."
    }
  ])
  const [minutes, setMinutes] = useState(0)

  let difference = minutes <= 30? 30 - minutes : 60 - minutes
  let ms = (difference-1) * 60000

  const getShowSchedule = () => {
    setShowsNav(getCurrentNextShow(getActualTime()))
    setMinutes(new Date().getMinutes())
  }

  useEffect(() => {
    getShowSchedule()
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
      <div className='centerPage'>
        <Player/>
        <div className='streamControls'>
          <button onClick={() => setShowMsg(!showMsg)} type="button" className='btndefault button1 problemsBtn'>{showMsg? 'Cerrar' : 'Ayuda'} <img src='/icons/info.svg' alt='icon'/></button>
          <div>
            <p key={showsNav[0].id}>Ahora: {showsNav[0].show}</p>
            <p key={showsNav[1].id}>Despues: {showsNav[1].show}</p>
          </div>
        </div>
      </div>
      <CSSTransition
        in={showMsg}
        timeout={200}
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