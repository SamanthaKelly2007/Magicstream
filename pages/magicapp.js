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
              <h1>Sobre la App</h1>
              <p>La app es compatible con Dispositivos Android y Android TV / Google TV</p>
              <br/>
              <h3>Detalles</h3>
              <p>Es la primera version que saco de la app ya que programar para Android es algo nuevo para mi.</p>
              <p>La app solo reproduce el stream a su vez implemente la compatiblidad para ambas plataformas con el mismo instalador - APK -</p>
              <br/>
              <h3>Importante</h3>
              <p>No posee ninguna función solo se puede ver el stream por el momento.</p>
              <br/>
              <h3>A tener en cuenta</h3>
              <p>Por el momento se debe instalar manualmente pero pronto estara disponible en Google Play Store</p>
            </section>
            <section>
              <h1>Android</h1>
              <p>La App funciona en los siguientes dipositivos</p>
              <p>- Celulares / Tablets Android</p>
              <p>TV Box Genericos</p>
              <p>- tipo X96 o similares.</p>
              <p>Requisito minimo</p>
              <p>Deben tener Android 5.0 o Lollipop en adelante, si su equipo es de 2014 en adelante seguramente sea compatible.</p>
              <br/>
              <h3>Instalación</h3>
              <p>1- Se bajan la aplicacion entrando al link de abajo</p>
              <a href='magickids.live/downloads/magictv.apk' target="_blank" rel="noreferrer noopener">Bajar Aplicación</a>
              <p>2- lo abren y le dan a instalar</p>
              <p>3- posiblemente les pida habilitar fuentes desconocidas o Play Protect le dan a permitir y continuan con la instalación</p>
              <p>4- listo ahora la app les debe aparecer en su menu de aplicaciones</p>
              <p>5- lo abren y podran ver el stream.</p>
            </section>
            <section>
              <h1>Android TV</h1>
              <p>La App funciona en los siguientes dispositivos</p>
              <p>Dispositivos con Android TV</p>
              <p>- Xiaomi Mi Stick TV / 4k</p>
              <p>- Xiaomi Mi Box / S</p>
              <p>- Google Chromecast 4 con control remoto</p>
              <p>- Amazon Fire Stick o derivados de amazon</p>
              <p>- Realme 4K Stick</p>
              <p>- o cualquier dispositivo con Android TV.</p>
              <br/>
              <p>Televisores LED con Android TV o Google TV o que cuenten con Android TV</p>
              <p>Ejemplos</p>
              <p>- TVs TCL con Android TV</p>
              <p>- TVs Phillips con Android TV</p>
              <p>- TVs RCA con Android TV</p>
              <p>- TVs Sony con Android TV</p>
              <br/>
              <h3>Importante</h3>
              <p>las TVs de <strong>Samsung</strong> y <strong>LG</strong> tienen sus propios sistemas operativos por lo que no son compatibles con la app</p>
              <p>para ver desde LG o Samsung pueden ingresar a la App o directamente hacer Casting o Chromecast desde una pc o celular a su televisor.</p>
              <br/>
              <h3>Instalación</h3>
              <p>1- Primero se bajan la app Downloader <strong>Logo Naranja</strong> de Play Store</p>
              <p>2- Abren la Aplicacion y en el buscador ponen este link que les bajara la app</p>
              <textarea readOnly value='magickids.live/downloads/magictv.apk'></textarea>
              <p>3- luego de descargarlo le dan a Abrir y Instalar</p>
              <p>4- seguramente les aparezca una advertencia de fuentes confiables</p>
              <p>5- les va a pedir habilitar la app Downloader para instalar de fuentes desconocidas</p>
              <p>6- le dan a Si y luego apretan atras y les dejara instalar la Aplicacion</p>
              <p>7- Listo si se les instalo la app solo deben ir a su menu donde se encuentran</p>
              <p>las apps y les deberia aparecer el icono de Magic Kids lo abren y podran ver el stream sin hacer nada mas.</p>
            </section>
          </div>
        </div>
    </>
  )
}
