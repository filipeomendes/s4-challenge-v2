import Rodape from "@/components/Rodape/Rodape"
import Cabecalho from "@/components/Cabecalho/Cabecalho"

export const metadata = {
    title: 'Contato',
}

export default function Contato() {
    return (
      <>
      <Cabecalho/>
      <main className="contato">
        <div className="titulo">
          <h1>Contato</h1>
        </div>
        <div className="membros">
        <h2>Fernando Paparelli Aracena - rm551022</h2>
          <p>rm551022@fiap.com</p>
          <h2>Filipe de Oliveira Mendes - rm98959</h2>
          <p>rm98959@fiap.com.br</p>
          <h2>Miron Gonçalves Marins - rm551801</h2>
          <p>rm551801@fiap.com.br</p>
          <h2>Paulo Henrique de Andrade Junior - rm99714 </h2>
          <p>rm99714@fiap.com.br</p>
          <h2>Vinicius Pedro de Souza - rm550907</h2>
          <p>rm550907@fiap.com.br</p>
        </div>
      </main>
      <Rodape/>
      </>
    )
  }