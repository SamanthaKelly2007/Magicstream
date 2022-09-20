import Head from "next/head"

const donar = () => {
  return (
    <>
    <Head>
        <title>Donar</title>
    </Head>

    <div className='centerPage'>
        <div className='donate'>
            <section>
                <h1>Donaciones</h1>
                <p>El proyecto seguira estando por tiempo indefinido, no se pretende cobrar por el stream pero cualquier ayuda es bienvenida.</p>
                <h4>Podes Realizar tu donación por PayPal o MercadoPago.</h4>
                <div className="donateOptions">
                    <a href="https://link.mercadopago.com.ar/magicstream" target="_blank" rel="noreferrer noopener"><img src="/img/mp.svg"></img><figure>MercadoPago</figure></a>
                    <a href="https://paypal.me/sausageworkz" target="_blank" rel="noreferrer noopener"><img src="/img/paypal.svg"></img><figure>PayPal</figure></a>
                </div>
            </section>

            <section>
                <h1>Detalles del Stream</h1>
                <p>Se aceptan sugerencias para el agregado de contenido, siempre que este se pueda conseguir en internet.</p>
                <p>Lo que se pudo recopilar publicamente son los siguientes shows: </p>
                <br/>
                
                <table>
                    <tbody>
                        <tr>
                            <td>Serie</td>
                            <td>Episodios</td>
                            <td>Duracion</td>
                        </tr>
                        <tr>
                            <td>Coco Miel</td>
                            <td>7</td>
                            <td>5min</td>
                        </tr>
                        <tr>
                            <td>Yamazaki</td>
                            <td>4</td>
                            <td>23min</td>
                        </tr>
                        <tr>
                            <td>Nivel X</td>
                            <td>7</td>
                            <td>30min</td>
                        </tr>
                        <tr>
                            <td>A Jugar con Hugo</td>
                            <td>5</td>
                            <td>30min</td>
                        </tr>
                        <tr>
                            <td>Kito Pizzas</td>
                            <td>13</td>
                            <td>30min</td>
                        </tr>
                        <tr>
                            <td>Zona Virtual</td>
                            <td>10</td>
                            <td>30min</td>
                        </tr>
                    </tbody>
                </table>
                
                <br/>
                <p>Posiblemente se encuentren mas en grabaciones, si contas con algun show te agradeceria que lo subieras a youtube o alguna plataforma publica.</p>
            </section>
        </div>
    </div>
    </>
  )
}

export default donar
