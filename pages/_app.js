import '../styles/globals.css'
import '../styles/Header.css'
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
