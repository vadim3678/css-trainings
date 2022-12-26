const nav = document.querySelector('nav'),
    toggleBtn = nav.querySelector('.toggle-btn');

    toggleBtn.addEventListener('click', () => {
        nav.classList.toggle('open');
    })


// to make draggable nav
function onDrag({movementY}) {
    const navStyle = getComputedStyle(nav); 
    const navTop = parseInt(navStyle.top);
    const navHeight = parseInt(navStyle.height);
    winHeight = window.innerHeight;
    nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
     if (navTop > winHeight - navHeight) {
        nav.style.top = `${winHeight - navHeight}px`;
     }
}
nav.addEventListener('mousedown', () => {
    nav.addEventListener('mousemove', onDrag);
});
nav.addEventListener('mouseleave', () => {
    nav.removeEventListener('mousemove', onDrag);
});
nav.addEventListener('mouseup', () => {
    nav.removeEventListener('mousemove', onDrag);
});