export default function Cabecalho(){
    return(
        <header>
            <div className="logo-porto">
                <Link href="/"><Image src="/logotipo1.svg" alt="" width={30} height={30}></Image></Link>
            </div>
            <div className="menu">
                <nav>
                    <Link href="/maps"></Link>
                    <span> | </span>
                    <Link href="/sobre"></Link>
                    <span> | </span>
                    <Link href="/contato"></Link>
                </nav>
                <Link href="/" title="Sair da Conta"><Image src="/usuario.svg" alt="" width={50} height={50}></Image></Link>
            </div>
        </header>
    )
}