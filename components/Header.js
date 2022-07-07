import Header_Styles from '../styles/Header.module.css'
import Link from 'next/link'

export default function Header() {
    return (
        <header className={Header_Styles.header_nav}>
            <Link href="/">
            <img
                src="../img/logo_mk.png"
                alt="Magic Kids Logo"
            />
            </Link>
            
            <div className={Header_Styles.mk_header_opt}>
                <Link href="programacion">Programacion</Link>
                {/*             
                <Link href="series">Series</Link>
                <Link href="proyecto">Peliculas</Link> 
                */}
            </div>

            {/*             
            <Link href="contacto">
                <button className={`${Header_Styles.contactBtn} noBtn`}>Contacto</button>
            </Link>
            */}
            <Link href="programacion">
            <span className="material-symbols-rounded">
                dvr
            </span>
            </Link>
        </header>
    )
}
  