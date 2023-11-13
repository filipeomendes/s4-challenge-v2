import Image from 'next/image'
import Link from "next/link";

export default function Maps() {
  return (
    <>
      <main className="main-mapa">
        <div className="img-mapa">
          <Image src="/mapa.svg" alt="imagem ilustrativa mapa" width={320} height={320}/>
          <div className="botao">
            <Link href="/paginas/solicitacao">
              <button type="submit" className="botao-seguinte">Seguinte</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}