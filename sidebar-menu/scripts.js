
const navigation = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    navigation.classList.toggle('active');
});    

const list  = document.querySelectorAll('.list');
for(let i = 0; i < list.length; i++) {
    list[i].onclick = function() {
        let j = 0;
        while(j < list.length) {
            list[j++].className = 'list'
        }
        list[i].className = 'list active';
    }
}