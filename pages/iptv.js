import Head from 'next/head'

export default function Iptv() {
    return(
        <>
            <Head>
                <title>IPTV</title>
            </Head>
            <div className='singleCol h100'>
                <div className='iptvMsg'>
                    <h1>Ahora podes mirar Magic Kids! desde tu TV usando IPTV!</h1>
                    /* eslint-disable @next/next/no-img-element */
                    <img src="/img/Android-TV-Logo.png" alt='Android TV'/>
                    <div>
                        <h2>Instrucciones: </h2>
                        <h3>Bajen la App OTT Navigator de PlayStore</h3>
                        <h3>Una vez instalada hacen click en Cargar Proveedor</h3>
                        <h3>Seleccionan la primera opcion que dice Lista de reproduccion</h3>
                        <h3>Le Agregan el Titulo que quieran por ejemplo "Magic Kids"</h3>
                        <h3>En URL deben ingresar la direccion de abajo: </h3>
                        <h3><a href='https://pastebin.com/raw/RvjVtGmT' target="_blank" rel="noreferrer noopener">pastebin.com/raw/RvjVtGmT</a></h3>
                        <h3>Le dan a aplicar y listo ya tendran el canal agregado, luego le dan click en ver "television en vivo" seleccionan Magic Kids y podran ver el stream desde su TV</h3>
                        <h3>Funciona en otros reproductores de IPTV tambien pero la app de arriba es la que mas recomiendo.</h3>
                    </div>
                    
                    <div>
                        <h2>Nota: </h2>
                        <h3>Por el momento el servicio sera libre y con eso me refiero a que el tutorial de arriba lo podran usar</h3>
                        <h3>pero apenas tenga la app de tv funcionando vere de restringir el acceso para ver el stream solo por la web o App</h3>
                        <h3>Motivo: hay gente que cobra en sus servicios de IPTV y no creo que deban cobrar por este contenido, menos si ellos no son los que armaron el stream.</h3>
                    </div>
                </div>
            </div>
        </>
    )
}