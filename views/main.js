const ls = document.querySelector('#lightToggle');
const [sun, moon] = document.querySelectorAll('#modes');
const bodyTag = document.querySelector('body');
const codeColor = document.querySelectorAll('code');
if (!codeColor) {
    codeColor = 'nope';
}

ls.addEventListener('click', () => {
    if (bodyTag.classList.contains('dark')) {
        bodyTag.classList.remove('dark');
        localStorage.theme = 'light'
    } else {
        bodyTag.classList.add('dark');
        localStorage.theme = 'dark'

    }
    toggleSvg();
});

function toggleSvg() {
    if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
        sun.classList.remove('hidden')
        moon.classList.add('hidden')
        if (codeColor) {
            codeColor.forEach(clr => {
                clr.style.color = '#e83e8c'
            })

        } else {

        }
    } else {
        moon.classList.remove('hidden')
        sun.classList.add('hidden')
        if (codeColor) {
            codeColor.forEach(clr => {
                clr.style.color = '#a5d6ff'
            })

        } else {

        }
    }
    /* const svg = document.querySelectorAll('#modes');
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
    });*/

}

function auth() {
    alert('As this is a personal Blog you are not allowed to edit or add this, Keep Reading 😁');
}
const consolestyles = ['font-size: 46px', 'color: #757575'].join(';');
console.log('%cArkaraj', consolestyles);

const darkMode = () => {
    // On page load or when changing themes

    // Whenever the user explicitly chooses to respect the OS preference
    // localStorage.removeItem('theme')

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        bodyTag.classList.add('dark')

    } else {
        bodyTag.classList.remove('dark')
        moon.classList.add('hidden')
        sun.classList.remove('hidden')
        localStorage.theme = 'light'
        if (codeColor) {
            codeColor.forEach(clr => {
                clr.style.color = '#e83e8c'
            })

        } else {

        }
    }

}