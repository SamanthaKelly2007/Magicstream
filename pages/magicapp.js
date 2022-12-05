import Head from 'next/head'

export default function Magicapp() {
  return (
    <>
        <Head>
            <title>Descarga la Aplicación</title>
        </Head>
        <div className='centerPage fullWidth'>
          <div className='iptvMsg'>
            <img src="/img/Android_tv_logo.svg" alt='Android TV'/>

            <section>
              <h1>Android Google Play Store</h1>
              <h3>Descaga la App desde Google Play haciendo click en el boton de abajo</h3>
              <a target="_blank" rel="noreferrer noopener" href='https://play.google.com/store/apps/details?id=com.alexrps180.magickids'>Descargar la App</a>
            </section>

            <section>
              <h1>Sobre el Stream</h1>
              <h3>Esta pagina no es la pagina oficial de Magic Kids, la pagina oficial se cerro junto al cierre del canal Magic Kids en 2006 operado por Pramer - AMC Networks - , del cual no se sabe cuando volvera a estar en Emisión por Cable nuevamente.</h3>
              <br></br>
              <h3>Esta pagina es solo un tributo a lo que fue Magic Kids, mayormente enfocado al area de Anime.</h3>
              <br></br>
              <h3>Si gustas de ver el contenido Americano de Magic Kids te sugiero ver el Stream de <a target="_blank" rel="noreferrer noopener" href='https://retromagico.wixsite.com/inicio'>Retromagico</a> o si buscas ver contenido animado reciente visita la pagina de <a target="_blank" rel="noreferrer noopener" href='https://www.magicclub22.com.ar'>Magic Club</a>.</h3>
            </section>
          
            <section>
              <h1>Sobre la Aplicación</h1>
              <h3>Solo funciona para ver el Stream, la función de Grilla se agregara en actualizaciones futuras.</h3>
              <br></br>
              <h2>Preguntas Frecuentes</h2>
              <br></br>
              <h1>Hay version de Roku?</h1>
              <h3>No, lamentablemente para hacer la app en Roku necesito un aparato de Roku, el cual no dispongo.</h3>
              <br></br>
              <h1>Puedo sumar el canal a otras apps?</h1>
              <h3>Si, siempre que los canales no cobren por el servicio, de lo contrario si aumenta el trafico ajeno a esta Web o App propia, puede que termine acabando con este Stream.</h3>
              <br></br>
              <h1>Por que el stream se ve con baja calidad?</h1>
              <h3>Esto se debe a que el stream se realiza de manera casera, no cuento con servidor dedicado y para mantener la estabilidad tuve que reducir la calidad.</h3>
              <br></br>
              <h1>Como puedo ayudar al Stream?</h1>
              <h3>Podes hacerlo con donaciones via Mercadopago o Paypal, las cuales se usaran para comprar un servidor dedicado y transmitir con la mejor calidad posible y estable.</h3>
            </section>

            <section>
              <h1>INSTALACIÓN MANUAL ANDROID TV</h1>
              <h2>Este tutorial requiere saber de Instalación de APKs</h2>
              <br/>
              <p>La App funciona en los siguientes dispositivos</p>
              <p>- Xiaomi Mi Stick TV / 4k</p>
              <p>- Xiaomi Mi Box / S</p>
              <p>- Google Chromecast 4 con control remoto</p>
              <p>- Amazon Fire Stick o derivados de amazon</p>
              <p>- Realme 4K Stick</p>
              <p>- TVs TCL con Android TV</p>
              <p>- TVs Phillips con Android TV</p>
              <p>- TVs RCA con Android TV</p>
              <p>- TVs Sony con Android TV</p>
              <p>- o cualquier dispositivo con Android TV.</p>
              <br/>
              <h3>Importante</h3>
              <p>las TVs de <strong>Samsung</strong> y <strong>LG</strong> tienen sus propios sistemas operativos por lo que no son compatibles con la app</p>
              <p>para ver desde LG o Samsung deben usar su celular y hacer Casting con Chromecast a su televisor.</p>
              <br/>
              <h3>Instalación en Android TV</h3>
              <br></br>
              <h3>Pronto hare un video haciendo la Instalación para que les sea mas facil instalarlo</h3>
              <br></br>
              <p>1- Primero se bajan la app Downloader de Google Play Store <strong>la que dice aftv en el titulo</strong></p>
              <p>2- Abren la Aplicacion y en el buscador ponen este link que les bajara la app</p>
              <textarea readOnly value='magickids.live/magictv.apk'></textarea>
              <p>3- luego de descargarlo le dan a Abrir y Instalar</p>
              <p>4- seguramente les aparezca una advertencia de fuentes confiables</p>
              <p>5- les va a pedir habilitar la app Downloader para instalar de fuentes desconocidas</p>
              <p>6- le dan a Si y luego apretan atras y les dejara instalar la Aplicacion</p>
              <p>7- Listo si se les instalo la app solo deben ir a su menu donde se encuentran</p>
              <p>las apps y les deberia aparecer el icono de Magic Kids lo abren y podran ver el stream sin hacer nada mas.</p>
            </section>

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
