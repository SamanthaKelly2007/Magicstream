import Footer_Styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={Footer_Styles.footer}>
            <p>Pagina Tributo al Canal Magic Kids.</p>
            <div className={Footer_Styles.icons}>
                <a href="https://www.instagram.com/magicstreamok" target="_blank" rel="noreferrer noopener" title="Seguime en Instagram"><i className="gg-instagram"></i></a>
                <a href="https://www.facebook.com/magicstreamok" target="_blank" rel="noreferrer noopener" title="Seguime en Facebook"><i className="gg-facebook"></i></a>
                <a href="https://www.taringa.net/magicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Taringa!"><i>T!</i></a>
            </div>
        </footer>
    )
}