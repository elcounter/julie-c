const burger = document.querySelector('.burger');
const lines = document.querySelectorAll('.burger > div');
const navLinks = document.querySelector('nav > ul');
const links = document.querySelectorAll('.link');

burger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    lines.forEach(line => {
        line.classList.toggle("toggle");
    })
});

links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove("open");
        lines.forEach(line => {
            line.classList.remove("toggle");
        })
    })
})

