let GTAInput = document.querySelector('#gta_input')
let consoleInput = document.querySelector('#pc_input')
let QTEInput = document.querySelector('#qte_input')

GTAInput.addEventListener('click', function() {
    GTAInput.firstElementChild.innerText = 'Grand Theft Auto (GTA) V';
})
consoleInput.addEventListener('click', function() {
    consoleInput.firstElementChild.innerText = 'PC';
})
QTEInput.addEventListener('click', function() {
    QTEInput.firstElementChild.innerText = '4 participantes';
})

function toggleSearch() {
    document.querySelector('.big_prof_img').classList.toggle('translateX1')
    document.querySelector('#party_form').classList.toggle('hide_party_form')

    if(document.querySelector('.party_forming').classList.contains('show_forming_party')) {
        document.querySelector('.party_forming').classList.toggle('show_forming_party')
    } else {
        setTimeout(function() {
            document.querySelector('.party_forming').classList.toggle('show_forming_party')
        }, 1300)
    }
}

const search_bt = document.querySelector('.search_bt')
const abandonPartyBt = document.querySelector('.abandon_party')

search_bt.addEventListener('click', toggleSearch)
abandonPartyBt.addEventListener('click', toggleSearch)