export default function Cabecalho(){
    return(
        <header>
            <div>
                <Link href="/"><Image src="/logotipo1.svg" alt="Logotipo Porto Seguro-SOS" width={30} height={30}></Image></Link>
            </div>
            <div>
                <nav>
                    <Link href="/maps">Solicitação</Link>
                    <span> | </span>
                    <Link href="/paginas/sobre">Sobre</Link>
                    <span> | </span>
                    <Link href="/paginas/contato">Contato</Link>
                </nav>
                <Link href="/" title="Sair da Conta"><Image src="/usuario.svg" alt="" width={50} height={50}></Image></Link>
            </div>
        </header>
    )
}