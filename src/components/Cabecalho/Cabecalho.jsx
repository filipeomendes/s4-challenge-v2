"use client";
import Link from "next/link";
import Image from 'next/image'
import { Children } from "react";

export default function Cabecalho(){
    return(
        <header>
            <div className="logo-porto">
                <Link href="/"><Image src="/logotipo1.svg" alt="Logotipo Porto Seguro-SOS" width={30} height={30}></Image></Link>
            </div>
            <div className="menu">
                <nav>
                    <Link href="/paginas/solicitacao">Solicitação</Link>
                    <span> | </span>
                    <Link href="/paginas/sobre">Sobre</Link>
                    <span> | </span>
                    <Link href="/paginas/contato">Contato</Link>
                </nav>
                <Link href="/login" title="Sair da Conta"><Image src="/usuario.svg" alt="" width={50} height={50}></Image></Link>
            </div>
        </header>
    )
}