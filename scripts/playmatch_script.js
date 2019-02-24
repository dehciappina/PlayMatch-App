
setTimeout(function() {
    document.querySelector('.loading_container').style.opacity = 0;
    document.querySelector('.loading_container').style.visibility = 'hidden';
}, 1600)

document.querySelector('.down_bts').addEventListener('click', function() {

    document.querySelector('.loading_container div div').style.animationIterationCount = 'infinite'
    document.querySelector('.loading_container').style.opacity = 1;
    document.querySelector('.loading_container').style.visibility = 'visible';

    setTimeout(function() {
        window.scrollTo(0, 0);
        document.location.reload()
    }, 1000);
})


const backgroundList = [
    'linear-gradient(-120deg, #FFD56D, #FF142B) fixed',
    'linear-gradient(-120deg, #00F58D, #0088D8) fixed',
    'linear-gradient(-120deg, #ff6a00, #edd214) fixed',
    'linear-gradient(-120deg, #000000, #333333) fixed',
    'linear-gradient(-120deg, #CC0, #E00) fixed',
    'linear-gradient(-120deg, #483DFF, #3C0044) fixed'];

document.body.style.background = backgroundList[Math.floor(Math.random() * 6)]

const nameList = [
    'Yuri', 'Alê', 'Ariel', 'Frankie', 'Alison', 'Sam', 'Charlie', 'Kim', 'Joan', 'Cacá', 'Chris', 'Ellis'
];
const ageList = [
    '21', '19', '17', '23', '25', '18', '27'
];

document.querySelector('.prof_name').innerText = nameList[Math.floor(Math.random() * 12)] + ', ' + ageList[Math.floor(Math.random() * 6)]


const placeList = [
    'São Paulo, SP - 15km', 'Curitiba, PR - 235km', 'Rio de Janeiro, RJ - 150km', 'Florianópolis, SC - 360km', 'Salvador, BA - 552km', 'Rio Branco, AC - 948km', 'Manaus, AM - 838km'
];

document.querySelector('.sub_info').innerText = placeList[Math.floor(Math.random() * 6)]

const imgList = [
    'playmatch_photo.png', 'playmatch_photo2.png', 'playmatch_photo3.png', 'playmatch_photo4.png', 'playmatch_photo5.png', 'playmatch_photo6.png', 'playmatch_photo7.png', 'playmatch_photo8.png', 'playmatch_photo9.png', 'playmatch_photo10.png', 'playmatch_photo11.png'
]

document.querySelector('.top_box > img').setAttribute('src', 'assets/playmatch/' + imgList[Math.floor(Math.random() * 10)])

const descriptionList = [
    'bora dar uns headshots?',
    'Não sou o Nathan Drake, mas tô aqui à procura de um tesouro ;)',
    '#JogoDeFutebolNão #pls',
    'Me chama pra jogar um MMO vai',
    'Troco um dos meus por Watch Dogs 2 #paz',
    'Amigos eu já tenho, o que falta é um(a) rival pra jogar Naruto UNS4',
    'Sou uma pessoa tímida até a primeira partida, depois tem que aguentar.',
    'Óculos VR: CONFERE. Montanha de jogos: CONFERE. Amigos pra jogar: CADÊ?',
    'Me chama pra tomar uma e jogar Mortal Kombat :)',
    'Procura-se suporte pra um LoLzinho #tanque'
]

document.querySelector('.prof_description').innerText = descriptionList[Math.floor(Math.random() * 10)]