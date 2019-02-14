const botaoBares = document.querySelector('.bares');
const botaoCompras = document.querySelector('.lojas');

const iframeBares = document.querySelector('.gmaps_bars_iframe');
const iframeCompras = document.querySelector('.gmaps_shopping_iframe');

botaoBares.addEventListener('click', function() {
    if(!botaoBares.classList.contains('choosen')) {
        botaoBares.classList.add('choosen');
        botaoCompras.classList.remove('choosen');
        iframeCompras.style.display = 'none';
        iframeBares.style.display = 'block';

    } else {
        return false;
    }
})

botaoCompras.addEventListener('click', function() {
    if(!botaoCompras.classList.contains('choosen')) {
        botaoBares.classList.remove('choosen');
        botaoCompras.classList.add('choosen')
        iframeBares.style.display = 'none';
        iframeCompras.style.display = 'block';
    } else {
        return false;
    }
})