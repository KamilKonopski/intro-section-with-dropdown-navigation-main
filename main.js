const features = document.getElementById('features');
const company = document.getElementById('company');
const featuresNav = document.querySelector('.features-nav');
const companyNav = document.querySelector('.company-nav');
const featuresArrow = document.querySelector('#features img');
const companyArrow = document.querySelector('#company img');
const nav = document.querySelector('.nav');

const mobileMenu = document.querySelector('.mobile-nav');
const mobileMenuImg = document.querySelector('.mobile-nav img')

mobileMenu.addEventListener('click', function() {
    nav.classList.toggle('menu');

    if(nav.classList.contains('menu')) {
        mobileMenuImg.src = "./images/icon-close-menu.svg";
        nav.style.zIndex = '2';
        nav.style.opacity = '1';
        mobileMenu.style.zIndex = '3';
        nav.style.transform = 'translate(0)';
    }else {
        mobileMenuImg.src = "./images/icon-menu.svg";
        nav.style.zIndex = '0';
        nav.style.opacity = "0";
        nav.style.transform = 'translate(150%)';
    };
});

features.addEventListener('click', function() {
    featuresNav.classList.toggle('visible');
    
    if(featuresNav.classList.contains("visible")) {
        featuresArrow.src = './images/icon-arrow-up.svg';
    }else {
        featuresArrow.src = './images/icon-arrow-down.svg';
    };
});

company.addEventListener('click', function() {
    companyNav.classList.toggle('visible');

    if(companyNav.classList.contains("visible")) {
        companyArrow.src = './images/icon-arrow-up.svg';
    }else {
        companyArrow.src = './images/icon-arrow-down.svg';
    };
});
