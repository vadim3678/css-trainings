
const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach(item => {
        item.classList.remove('active');
        this.classList.add('active');
    });
}
list.forEach(item => {
    item.addEventListener('click', activeLink);
});
