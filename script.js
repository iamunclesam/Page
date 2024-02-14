

function displayMenu() {
    let icon = document.querySelector('.nav-icon')
    let menu =  document.querySelector('.mobile-item-bar')
    if(menu.style.display === 'block') {
        menu.style.display = 'none'
    }

    else {
        menu.style.display = 'block'
    }
}

