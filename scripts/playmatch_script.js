
setTimeout(function() {
    document.querySelector('.loading_container').style.transform = "translateY(-100%)";
}, 1600)

document.querySelector('.down_bts').addEventListener('click', function() {

    document.querySelector('.loading_container').style.transform = "translateY(0)";

    setTimeout(function() {
        window.scrollTo(0, 0);
        document.location.reload()
    }, 700);
})


const backgroundList = [
    'linear-gradient(-120deg, #ff876d, #ff384f) fixed',
    'linear-gradient(-120deg, #00c68d, #00afff) fixed',
    'linear-gradient(-120deg, #85008d, #452cff) fixed',
    'linear-gradient(-120deg, #ff6a00, #edd214) fixed',
    'linear-gradient(-120deg, #000000, #333333) fixed',
    'linear-gradient(-120deg, #FF0, #F00) fixed'];

document.body.style.background = backgroundList[Math.floor(Math.random() * 6)]

const nameList = [
    'Yuri', 'Ale', 'Ariel', 'Frankie', 'Alison', 'Maciel', 'Charlie', 'Kim', 'Joan', 'Cacá', 'Chris', 'Ellis'
];
const ageList = [
    '21', '19', '17', '23', '25', '18', '27'
];

document.querySelector('.prof_name').innerText = nameList[Math.floor(Math.random() * 12)] + ', ' + ageList[Math.floor(Math.random() * 6)]


const placeList = [
    'São Paulo - SP', 'Curitiba - PR', 'Rio de Janeiro - RJ', 'Florianópolis - SC', 'Salvador - BA', 'Rio Branco - AC', 'Manaus - AM'
];

document.querySelector('.sub_info').innerText = placeList[Math.floor(Math.random() * 6)]

const imgList = [
    'playmatch_photo.png', 'playmatch_photo2.png', 'playmatch_photo3.png', 'playmatch_photo4.png', 'playmatch_photo5.png', 'playmatch_photo6.png', 'playmatch_photo7.png', 'playmatch_photo8.png', 'playmatch_photo9.png', 'playmatch_photo10.png', 'playmatch_photo11.png'
]

document.querySelector('.top_box > img').setAttribute('src', 'assets/playmatch/' + imgList[Math.floor(Math.random() * 10)])