import '../styles/globals.css'
import '../styles/Header.css'
import '../styles/Footer.css'
import '../styles/Programacion.css'
import '../styles/Iptv.css'
import Layout from '../components/Layout'
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return(
    <>
      {
        router.pathname === '/_error'?
        (
          <Component {...pageProps} />
        )
        :
        (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )
      }
    </>
  )
}

export default MyApp
