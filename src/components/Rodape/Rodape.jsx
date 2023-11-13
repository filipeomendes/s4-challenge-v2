import Image from "next/image"

export default function Rodape(){

    return (
        <footer>
            <section className="conteudo-rodape">
                <div className="redes-sociais-logos">
                    <nav className="redes-sociais-nav">
                        <a href="https://github.com/filipeomendes/sprint3-challenge-1tdspv" target='blank'><Image src="/github.png" alt="Logo preto do Github" width={30} height={30} /></a>
                        <a href="https://www.instagram.com/complex.wrld/" target='blank'><Image src="/instagram.png" alt="Logo preto do Instagram" width={30} height={30} /></a>
                        <a href="https://www.facebook.com" target='blank'><Image src="/facebook.png" alt="Logo preto do Facebook" width={30} height={30} /></a>
                    </nav>
                </div>
                <div className='copyright'>
                    <p className='texto-footer'>Todos os direitos reservados ©2023 - Complex</p>
                </div>
            </section>
        </footer>
    );
}