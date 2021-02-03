// Show and Remove Navbar Toggler

const nav = document.querySelector('.navbar')
const btn = document.querySelector('.nav-btn')
const links = document.querySelectorAll('.nav-menu a')

btn.addEventListener('click', () => {
    nav.classList.toggle('navbar-toggler')
})

links.forEach(e => e.addEventListener('click', () => {
    nav.classList.remove('navbar-toggler')
}))

// Show and Remove Active Class

function addClassActive() {
    links.forEach(e => e.classList.remove('active'))
    this.classList.add('active')
}
links.forEach(e => e.addEventListener('click', addClassActive))


// Change Navbar Color In Scroll

const html = document.documentElement;
const scrollBtn = document.querySelector('.scroll-btn');
addEventListener('scroll', () => {
    if (html.scrollTop) {
        nav.classList.add('navbar-dark')
        scrollBtn.classList.add('scroll-btn-hide')
    } else {
        nav.classList.remove('navbar-dark')
        scrollBtn.classList.remove('scroll-btn-hide')
    }
})

scrollBtn.addEventListener('click', () => {
    html.scrollTop = 0;
    links.forEach(e => e.classList.remove('active'))
    links[0].classList.add('active')
})


// Add Class Active With Section

const sections = document.querySelectorAll('section');

addEventListener('scroll', () => {
    sections.forEach(s => {
        const id = s.getAttribute('id');
        const link = document.querySelector(`nav a[href='#${id}']`);

        if (
            scrollY >= s.offsetTop - s.nextElementSibling.offsetHeight * 0.5 &&
            scrollY < s.nextElementSibling.offsetTop - s.offsetHeight * 0.5
        ) {
            removeClassActive();
            link.classList.add('active')
        }
    })
})


function removeClassActive() {
    links.forEach(e => e.classList.remove('active'))
}



// Dark Mode 


// addEventListener('click',()=>{
// 	const html = document.documentElement;
// 	const btns= document.querySelectorAll('.btn');
// 	const imgs= document.querySelectorAll('img');
	
// 	html.classList.toggle('dark-mode')
// 	btns.forEach(btn=> btn.classList.toggle('dark-mode'))
// 	imgs.forEach(img=> img.classList.toggle('dark-mode'))
// 	img.classList.toggle('dark-mode')
// })



let footerTime = document.querySelector('footer .time');
const time = new Date();
footerTime.innerHTML = 'time.getFullYear()'