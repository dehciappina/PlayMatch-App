
setTimeout(function() {
    document.querySelector('.loading_container').style.opacity = 0;
    document.querySelector('.loading_container').style.visibility = 'hidden';

    setTimeout(() => {
        document.querySelector('.top_box > img').style.transform = 'scale(' + 1 + ')';
    }, 300);
}, 1600)

const addBt = document.querySelector('.add_bt')
const addBtSvg = document.querySelector('.add_bt svg')
const reloadBt = document.querySelector('.reload_bt')
const reloadBtP = document.querySelector('.reload_bt p')
const addBtBg = document.querySelector('.add_bt rect')
const addBtP = document.querySelector('.add_bt p')

document.body.onscroll = function() {
    if(window.scrollY > (window.innerHeight / 2)) {
        addBt.style.transform = 'translateX(0vh)'
        setTimeout(() => {
            reloadBt.style.transform = 'translateX(0vh)'
        }, 100);

        if(window.scrollY > (document.body.offsetHeight - window.innerHeight - 100)) {
            addBtP.classList.add('add_reload_bt_show')
            reloadBtP.classList.add('add_reload_bt_show')
        } else {
            addBtP.classList.remove('add_reload_bt_show')
            reloadBtP.classList.remove('add_reload_bt_show')
        }
    } else {
        addBt.style.transform = 'translateX(40vh)'
        setTimeout(() => {
            reloadBt.style.transform = 'translateX(40vh)'
        }, 300);

    }
}

addBt.addEventListener('click', function() {
    addBtBg.classList.toggle('add_bt_rect_blue')

    addBtSvg.classList.add('add_bt_anim')

    setTimeout(() => {
        addBtSvg.classList.remove('add_bt_anim')
    }, 400);
})

reloadBt.addEventListener('click', function() {

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
    'Yuri', 'Alê', 'Ariel', 'Franky', 'Alison', 'Sam', 'Charlie', 'Kim', 'Joan', 'Cacá', 'Chris', 'Ellis'
];
const ageList = [
    '21', '19', '17', '23', '25', '18', '27'
];

document.querySelector('.prof_name').innerText = nameList[Math.floor(Math.random() * 12)] + ', ' + ageList[Math.floor(Math.random() * 6)]


const placeList = [
    'Stellenbosch, ZA - 35km', 'Worcester, ZA - 235km', 'São Paulo, BR - 6.412km', 'Valencia, ES - 8.281km', 'Perth, AU - 8.712km', 'Ozaka, JP - 14.238km', 'Tunes, TN - 7.803km'
];

document.querySelector('.sub_info').innerText = placeList[Math.floor(Math.random() * 6)]

const imgList = [
    'playmatch_photo.png', 'playmatch_photo2.png', 'playmatch_photo3.png', 'playmatch_photo4.png', 'playmatch_photo5.png', 'playmatch_photo6.png', 'playmatch_photo7.png', 'playmatch_photo8.png', 'playmatch_photo9.png', 'playmatch_photo10.png', 'playmatch_photo11.png'
]

document.querySelector('.top_box > img').setAttribute('src', 'assets/playmatch/' + imgList[Math.floor(Math.random() * 10)])

const descriptionList = [
    'lets give some headshots?',
    "I'm not Nathan Drake, but I'm looking for a treasure here ;)",
    '#SayNoToSoccerGames #peace',
    'Call me to play some MMORpg =)',
    'Exchanging one of mine by Sekiro (PS4) ^^',
    'Friends? Already have. Looking for a new rival on Naruto UNS4',
    "I'm a shy person until the first match, after that you gotta hold me",
    'Oculus VR: CHECK. Mountain of games: CHECK. Friends to play: WHERE???',
    'Call me to drink and play some Mortal Kombat :)',
    'Looking for LoL main support #TANK',
    'Introvert, Capri and game addicted since 11. Looking for friends to form a overwatch team, but opened for possibilities =)'
]

document.querySelector('.prof_description').innerText = descriptionList[Math.floor(Math.random() * 11)]