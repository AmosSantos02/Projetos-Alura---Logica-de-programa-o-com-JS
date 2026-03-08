let amigos = [];

function adicionar() {
    //Colocar e pegar o nome digitado
    let amigo = document.getElementById('nome-amigo');
    let lista = document.getElementById('lista-amigos');
    
    if(amigo.value == ''){
        alert('Informe o nome do amigo');
        return
    } 
    
    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado! Coloque sobrenome');
        return;
    }
    amigos.push(amigo.value);

    if(lista.textContent == ''){
        lista.textContent = amigo.value;
    } else {
        lista.textContent = `${lista.textContent}, ${amigo.value}`;
    }
    amigo.value = '';
}

// sortear os nomes entre si com base na lista de amigos incluidos (função sortear)
function sortear(){
    if(amigos.length < 4){
        alert('Adicione pelo menos 4 amigos');
        return;
    }
    embaralha(amigos);
    let sorteio = document.getElementById('lista-sorteio');
    sortearAgain(sorteio)

    for(let i = 0; i < amigos.length; i++){
        if(i == amigos.length - 1){
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[0] + '<br>';
        } else {
            sorteio.innerHTML = sorteio.innerHTML + amigos[i] + ' --> ' + amigos[i + 1] + '<br>';
        }
    }
}

function sortearAgain(sorteio) {
    sorteio.innerHTML = '';
}

function embaralha(lista) {

    let indice = lista.length
    
    while(indice) {
        // atenção para o pós-incremento indice-- 
        const indiceAleatorio = Math.floor(Math.random() * indice--);
        [lista[indice], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice]];
    }
}

// LIMPAR TUDO (função reiniciar)
function reiniciar(){
    amigos = [];
    document.getElementById('lista-sorteio').innerHTML = '';
    document.getElementById('lista-amigos').innerHTML = '';
}