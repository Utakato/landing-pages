const menuButtons = document.getElementsByClassName("menu-button")
const menu = document.getElementsByTagName('nav')[0]

// Menu Scroll

for(i=0;i<menuButtons.length; i++) {
    const button = menuButtons[i] 
    const name = button.id
    const section = document.getElementsByClassName(name)

    button.addEventListener("click", () => {
        menu.classList.remove('show')
        section[0].scrollIntoView({ 
            behavior: 'smooth' 
          })
    })
}

// Menu Mobile

let Responsive = () => {
    let isMobile = window.innerWidth < 800;
    if (isMobile){
        menu.className = 'mobile-menu'
    } else {
        menu.className = 'desktop-menu'
    }
}

let toggleMenu = () => {
    const show = 'mobile-menu show'
    const hide = 'mobile-menu'
    const backdrop = document.getElementsByClassName('backdrop')[0]
    
    if (menu.className == hide) {
        backdrop.className = 'backdrop'
        menu.className = show
    } else {
        backdrop.className = 'backdrop hide'
        menu.className = hide
    }
}

window.addEventListener('resize', () => {Responsive()})

Responsive()