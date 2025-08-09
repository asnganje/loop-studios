const btn = document.getElementById('menu-btn')
const menus = document.getElementById('menu')
btn.addEventListener('click', navToggle)

function navToggle(){
  menus.classList.toggle('hidden')
}

