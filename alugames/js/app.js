function alterarStatus(id) {
    let game = document.getElementById(`game-${id}`);
    let img = game.querySelector('.dashboard__item__img');
    let botao = game.querySelector('.dashboard__item__button');

    if(img.classList.contains('dashboard__item__img--rented')){
        img.classList.remove('dashboard__item__img--rented');
        botao.textContent = 'Alugar';
        botao.classList.remove('dashboard__item__button--return')
    }else{
        img.classList.add('dashboard__item__img--rented');
        botao.textContent = 'Devolver';
        botao.classList.add('dashboard__item__button--return')
    }
}