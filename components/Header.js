import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'
import {openNav, logoNav} from '../utils/tools'

export default function Header() {

    const window = useWindowSize()

    return (
        <header>
            
            <Link href="/" className='logo_mk'><img onClick={() => logoNav()} src="../img/magickidslogo.png" alt="Magic Kids Logo"/></Link>
            
            {
                window.width < 990 &&
                <div className='burger_button' onClick={() => openNav()}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            }
            <div className="nav">
                <a onClick={() => window.width < 990 && openNav()} target="_blank" rel="noreferrer noopener" href='https://play.google.com/store/apps/details?id=com.alexrps180.magickids'><img src='/icons/googleplay.svg' alt='Google Play Icon' /> Baja la App</a>
                <Link href="grilla" onClick={() => window.width < 990 && openNav()}><img src="/icons/list.svg" alt='icon'/> Grilla</Link>
                <Link href="magicapp" onClick={() => window.width < 990 && openNav()}><img src="/icons/starmk.svg" alt='icon'/> Sobre la App</Link>
                <Link href="donar" onClick={() => window.width < 990 && openNav()}><img src="/img/mp.svg" alt='icon'/> Donar</Link>
            </div>
        </header>
    )
}
  