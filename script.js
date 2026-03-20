
// ------------------GET ELEMNTS-----------

const burgerMenu = document.getElementById('burger-menu')
const burgerBack = document.getElementById('burger-menu--back')
const filterMenu = document.getElementById('filters')

// -----------------------BURGER ACTIVITY-----------

//-------------Burger Dusable------------

function burgerDisable() {
    filterMenu.classList.remove('active')

    setTimeout(() => {
        filterMenu.classList.remove('with-burger')
        burgerBack.classList.remove('active')
    },200)

    setTimeout(() => {
        burgerBack.style.display = 'none'
        burgerMenu.classList.remove('burger-menu--active')
    }, 400)
}

// -------------Burger Enable and disable-------------

function burgerEnable() {
    if (burgerMenu.classList.contains('burger-menu--active')) {
        burgerDisable()
    }
    else {
        burgerMenu.classList.add('burger-menu--active')

        burgerBack.style.display = 'grid'

        setTimeout(() => {
            burgerBack.classList.add('active')
            filterMenu.classList.add('with-burger')
        },200)
        
        setTimeout(() => {
            filterMenu.classList.add('active')
        }, 400)
    }
}

// function for disable burger when window resizing

function handleResize() {
    if (window.innerWidth > 790) {
        burgerDisable()
    }
}

window.addEventListener('resize', handleResize)
burgerMenu.addEventListener('click', burgerEnable)
burgerBack.addEventListener('click', burgerEnable)