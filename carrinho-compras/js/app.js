let totalGeral = 0;

function adicionar(){
    // Recuperar Produto, Valor, Quantidade
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
    
    // Calcular subtotal
    let subTotal = quantidade * valorProduto;

    // Adicionar no carrinho
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `
        <section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subTotal}</span>
        </section>`;
    document.getElementById('quantidade').value = '';

    // Atualizar valor total
    totalGeral = totalGeral + subTotal;
    let totalCarrinho = document.getElementById('valor-total');
    totalCarrinho.textContent = `R$ ${totalGeral}`;
}

function limpar() {
  let listaCarrinho = document.getElementById('lista-produtos');
  listaCarrinho.textContent = ''
  let totalCarrinho = document.getElementById('valor-total');
  totalCarrinho.textContent = 'R$ 0,00'
  totalGeral = 0;
}