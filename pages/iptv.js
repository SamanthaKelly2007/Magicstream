import Head from 'next/head'

export default function Iptv() {
    return(
        <>
            <Head>
                <title>IPTV</title>
            </Head>
            <div className='centerPage fullWidth'>
                <div className='iptvMsg'>
                    <div data-iptv>IPTV</div>
                    <section>
                        <h1>Para Reproductores IPTV</h1>
                        <p>Usa el <strong>Link</strong> de abajo: </p>
                        <textarea readOnly value='pastebin.com/raw/RvjVtGmT'></textarea>
                    </section>
                    
                    <section>
                        <h1>Para Dispositivos Smart TV o Roku</h1>
                        <p><strong>Nota:</strong> No les puedo asegurar que funcionen bien, pero sepan que el stream funciona en varios dipositivos (Android - iOS - PC).</p>
                        <p>en caso de que se les trabe o tarde en cargar puede ser problema de las apps que encuentren.</p>
                        <br/>
                        <p>Para esto sepan que no tengo idea como son otras apps pero masomenos funcionan asi: </p>
                        <p>1- Entra a la Tienda de Apps de tu TV o Roku</p>
                        <p>2- En el buscador pone: M3U o IPTV o Player</p>
                        <p>3- Instala la App que encuentres y abrila</p>
                        <p>4- Seguramente te pida cargar una lista o un link</p>
                        <p>5- Ingresa el Link de abajo</p>
                        <textarea readOnly value='magickids.live/downloads/Magic_Kids.m3u'></textarea>
                    </section>

                    <section>
                        <h1>Chromecast</h1>
                        <p>Podes ver el stream en tu Chromecast reproduci el video de la pagina principal y hace click en el boton de Chromecast al lado del boton de volumen.</p>
                    </section>

                </div>
            </div>
        </>
    )
}