/* abre e fecha o menu */
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    // ai element quando você escutar um 'click' você faz isso 🠗🠗🠗
    nav.classList.toggle('show') // Ei nav vê se tem uma class chamada 'show' ai , se tiver você tira e se não tiver você coloca jaé ?
  })
}

//para podermos criar isso tivemos que primeiro criar todo o .show depois apagar ele do HTML e recriar-lo com DOM

/*=========== links =============*/
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/*=========== SCROLL =============*/
const header = document.querySelector('#header')
const navheight = header.offsetHeight // o offsetHeight pega toda a altura do elemento

window.addEventListener('scroll', function () {
  // window é o body do site
  if (window.scrollY >= navheight) {
    // se o body(window) se move pra baixo (scrollY) e cobrir a altura(>= navHeight) do header a mostra isso

    header.classList.add('scroll')
    // ai header coloca uma class scroll na sua lista de elementos
    //scroll maior que altura do header
  } else {
    header.classList.remove('scroll')
    //scroll menor quue a altura de header
  }
})

/*=============== carrosel ============*/

const swiper = new Swiper('.swiper', {
  sliderPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },

  mouseHell: true,
  keyboard: true
})

/*=========== SCROLL REVEAL =============*/

const scrollreveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollreveal.reveal(
  `

#home .image , #home .text ,
#about .image , #about .text,
#service header, #service .card , 
#testimonials header , #testimonials .testimonials ,
#contact .text , #contact .links , footer , 
.paragrapho , .social
`,
  { interval: 100 }
)
