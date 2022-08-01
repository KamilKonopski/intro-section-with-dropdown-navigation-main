const features = document.getElementById('features');
const company = document.getElementById('company');
const featuresNav = document.querySelector('.features-nav');
const companyNav = document.querySelector('.company-nav');
const featuresArrow = document.querySelector('#features img');
const companyArrow = document.querySelector('#company img');

features.addEventListener('click', () => {
    featuresNav.classList.toggle('visible');
    
    if(featuresNav.classList.contains("visible")) {
        featuresArrow.src = './images/icon-arrow-up.svg';
    }else {
        featuresArrow.src = './images/icon-arrow-down.svg';
    };
});

company.addEventListener('click', () => {
    companyNav.classList.toggle('visible');

    if(companyNav.classList.contains("visible")) {
        companyArrow.src = './images/icon-arrow-up.svg';
    }else {
        companyArrow.src = './images/icon-arrow-down.svg';
    };
});
