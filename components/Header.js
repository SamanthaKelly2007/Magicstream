import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import {openNav, logoNav} from '../utils/tools'

export default function Header() {

    const window = useWindowSize()

    return (
        <header>
            
            <Link href="/"><a className='logo_mk'><img onClick={() => logoNav()} src="../img/magickidslogo.png" alt="Magic Kids Logo"/></a></Link>
            
            {
                window.width < 768 &&
                <div className='burger_button' onClick={() => openNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className="nav">
                <Link href="grilla"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/list.svg" alt='icon'/> Grilla</a></Link>
                <Link href="series"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/tv.svg" alt='icon'/> Series</a></Link>
                <Link href="iptv"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/play.svg" alt='icon'/> IPTV</a></Link>
                <Link href="donar"><a onClick={() => window.width < 768 && openNav()}><img src="/icons/starmk.svg" alt='icon'/> Donar</a></Link>
            </div>
        </header>
    )
}
  