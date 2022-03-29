const SmoothScroll = element => {element.scrollIntoView({ 
    behavior: 'smooth' 
  })}

const menuButtons = document.getElementsByClassName("menu-button")

for(i=0;i<menuButtons.length; i++) {
    const button = menuButtons[i] 
    const name = button.id
    const section = document.getElementsByClassName(name)

    button.addEventListener("click", () => {
        SmoothScroll(section[0])
    })
}
