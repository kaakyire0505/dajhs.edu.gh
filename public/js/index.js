const open_menu = document.getElementById('open-menu')
const close_menu = document.getElementById('close-menu')
const navlinks = document.getElementById('navbar')

// ? closing of mobile menu navigations
close_menu.onclick = () => {
    navlinks.style.display = 'none'
    open_menu.style.display = 'block'
    close_menu.style.display = 'none'
}

// ? opening of mobile menu navigations
open_menu.onclick = () => {
    navlinks.style.display = 'block'
    open_menu.style.display = 'none'
    close_menu.style.display = 'block'
}

// ? going to admin side
const adform = document.getElementById('adform')
const key = document.getElementById('key') 

key.addEventListener('click', (e) => {
    e.preventDefault()
        adform.style.display = 'block'
})



// ? displaying of validation form for pupils
const oneform = document.getElementById('oneform')
const twoform = document.getElementById('twoform')
const threeform = document.getElementById('threeform')
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')

link1.addEventListener('click', (e) => {
    e.preventDefault()
    oneform.style.display = 'block'
})

link2.addEventListener('click', (e) => {
    e.preventDefault()
    twoform.style.display = 'block'
})

link3.addEventListener('click', (e) => {
    e.preventDefault()
    threeform.style.display = 'block'
})




// ? printing portal sheet
const printbtn = document.getElementById('print')
const printcontent = document.querySelector('.table')
printbtn.addEventListener('click', (e) => {
    document.body.innerHTML = printcontent.innerHTML
    e.preventDefault()
    window.print()
})

