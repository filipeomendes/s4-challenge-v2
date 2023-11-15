import Cabecalho from "@/components/Cabecalho/Cabecalho"
import Rodape from "@/components/Rodape/Rodape"
import Image from "next/image"

export const metadata = {
    title: 'Status',
}

export default function Status() {
    return (
      <>
      <Cabecalho/>
      <main>
        <div className="titulo">
            <h1>Status</h1>
        </div>
        <div className="status-foto">
            <Image src="/status-foto.svg" alt="ilustração do status da solicitação de guincho (guincho a caminho)" width={320} height={320}></Image>
        </div>
      </main>
      <Rodape/>
      </>
    )
  }