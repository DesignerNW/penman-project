const navSlide = () => {
    const cheeseburger = document.querySelector('.cheeseburger');
    const nav = document.querySelector('.main-nav a');
    const mainnav = document.querySelectorAll('.main-nav li');

cheeseburger.addEventListener('click',() => {
            //Toggle Nav
    nav.classList.toggle('nav-active');

//Animate Links
    navLinks.forEach((link,index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
        }
    });
});

cheeseburger.classList.toggle('toggle');

navSlide()};
