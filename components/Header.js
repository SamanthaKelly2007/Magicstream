import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import {openNav, logoNav} from '../utils/tools'

export default function Header() {

    const window = useWindowSize()

    return (
        <header>
            
            <Link href="/" className='logo_mk'><img onClick={() => logoNav()} src="../img/magickidslogo.png" alt="Magic Kids Logo"/></Link>
            
            {
                window.width < 768 &&
                <div className='burger_button' onClick={() => openNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className="nav">
                <Link href="grilla" onClick={() => window.width < 768 && openNav()}><img src="/icons/list.svg" alt='icon'/> Grilla</Link>
                <Link href="magicapp" onClick={() => window.width < 768 && openNav()}><img src="/icons/starmk.svg" alt='icon'/> App</Link>
                <Link href="iptv" onClick={() => window.width < 768 && openNav()}><img src="/icons/play.svg" alt='icon'/> IPTV</Link>
                <Link href="donar" onClick={() => window.width < 768 && openNav()}><img src="/icons/donate.svg" alt='icon'/> Donar</Link>
            </div>
        </header>
    )
}
  