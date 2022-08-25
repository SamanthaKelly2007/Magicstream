import Footer_Styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer className={Footer_Styles.footer}>
            <div className={Footer_Styles.icons}>
                <a href="https://www.facebook.com/tvmagicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Facebook"><img src='/icons/facebook.svg'/></a>
                <a href="https://www.instagram.com/magicstreamok" target="_blank" rel="noreferrer noopener" title="Seguime en Instagram"><img src='/icons/instagram.svg'/></a>
                <a href="https://www.taringa.net/magicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Taringa!"><img src='/icons/taringa.svg'/></a>
                <a href="https://www.github.com/alexqs96" target="_blank" rel="noreferrer noopener" title="Hola! Gracias por ver mi Web!"><img src='/icons/github.svg'/></a>
            </div>
            <p>En dedicación al Canal Magic Kids</p>
            <p>Magic Stream</p>
        </footer>
    )
}