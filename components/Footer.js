import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className='icons'>
                <a href="https://www.facebook.com/tvmagicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Facebook"><img src='/icons/facebook.svg' alt='icon'/></a>
                <a href="https://www.instagram.com/magicstreamok" target="_blank" rel="noreferrer noopener" title="Seguime en Instagram"><img src='/icons/instagram.svg' alt='icon'/></a>
                <a href="https://www.taringa.net/magicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Taringa!"><img src='/icons/taringa.svg' alt='icon'/></a>
                <a href="https://www.github.com/alexqs96" target="_blank" rel="noreferrer noopener" title="Hola! Gracias por visitar Magic Stream!"><img src='/icons/github.svg' alt='icon'/></a>
            </div>
            <p>En dedicación al Canal Magic Kids</p>
            <p>Magic Stream</p>
            <Link href='donar'><a className='donateFooter'>Donar <img src='/icons/starmk.svg' alt='icon'/></a></Link>
        </footer>
    )
}