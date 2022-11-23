import Head from 'next/head'
import { useState, useEffect } from 'react'
import Player from '../components/Player'
import { getActualTime, nextShow, isWeekend } from '../utils/tools'
import { CSSTransition } from 'react-transition-group';

export default function Home() {

  const [showMsg, setShowMsg] = useState(false)
  const [showsNav, setShowsNav] = useState({now: 'Cargando...', next: 'Cargando...'})
  const [minutes, setMinutes] = useState(0)

  let difference = minutes <= 30? 30 - minutes : 60 - minutes
  let ms = (difference-1) * 60000

  const getShowSchedule = () => {
    setShowsNav(nextShow(getActualTime(),isWeekend()))
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
        <title>Magic Kids Streaming</title>
      </Head>
      <div className='centerPage'>
        <Player/>
        <div className='streamControls'>
          <div className='showsTab'>
            <p>Ahora: {showsNav.now}</p>
            <p>Despues: {showsNav.next}</p>
            <img onClick={() => getShowSchedule()} src='/icons/reload.svg' alt='Recargar Tabla'/>
          </div>
          <div className='buttonsTab'>
            <p onClick={() => setShowMsg(!showMsg)} className={'btndefault button1 problemsBtn'+(showMsg? ' active' : "")}>{showMsg? 'Cerrar' : 'Info'} <img src='/icons/info.svg' alt='icon boton problemas frecuentes'/></p>
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
        <h1>Novedades</h1>
        <li>
          <h2>Descarga la App de Magic Kids</h2>
          <p>Ya se encuentra disponible la App donde podras ver el Stream, ingresa en el Menu de arriba la derecha y selecciona App, ahi encontraras las instrucciones para instalar la Aplicación</p>
        </li>
        <li>
          <h2>Se cambio el Formato del Stream a Formato Ancho / 16:9</h2>
          <p>El cambio se realizo a peticion de varios usuarios, si tenes un monitor o tv cuadrado o formato 4:3 podes seguir viendo el stream desde la web a pantalla completa.</p>
        </li>
        <li>
          <h2>Boton de Recarga</h2>
          <p>Debido a que me reportaron que la grilla debajo del reproductor aveces no funcionaba bien y mostraba algo distinto, ahora con este boton podran actualizarla sin necesidad de recargar la pagina.</p>
        </li>
        <li>
          <h2>Chromecast - AirPlay</h2>
          <p>Desde el nuevo Boton al lado de Volumen podran transmitir el Stream a su Chromecast o Apple TV</p>
          <p>en iPhone solo esta limitado a Apple TV o dispositivos que tengan la función de AirPlay.</p>
        </li>
        <li>
          <h2>Nueva Sección de Donaciones</h2>
          <p>Desde el pie de pagina tenes una opcion donde podras apoyar el proyecto, recorda que no busco cobrar por el streaming pero cualquier ayuda es bienvenida.</p>
        </li>
        <br/>
        <hr />
        <br/>
        <h1>Problemas en la Transmisión</h1>
        <li>
          <h2>Veo manchas grises en la transmisión</h2>
          <p>- Es un problema del servidor, por lo general es cuando me encuentro usando el disco donde almaceno las series, esto puede durar 2 minutos como mucho.</p>
        </li>
        <li>
          <h2>La transmisión se entre corta mucho</h2>
          <p>- En este caso puede ser por tu internet se recomienda tener almenos 3mb de internet estables para ver el stream, el bitrate de transmisión es de 600kb.</p>
        </li>
        <li>
          <h2>La transmisión se puso en Negro pero la estrella sigue girando</h2>
          <p>- En este caso te pido que me mandes un mensaje por instagram, esto puede deberse a un problema de OBS (Programa con el que hago el Stream).</p>
        </li>
        <li>
          <h2>Escucho interferencias o zumbidos en el audio</h2>
          <p>- Si te sucede en los programas: Nivel X, A Jugar con Hugo, Kito Pizzas, Zona Virtual o programas en donde la calidad es muy baja, es un problema del video.</p>
        </li>
      </ul>
      </CSSTransition>
    </>
  )
}