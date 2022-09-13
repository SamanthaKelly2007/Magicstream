import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import {openNav, logoNav} from '../utils/tools'

export default function Header() {

    const window = useWindowSize()

    return (
        <header>
            <Link href="/"><img className='logo_mk' onClick={() => logoNav()} src="../img/magickidslogo.png" alt="Magic Kids Logo"/></Link>
            
            {
                window.width < 768 &&
                <div className='burger_button' onClick={() => openNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className="nav">
                <Link href="programacion"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/list.svg" alt='icon'/> Programación</a></Link>
                <Link href="series"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/tv.svg" alt='icon'/> Series</a></Link>
                <Link href="iptv"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/play.svg" alt='icon'/> IPTV</a></Link>
                <Link href="donar"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/star.svg" alt='icon'/> Donar</a></Link>
            </div>
        </header>
    )
}
  