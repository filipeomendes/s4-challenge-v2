"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function CadUser({params}) {

    const router = useRouter();
    const [msgstatus, setMsgStatus] = useState("");
    const [classLoginMsg, setClassLoginMsg] = useState("");
    const [usuario, setUsuario] = useState({
        "info":"cadastro",
        "nome":"",
        "email":"",
        "senha":""
    });

    useEffect(() => {
       if(msgstatus == "Cadastro realizado com SUCESSO!"){
          setClassLoginMsg("login-suc");
        }else if(msgstatus == "OCORREU UM ERRO!"){
            setClassLoginMsg("login-err");
        }else{
            setClassLoginMsg("login");
        }
    }, [msgstatus]);
    
    const handleChange = (e)=>{

        const{name, value} = e.target;
        setUsuario({...usuario,[name]:value});
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        
        try {
            const response = await fetch("http://localhost:3000/api/base/base-users/0",{
                method: "POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify(usuario)
            });

            if(response.ok){
                const user = await response.json();

                if(user){
                    setMsgStatus("Cadastro realizado com SUCESSO!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        router.push("/");
                    },5000);
                }else{
                    setMsgStatus("OCORREU UM ERRO!");
                    setTimeout(()=>{
                        setMsgStatus("");
                        setUsuario({
                            "info":"cadastro",
                            "email":"",
                            "senha":"",
                            "nome":""
                        });
                    },5000);
                }
            }
        } catch (error) {
      }
    }

  return (
    <div>
        <h1>CADASTRO DE USUÁRIOS</h1>

            <h2 className={classLoginMsg}>{msgstatus}</h2>

        <div>
            <form onSubmit={handleSubmit} className="form">
                <fieldset>

                    <legend>CADASTRO</legend>
                    <div className="form-control">
                        <label htmlFor="idNome">NOME:</label>
                        <input type="text" name="nome" id="idNome" placeholder="Digite o seu NOME:" value={usuario.nome} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idEmail">EMAIL:</label>
                        <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL:" value={usuario.email} onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor="idSenha">SENHA:</label>
                        <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA:" value={usuario.senha} onChange={handleChange}/>
                    </div>
                    <div>
                        <button>CADASTRAR</button>
                    </div>
                    <div>
                        <p>Se você já possui registro. <Link href="/login">CLIQUE AQUI</Link></p>
                    </div>
                </fieldset>
            </form>
        </div>
    </div>
  )
}