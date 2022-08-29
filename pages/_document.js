import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='es'>
      <Head>
        <meta name="keywords" content="magic kids streaming, magic kids en vivo, magic kids transmision" />
        <meta name="description" content="Revivi la experiencia Magic Kids, Magic Stream es una pagina dedicada al canal magic kids y para recrear su transmision, disfruta de la programacion de magic kids las 24hs del dia todos los dias." />
        <link rel='shortcut icon' href='favicon.ico'></link>
        <meta property="og:title" content="Magic Stream" />
        <meta property="og:type" content="video.series" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}