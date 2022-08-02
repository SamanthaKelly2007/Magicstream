import Head from 'next/head'
import { useState } from 'react'
import Player from '../components/Player'
import { isWeekend, getActualTime, getCurrentNextShow} from '../utils/tools'

export default function Home() {
  const [minutes, setMinutes] = useState(new Date().getMinutes())
  const [currentShow, setCurrentShow] = useState(getCurrentNextShow(getActualTime(), isWeekend(), 0))
  const [nextShow, setNextShow] = useState(getCurrentNextShow(getActualTime(), isWeekend(), 1))
  const [showMsg, setShowMsg] = useState(false)
  let difference = minutes <= 30? 30 - minutes : 60 - minutes
  let ms = difference * 55000

  const getShowSchedule = () => {
    setCurrentShow(getCurrentNextShow(getActualTime(), isWeekend(), 0))
    setNextShow(getCurrentNextShow(getActualTime(), isWeekend(), 1))
  }

  setTimeout(() => {
    getShowSchedule()
    setMinutes(new Date().getMinutes())
  }, ms);

  const problemsMsg = (prop) => {
    setShowMsg(prop)
  }

  return (
    <>
      <Head>
        <title>Magic Stream</title>
      </Head>
      <div className='singleCol'>
        <Player />
        <div className='streamControls'>
          <button onClick={() => problemsMsg(!showMsg)} className='noBtn button1 problemsBtn'>Errores <i className="gg-info"></i></button>
          <div>
            <p>Estas Viendo: {currentShow}</p>
            <p>Luego Sigue: {nextShow}</p>
          </div>
        </div>
      </div>
      {
          showMsg&&
          <ul className='msgBox'>
            <h1>Problemas Frecuentes</h1>
            <li>
              <h2>Veo manchas grises en la transmisión</h2>
              <p>- En caso de tener este problema no te preocupes, no es tu internet sucede que estoy haciendo mejoras en la programación agregando series o peliculas, por lo general esto puede demorar 5 minutos y de momento solo trabajo con Disco Rigido (HDD) para almacenar las series, por lo que si ves manchas grises en la transmisión pero la estrella del Magic no se ve afectada, podes quedarte tranquilo no es tu internet.</p>
            </li>
            <li>
              <h2>La transmisión se entre corta mucho</h2>
              <p>- Este caso puede ser por tu internet se recomienda tener almenos 3mb de internet estables para ver el stream.</p>
            </li>
            <li>
              <h2>Escucho interferencias o zumbidos en el audio</h2>
              <p>- Si te sucede en los programas: Nivel X, A Jugar con Hugo, Kito Pizzas, Zona Virtual o programas en donde la calidad es muy baja, es debido a que el contenido que se esta mostrando vino con esos detalles. lo sentimos, al ser contenido escaso los medios que se encuentran publicos suelen venir con estos detalles debido a que son grabaciones realizadas por usuarios de Youtube/Dailymotion particulares en donde la calidad puede variar segun el autor y sus medios para grabar los contenidos, si contas con el mismo contenido pero sin detalles te agradeceria que me lo compartas mandandome un mensaje a las redes sociales que aparecen en el pie de la Pagina.</p>
            </li>
            <li>
              <h2>Hago click en reproducir pero me salta una X y un mensaje en Ingles</h2>
              <p>- Si esto te sucede al darle play es por que el servidor se encuentra apagado, puede deberse a que estoy haciendo mantenimiento, en caso de que no vean ninguna publicacion en donde avise que estoy haciendo mantenimiento, te pido que me mandes un mensaje por esos medios avisando del problema, de esa manera vere de arreglar la transmisión.</p>
            </li>
            <li>
              <h2>Si tu problema no se encuentra en las preguntas de arriba te sugiero mandarme un mensaje por las redes sociales del pie de pagina, para ayudarte con el problema.</h2>
            </li>
          </ul>
        }
    </>
  )
}