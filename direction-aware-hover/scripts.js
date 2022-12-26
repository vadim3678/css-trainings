document.querySelectorAll('a').forEach(elem => {
    elem.onmouseenter =
        elem.onmouseleave = (event) => {
            const tolerance = 10;
            const left = 0;
            const right = elem.clientWidth;
            let x = event.pageX - elem.offsetLeft;
            if (x - tolerance < left) {
                x = left;
            }
            if (x + tolerance > right) {
                x = right;
            }
            elem.style.setProperty('--x', `${x}px`);

        }
});