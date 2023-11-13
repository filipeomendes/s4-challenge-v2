"use client";
import Link from "next/link";
import Image from 'next/image'
import { Children } from "react";

export default function Cabecalho(){
    return(
        <header>
            <div className="logo-porto">
                <Link href="/"><Image src="/logotipo1.svg" alt="Logotipo Porto Seguro-SOS" width={100} height={100}></Image></Link>
            </div>
            <div className="menu">
                <nav className="menu-2">
                    <Link href="/paginas/solicitacao">Solicitação</Link>
                    <span> | </span>
                    <Link href="/paginas/sobre">Sobre</Link>
                    <span> | </span>
                    <Link href="/paginas/contato">Contato</Link>
                </nav>
                <Link href="/login" title="Sair da Conta"><Image src="/usuario.svg" alt="" width={30} height={30}></Image></Link>
            </div>
        </header>
    )
}