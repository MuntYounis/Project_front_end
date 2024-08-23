document.getElementById('callForm').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('callForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
});

document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var alertBox = document.getElementById('subscribeAlert');
    alertBox.style.display = 'block';


    this.reset();
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('nav');
    const navHeight = navbar.offsetHeight;

    if (window.scrollY > navHeight) {
        navbar.classList.add('scrolNavbar');
    } else {
        navbar.classList.remove('scrolNavbar');
    }
});