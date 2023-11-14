"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image"


export default function Login() {

  const navigate = useRouter();

  const [msgstatus, setMsgStatus] = useState("");

  const [classLoginMsg, setClassLoginMsg] = useState("");

  const [usuario, setUsuario] = useState({
      "info":"login",
      "email":"",
      "senha":""
  });

  useEffect(() => {
      if(msgstatus == "Login realizado com SUCESSO!"){
        setClassLoginMsg("login-suc");
      }else if(msgstatus == "USUÁRIO E OU SENHA INVÁLIDOS!"){
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
                  const token = Math.random().toString(36).substring(2) + Math.
                  sessionStorage.setItem("token-user",token);
                  setMsgStatus("Login realizado com sucesso!");
                  setTimeout(()=>{
                      setMsgStatus("");
                      navigate.push("/");
                  },2000);
              }else{
                  setMsgStatus("Usuário ou senha inválidos!");
                  setTimeout(()=>{
                      setMsgStatus("");
                      setUsuario({
                          "info":"login",
                          "email":"",
                          "senha":""
                      });
                  },2000);
              }
          }
      } catch (error) {
    }
  }

  return (
      <main className='login'>
        <section className="texto-login">
          <div className='logo-porto-login'>
            <Link href="/login">
              <Image src="/logotipo1.svg" alt="Logotipo Porto Seguro-SOS" width={320} height={320} />
            </Link>
          </div>
          <div className='titulo-login'>
            <h1>Login</h1>
          </div>
          <div className="subtitulo-login">
            <h2>Solicite o resgate do seu veículo</h2>
          </div>
          <form onSubmit={handleSubmit} className="form">
            <fieldset>
              <legend>LOGIN</legend>
              <div className="form-control">
                <label htmlFor="idEmail">EMAIL:</label>
                <input type="email" name="email" id="idEmail" placeholder="Digite o seu EMAIL: challenge@fiap.com.br" value={usuario.email} onChange={handleChange} />
              </div>
              <div className="form-control">
                <label htmlFor="idSenha">SENHA:</label>
                <input type="password" name="senha" id="idSenha" placeholder="Digite a sua SENHA: porto123" value={usuario.senha} onChange={handleChange} />
              </div>
              <div className="botao">
                <button type="submit">LOGIN</button>
              </div>
              <div className="paragrafo-login">
                <p>
                  Se você ainda não possui registro.
                  <Link href="/login/cad">CLIQUE AQUI</Link>
                </p>
              </div>
            </fieldset>
          </form>
        </section>
        <section className='foto-guincho'>
          <div className='div-foto-guincho'>
            <Image src="/guincho.svg" alt="Imagem ilustrando um guincho da porto seguro saindo da tela de um celular" width={700} height={700} />
          </div>
        </section>
      </main>
    );
  }