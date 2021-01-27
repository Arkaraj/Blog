const ls = document.querySelector('#lightToggle');
const svg = document.querySelectorAll('#modes');
const bodyTag = document.querySelector('body');

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
        } else {
            lsi.classList.add('hidden')
        }
    });
}
