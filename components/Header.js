import { useState, useEffect } from 'react'
import Header_Styles from '../styles/Header.module.css'
import Link from 'next/link'
import useWindowSize from '../hooks/useWindowSize'

export default function Header() {

    const [menu, setMenu] = useState(false)
    const window = useWindowSize()

    const openMenu = () => {
        const button = document.querySelector("#bgbtn");
        if (!menu) {
            setMenu(!menu)
        }
        if(menu)
        {
            button.classList.add('closebtn')
            setTimeout(() => {
                button.classList.remove('closebtn')
            }, 200);
            setTimeout(() => {
                setMenu(!menu)
            }, 100);
        }
    }

    useEffect(() => {
        if (menu) {
            document.querySelector("#header").classList.add("headerOpen");
            document.body.classList.add("noScroll");
            document.getElementsByTagName( 'html' )[0].classList.add("noScroll");
        }
        else
        {
            document.getElementsByTagName( 'html' )[0].classList.remove("noScroll");
            document.body.classList.remove("noScroll");
            document.querySelector("#header").classList.remove("headerOpen");
        }
    }, [menu])

    return (
        <header id='header' className={Header_Styles.header_nav}>
            <Link href="/">
            <img
                onClick={() => setMenu(false)}
                src="../img/logo_mk.png"
                alt="Magic Kids Logo"
            />
            </Link>
            
            {
                window.width < 768 &&
                <span onClick={() => openMenu()} className="whitebtn material-symbols-outlined">menu</span>
            }
            <div id='bgbtn' className={menu? `${Header_Styles.openMenu}` : `${Header_Styles.mk_header_opt}`}>
                <Link href="programacion" replace><a onClick={() => window.width < 768? openMenu() : ""}><span className="material-symbols-rounded">dvr</span> Programacion</a></Link>
                <Link href="series"><a onClick={() => window.width < 768? openMenu() : ""}><span className="material-symbols-rounded">tv</span> Series</a></Link>
                <Link href="peliculas"><a onClick={() => window.width < 768? openMenu() : ""}><span className="material-symbols-rounded">movie</span> Peliculas</a></Link> 
                <Link href="iptv"><a onClick={() => window.width < 768? openMenu() : ""}><span className="material-symbols-rounded">smart_display</span> IPTV</a></Link>
            </div>
        </header>
    )
}
  