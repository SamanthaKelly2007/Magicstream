import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es' data-cast-api-enabled="true">
      <Head>
        <meta name="keywords" content="magic kids streaming, magic kids en vivo, magic kids transmision" />
        <meta name="description" content="Revivi la experiencia Magic Kids, Magic Kids Live es una pagina dedicada al canal magic kids y para recrear su transmision, disfruta de la programacion de Magic Kids las 24hs del dia todos los dias." />
        <meta name='image' content='https://magickids.live/img/cover.png'></meta>
        <meta property="og:image" content="https://magickids.live/img/cover.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="256" />
        <meta property="og:image:alt" content="Magic Kids" />
        <meta property="og:title" content="Magic Kids Streaming" />
        <meta property="og:description" content="Revivi la experiencia Magic Kids, Magic Kids Live es una pagina dedicada al canal magic kids y para recrear su transmision, disfruta de la programacion de Magic Kids las 24hs del dia todos los dias." />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:url" content="https://magickids.live"/>
        <link rel="preload" href="/fonts/MavenPro-Medium.woff2" as="font" type="font/woff2" crossOrigin="true"></link>
        <link rel="preload" href="/fonts/MavenPro-SemiBold.woff2" as="font" type="font/woff2" crossOrigin="true"></link>
        <link rel='preload' as='image' href='/img/starsbg.png'></link>
        <link rel='preload' as='image' href='/img/magickidslogo.png'></link>
        <link rel="preload" as="image" href="/icons/googleplay.svg"></link>
        <link rel="preload" as="image" href="/icons/alexdev.svg"></link>
        <link rel="preload" as="image" href="/icons/instagram.svg"></link>
        <link rel="preload" as="image" href="/icons/taringa.svg"></link>
        <link rel='shortcut icon' href='favicon.ico'></link>
        <script src="https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1" defer></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}