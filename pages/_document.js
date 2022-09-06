import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta name="keywords" content="magic kids streaming, magic kids en vivo, magic kids transmision" />
        <meta name="description" content="Revivi la experiencia Magic Kids, Magic Stream es una pagina dedicada al canal magic kids y para recrear su transmision, disfruta de la programacion de magic kids las 24hs del dia todos los dias." />
        <meta property="og:title" content="Magic Stream" />
        <meta property="og:type" content="video.series" />
        <link rel="preload" href="/fonts/MavenPro-Medium.woff2" as="font" type="font/woff2" crossOrigin=""></link>
        <link rel="preload" href="/fonts/MavenPro-SemiBold.woff2" as="font" type="font/woff2" crossOrigin=""></link>
        <link rel='shortcut icon' href='favicon.ico'></link>
        <link rel='preload' as='image' href='/img/starsbg.png'></link>
        <link rel='preload' as='image' href='/img/logo_mk.png'></link>
        <link rel='preload' as='image' href='/img/magickidsbg.png'></link>
        <link rel='preload' as='image' href='/img/Android_tv_logo.svg'></link>
        <link rel="preload" as="image" href="/icons/facebook.svg"></link>
        <link rel="preload" as="image" href="/icons/github.svg"></link>
        <link rel="preload" as="image" href="/icons/instagram.svg"></link>
        <link rel="preload" as="image" href="/icons/taringa.svg"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}