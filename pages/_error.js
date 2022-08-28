import Link from "next/link";

export default function notfound404() {
    return (
        <div className='pageNotFound'>
            <p>Oops</p>
            <p>esta pagina no existe.</p>
            <Link href="/">Volver al Inicio</Link>
        </div>
    )
}