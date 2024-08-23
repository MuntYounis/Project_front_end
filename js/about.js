document.querySelectorAll('.hover-img').forEach(function(img) {
    img.addEventListener('mouseover', function() {
        const originalSrc = img.src;
        img.src = originalSrc.replace('a.png', 'b.png');
    });

    img.addEventListener('mouseout', function() {
        img.src = img.src.replace('b.png', 'a.png');
    });
});


document.getElementById('newsletterForm').addEventListener('submit', function(event) {
    event.preventDefault(); 


    var alertBox = document.getElementById('subscribeAlert');
    alertBox.style.display = 'block';


    this.reset();
});

window.addEventListener('scroll', function() {
    console.log('hi');
    const navbar = document.querySelector('nav');
    const navHeight = navbar.offsetHeight;

    if (window.scrollY > navHeight) {
        navbar.classList.add('scrolNavbar');
    } else {
        navbar.classList.remove('scrolNavbar');
    }
});