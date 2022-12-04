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
          <h2>Descarga la App para Android.</h2>
          <p>hace click en el Menu de 3 rayitas de arriba y hace click en Baja la App, si tenes Android TV hace click donde dice Sobre la App, ahi encontraras una guia de como instalarlo en Android TV.</p>
        </li>
        <li>
          <h2>¿Queres montar un Streaming como esta pagina?</h2>
          <h3>Si queres realizar tu propio Stream y manejarlo lo mas comodo posible ponete en contacto con Alexander el link a su web se encuentra aca abajo y contrata sus servicios, deci que venis de esta pagina y obtene un precio especial.</h3>
        </li>
        <li>
          <a href='https://alexqs96.vercel.app/' target="_blank" rel="noreferrer noopener" title="Link de Alexqs96">Ponerme en Contacto</a>
        </li>
        <li>
          <h2>Se viene un Nuevo Diseño de Pagina</h2>
          <h3>Muy Pronto la pagina se renovara, con un diseño mas agradable al usuario y mas enfocado al estilo de la pagina original de Magic Kids.</h3>
        </li>
        <li>
          <h2>Boton de Recarga</h2>
          <p>En caso de que se muestre mal la grilla debajo del reproductor, apreta el Boton que tiene flechas en circulo y recarga la grilla eso deberia arreglar el problema.</p>
        </li>
        <br/>
        <hr />
        <br/>
        <h1>Soluciones a Problemas del Stream</h1>
        <li>
          <h2>La transmisión se entre corta mucho</h2>
          <p>- En este caso puede ser por tu internet se recomienda tener almenos 3mb de internet estables para ver el stream, el bitrate de transmisión es de 600kb, si no es el caso, puede que el servidor se encuentre saturado.</p>
        </li>
        <li>
          <h2>La transmisión se puso en Negro pero la estrella sigue girando</h2>
          <p>- En este caso te pido que me mandes un mensaje por instagram, esto puede deberse a un problema de OBS (Programa con el que hago el Stream).</p>
        </li>
      </ul>
      </CSSTransition>
    </>
  )
}