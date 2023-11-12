export default function Sobre() {
    return (
        <main>
          <div className="titulo">
            <h1>Sobre o Projeto</h1>
          </div>
          <div className="conteudo-sobre">
            <h3>Nós da complex viemos para ajudar a Porto Seguro à resolver o desafio que nos foi entregue, e qual seria esse desafio?</h3>
            <p>Quando nosso carro do dia a dia apresenta algum problema no qual não é possível utilizá-lo, seja por conta de uma peça quebrada, acidente de carro, etc, é comum que seja necessário um guincho para rebocar o veículo até um pátio ou uma oficina, o guincho chega e leva o veículo sem muitos problemas, certo? Mas a situação não é a mesma quando falamos sobre veículos pesados, é frequente que quando um veículo pesado que precise de um guincho para rebocá-lo e esse guincho não aguentar o peso desse veículo. Ou seja, a assertividade de um guincho adequado para veículos pesados não é eficaz, a Porto nos procurou e nós troxemos a solução!</p>
            <p>Através do sistema Porto SOS, será possível melhorar a assertividade de guinchos para essas ocorrencias. Vale ressaltar que nem todas as vezes que um guincho é solicitado de fato ele é necessário. Através de um ChatBot, nosso sistema fará um questionário com perguntar como, qual o modelo do veículo, se há modificações, se há carga e qual o peso da carga e em seguida fará um breve diagnóstico para verificar a necessidade do envio de um guinho, por exemplo: será questionado perguntar como, o veiculo bateu, o veiculo não está ligando, o veiculo liga mas não tem freio, e etc, e problemas como troca de bateria por exemplo, não é necessário que um guincho reboque o veículo, então é possível que um carro leve as baterias até o local e faça a troca das baterias.</p>
            <p>Essa etapa irá curar apenas uma pequena parte da assertividade dos chamados para veículos pesados, mas e os veículos que precisem de fato de um guincho, ainda chegarão guinchos que não suportam seu peso?</p>
            <p>Nosso sistema também contará com uma inteligencia artificial capaz de identificar o tipo de veículo através de uma serie de fotos enviadas pelo usuário, e estimará seu peso, caso não seja informado pelo banco de dados, e através dessa comunicação será enviado o modal ideal para o chamado.</p>
            <p>E para finalizar, será estruturado um banco de dados que amazenará informações do veículo através do CPF ou CNPJ do usuário, como placa, peso original do veículo, modelo, marca, cor, etc.</p>
          </div>
        </main>
      )
    }