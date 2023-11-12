import Image from 'next/image'

export default function Home() {
  return (
    <>
      <main>
        <div>
          <div>
            <Link href="/maps/solicitacao">
              <button type="submit" className="botao-seguinte">Seguinte</button>
            </Link>
          </div>
        </div>
      </main>
    </>
  )
}
