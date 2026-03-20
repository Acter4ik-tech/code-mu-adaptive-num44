
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

// choose link in main navigation

const nav = document.querySelector('.main-nav')

nav.addEventListener('click', (event) => {
    const link = event.target.closest('a')

    if(!link) return

    const allItems = document.querySelectorAll('.main-nav li')

    allItems.forEach(li => li.classList.remove('main-nav__active'))

    const parentLi = link.closest('li')

    parentLi.classList.add('main-nav__active')
})



window.addEventListener('resize', handleResize)
burgerMenu.addEventListener('click', burgerEnable)
burgerBack.addEventListener('click', burgerEnable)