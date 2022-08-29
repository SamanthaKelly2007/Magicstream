import Head from 'next/head'
import Iptv_Styles from '../styles/Iptv.module.css'

export default function Iptv() {
    return(
        <>
            <Head>
                <title>IPTV</title>
            </Head>
            <div className='centerPage'>
                <div className={Iptv_Styles.iptvMsg}>
                    <img src="/img/Android_tv_logo.svg" alt='Android TV'/>
                    <section>
                        <h1>Para Dispositivos Android</h1>
                        <p>1- Bajate la App OTT Navigator haciendo <a href='https://play.google.com/store/apps/details?id=studio.scillarium.ottnavigator' target="_blank" rel="noreferrer noopener">Click Aca</a></p>
                        <p>2- Una vez instalado hace click en: Cargar Proveedor</p>
                        <p>3- Selecciona la primera opcion que dice Lista de reproducción</p>
                        <p>4- En Titulo le podes poner el nombre que quieras por ejemplo: <strong>Magic Kids</strong></p>
                        <p>5- En URL deben ingresar la direccion de abajo: </p>
                        <p><a href='https://pastebin.com/raw/RvjVtGmT' target="_blank" rel="noreferrer noopener">pastebin.com/raw/RvjVtGmT</a></p>
                        <p>6- Luego le das en aplicar y ya tendras el canal agregado</p>
                        <p>7- Para ver el canal solo tenes que ir a la opcion de Ver Television en Vivo y te aparecera el canal que agregaste.</p>
                    </section>
                    
                    <section>
                        <h1>Para otras apps de IPTV</h1>
                        <p>pueden bajar el siguiente archivo.</p>
                        <p>Descargar M3U: <a href='/downloads/Magic_Kids.m3u' download>Magic_Kids.m3u</a></p>
                    </section>

                    <section>
                        <h1>TDT Channels</h1>
                        <p>Si usan la App TDT Channels van a necesitar copiar la URL de Abajo.</p>
                        <p>Hace click aca: <a href='/downloads/Magic_Kids_TDT.json'>Magic_Kids_TDT.JSON</a></p>
                    </section>

                    <section>
                        <h1>Android TV</h1>
                        <p>En Desarrollo</p>
                    </section>
                </div>
            </div>
        </>
    )
}