import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className='icons'>
                <a target="_blank" rel="noreferrer noopener" href='https://play.google.com/store/apps/details?id=com.alexrps180.magickids' title='Descarga la App'><img src='/icons/googleplay.svg' alt='Google Play Icon' /></a>
                <a href="https://www.instagram.com/magicstreamok" target="_blank" rel="noreferrer noopener" title="Seguime en Instagram"><img src='/icons/instagram.svg' alt='icon'/></a>
                <a href="https://www.taringa.net/magicstream" target="_blank" rel="noreferrer noopener" title="Seguime en Taringa!"><img src='/icons/taringa.svg' alt='icon'/></a>
                <a href="http://alexqs96.vercel.app" target="_blank" rel="noreferrer noopener" title="Creador de esta Web y Stream"><img src='/icons/alexdev.svg' alt='icon'/></a>
            </div>
            <div className='us'>
                <p>Gracias por ver el Stream</p>
                <p>En dedicación al Canal Magic Kids</p>
            </div>
            <div className='donate_icon'>
                <Link href='donar'><img src='/img/mp_bw.svg' alt='Hace tu Donación'></img> Donar</Link>
            </div>
        </footer>
    )
}