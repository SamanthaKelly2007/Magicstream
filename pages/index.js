import Head from 'next/head'
import { useState, useEffect} from 'react'
import Player from '../components/Player'
import { getCurrentNextShow, getActualTime } from '../utils/tools'
import { CSSTransition } from 'react-transition-group';

export default function Home() {

  const [wide, setWide] = useState(false)
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

  const loadVideoFormat = () => {
    const videoLS = localStorage.getItem('mkformat')
    if(videoLS === 'true')
    {
      setWide(true)
    }
    else
    {
      setWide(false)
    }
  }

  const changeVideoFormat = (val) =>{
    localStorage.setItem('mkformat', val)
    setWide(val)
  }

  useEffect(() => {
    loadVideoFormat()
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
      <div className={'centerPage' + (wide? ' fullScreen' : '')}>
        <Player/>
        <div className='streamControls'>
          <div className='shows' onClick={() => getShowSchedule()}>
            <p key={showsNav[0].id}>Ahora: {showsNav[0].show}</p>
            <p key={showsNav[1].id}>Despues: {showsNav[1].show}</p>
          </div>
          <div>
            <p onClick={() => setShowMsg(!showMsg)} className={'btndefault button1 problemsBtn'+(showMsg? ' active' : "")}>{showMsg? 'Cerrar' : 'Info'} <img src='/icons/info.svg' alt='icon boton problemas frecuentes'/></p>
            <p className={"changeAspect"+(wide? " active" : "")} onClick={() => changeVideoFormat(!wide)} ><img src='/icons/ratio.svg' alt='icon cambiar aspecto'/></p>
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
        <h1>Novedades</h1>
        <li>
          <h2>Se Ajusto la transmisión al formato 4:3</h2>
          <p>4:3 o Cuadrado es el nuevo formato para preservar el ancho original de las series, podes volver al 16:9 o Ancho desde el nuevo boton al lado de Info.</p>
          <br/>
          <p>En la App OTT Navigator podes realizar este ajuste tambien</p>
          <p>IMPORTANTE: en Celulares esto se puede cambiar tambien, pero al pasar a pantalla completa solo se podra ver en formato Cuadrado.</p>
        </li>
        <li>
          <h2>Nuevo Boton al lado de Info</h2>
          <p>Con ese boton podes expandir el video para que se ajuste a una pantalla ancha o cuadrada</p>
        </li>
        <li>
          <h2>Nueva Sección de Donaciones</h2>
          <p>Desde el pie de pagina tenes una opcion donde podras apoyar el proyecto, recorda que no busco cobrar por el streaming pero cualquier ayuda es bienvenida.</p>
        </li>
        <br/>
        <hr />
        <br/>
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