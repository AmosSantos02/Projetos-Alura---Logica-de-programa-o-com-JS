const ingressos = {
        pista: 100,
        superior:200,
        inferior: 400
}

function comprar() {
    // Pegar tipos de ingresso
    let ingressoEscolhido = document.getElementById('tipo-ingresso').value ;

    // Pega o ID do HTML referente a cada tipo de ingresso
    let pista = document.getElementById('qtd-pista');
    let superior = document.getElementById('qtd-superior');
    let inferior = document.getElementById('qtd-inferior');
    
    //Pega o span para poder modificar a quantidade -- DIRETAMENTE LIGADO COM AS VARIÁVEIS ACIMA
    let span = document.getElementById(`qtd-${ingressoEscolhido}`);

    //Pega a quantidade digitada
    let qntdDesejada = Number(document.getElementById('qtd').value);
    
    //Se quandidade digitada for maior que a quantidade que tem do objeto com o nome do ingresso escolhido, FALAR QUE NÃO TEM DISPONÍVEL
    if(qntdDesejada > ingressos[ingressoEscolhido]){
        alert(`Quantidade maior do que disponível, no momento há ${ingressos[ingressoEscolhido]} ingressos disponíveis`);
    }

    //Se quantidade digitada for menor, subtrair do objeto ingressos, e modificar o valor do span para a mesma quantidade que tem no objeto
    else{
        ingressos[ingressoEscolhido] -= qntdDesejada;
        span.textContent = ingressos[ingressoEscolhido];
    }
}