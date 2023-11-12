import Image from "next/image"

export const metadata = {
    title: 'Status',
}

export default function Status() {
    return (
      <main>
        <div className="titulo">
            <h1>Status</h1>
        </div>
        <div className="status-foto">
            <Image src="/status-foto.svg" alt="ilustração do status da solicitação de guincho (guincho a caminho)"></Image>
        </div>
      </main>
    )
  }