const toggle = document.querySelector('.toggle')
const navigation = document.querySelector('.navigation')

toggle.addEventListener('click', () => {
    toggle.classList.toggle('active')
    navigation.classList.toggle('active')
})


setTimeout(() => {
    document.getElementById('splash').classList.toggle('fade');
}, 2000)

setTimeout(() => {
    document.getElementById('text').classList.toggle('dissapear');
}, 3500)