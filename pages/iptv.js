import Head from 'next/head'

export default function Iptv() {
    return(
        <>
            <Head>
                <title>IPTV</title>
            </Head>
            <div className='singleCol h100'>
                <div className='iptvMsg'>
                    <img src="/img/Android-TV-Logo.png" alt='Android TV'/>
                    <section>
                        <h1>IPTV Android TV</h1>
                        <p>1- Bajen la App OTT Navigator de PlayStore</p>
                        <p>2- Una vez instalada hacen click en Cargar Proveedor</p>
                        <p>3- Seleccionan la primera opcion que dice Lista de reproduccion</p>
                        <p>4- Le Agregan el Titulo que quieran por ejemplo <strong>Magic Kids</strong></p>
                        <p>5- En URL deben ingresar la direccion de abajo: </p>
                        <p><a href='https://pastebin.com/raw/RvjVtGmT' target="_blank" rel="noreferrer noopener">pastebin.com/raw/RvjVtGmT</a></p>
                        <p>6- Le dan a aplicar y listo ya tendran el canal agregado, luego le dan click en <strong>ver television en vivo</strong> seleccionan Magic Kids y podran ver el stream desde su TV</p>
                    </section>
                    
                    <section>
                        <h1>Para otras apps de IPTV</h1>
                        <p>pueden bajar el archivo de abajo</p>
                        <p>Descargar M3U: <a href='/downloads/Magic_Kids.m3u' download>Magic_Kids.m3u</a></p>
                    </section>

                    <section>
                        <h1>TDT Channels</h1>
                        <p>Si usan la App TDT Channels van a necesitar copiar la URL de Abajo</p>
                        <p>URL JSON: <a href='/downloads/Magic_Kids_TDT.json'>Magic_Kids_TDT.JSON</a></p>
                    </section>

                    <section>
                        Proximamente desarrollare una app para no depender de otros programas de IPTV.
                    </section>
                </div>
            </div>
        </>
    )
}