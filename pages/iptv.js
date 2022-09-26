import Head from 'next/head'
import Iptv_Styles from '../styles/Iptv.module.css'

export default function Iptv() {
    return(
        <>
            <Head>
                <title>IPTV</title>
            </Head>
            <div className='centerPage fullWidth'>
                <div className={Iptv_Styles.iptvMsg}>
                    <img src="/img/Android_tv_logo.svg" alt='Android TV'/>
                    <section>
                        <h1>Para Dispositivos Android</h1>
                        <p>1- Bajate la App <strong>OTT Navigator</strong> haciendo <a href='https://play.google.com/store/apps/details?id=studio.scillarium.ottnavigator' target="_blank" rel="noreferrer noopener">Click Aca</a></p>
                        <p>2- Una vez instalado hace click en: <strong>Cargar Proveedor</strong></p>
                        <p>3- Selecciona la primera opcion que dice: <strong>Lista de reproducción</strong></p>
                        <p>4- En Titulo le podes poner el nombre que quieras por ejemplo: <strong>Magic Kids</strong></p>
                        <p>5- En <strong>URL</strong> deben ingresar el Link de abajo: </p>
                        <textarea readOnly value='https://pastebin.com/raw/RvjVtGmT'></textarea>
                        <p>6- Luego le das en aplicar y ya tendras el canal agregado</p>
                        <p>7- Para ver el canal solo tenes que ir a la opcion de <strong>Ver Television en Vivo</strong> y te aparecera el canal que agregaste.</p>
                    </section>
                    
                    <section>
                        <h1>Para Dispositivos Smart o Roku</h1>
                        <p><strong>Nota:</strong> No les puedo asegurar que funcionen bien, pero sepan que el stream funciona en varios dipositivos (Android - iOS - PC).</p>
                        <p>en caso de que se les trabe o tarde en cargar puede ser problema de las apps que encuentren.</p>
                        <br/>
                        <p>Para esto sepan que no tengo idea como son otras apps pero masomenos funcionan asi: </p>
                        <p>1- Entra a la Tienda de Apps de tu TV o Roku</p>
                        <p>2- En el buscador pone: M3U o IPTV o Player</p>
                        <p>3- Instala la App que encuentres y abrila</p>
                        <p>4- Seguramente te pida cargar una lista o un link</p>
                        <p>5- Ingresa el Link de abajo</p>
                        <textarea readOnly value='https://magickids.live/downloads/Magic_Kids.m3u'></textarea>
                    </section>

                    <section>
                        <h1>TDT Channels</h1>
                        <p>Si usan la App TDT Channels van a necesitar copiar la URL de Abajo.</p>
                        <textarea readOnly value='https://magickids.live/downloads/Magic_Kids_TDT.json'></textarea>
                    </section>

                    <section>
                        <h1>Chromecast</h1>
                        <p>Podes ver el stream en tu Chromecast desde esta pagina web, el boton se encuentra al lado de Volumen.</p>
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