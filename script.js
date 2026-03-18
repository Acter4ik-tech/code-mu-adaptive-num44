
// ------------------GET ELEMNTS-----------

const burgerMenu = document.getElementById('burger-menu')
const burgerBack = document.getElementById('burger-menu--back')
const filterMenu = document.getElementById('filters')

// -----------------------BURGER ACTIVITY-----------

burgerMenu.addEventListener('click', () => {
    if (burgerMenu.classList.contains('burger-menu--active')) {


        filterMenu.classList.remove('with-burger')
        filterMenu.classList.remove('active')
        

        burgerMenu.classList.remove('burger-menu--active')
        setTimeout(() => {
            burgerBack.style.display = 'none'
        }, 200)
        burgerBack.classList.remove('active')


    }
    else {


        filterMenu.classList.add('with-burger')
        filterMenu.classList.add('active')

        burgerMenu.classList.add('burger-menu--active')
        setTimeout(() => {
            burgerBack.style.display = 'grid'
        }, 200)
        burgerBack.classList.add('active')

        
    }
})