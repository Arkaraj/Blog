const ls = document.querySelector('#lightToggle');
const svg = document.querySelectorAll('#modes');
const bodyTag = document.querySelector('body');
const codeColor = document.querySelectorAll('code');
if (!codeColor) {
    codeColor = 'nope';
}

ls.addEventListener('click', () => {
    if (bodyTag.classList.contains('dark')) {
        bodyTag.classList.remove('dark');
    } else {
        bodyTag.classList.add('dark');
    }
    toggleSvg();
});

function toggleSvg() {
    svg.forEach((lsi) => {
        if (lsi.classList.contains('hidden')) {
            lsi.classList.remove('hidden')
            if (codeColor) {
                codeColor.forEach(clr => {
                    clr.style.color = '#a5d6ff'
                })

            } else {

            }
        } else {
            lsi.classList.add('hidden')
            if (codeColor) {
                codeColor.forEach(clr => {
                    clr.style.color = '#e83e8c'
                })
            } else {

            }
        }
    });
}

function auth() {
    alert('As this is a personal Blog you are not allowed to edit or add this, Keep Reading 😁');
}
const consolestyles = ['font-size: 46px', 'color: #757575'].join(';');
console.log('%cArkaraj', consolestyles);