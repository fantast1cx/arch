const header_menu = document.querySelector('.header-menu');
const header_mob = document.querySelector('.header-mob');
const header_nav = document.querySelector('.header-nav');
const header_li = document.querySelectorAll('.header-mob-li');

header_menu.onclick = function() {

    this.classList.toggle('header-menu--active');
    header_nav.classList.toggle('header-nav--active');
    header_mob.classList.toggle('header-mob--active');

};

header_li.forEach(li => {

    li.onclick = () => {

        header_menu.classList.toggle('header-menu--active');
        header_nav.classList.toggle('header-nav--active');
        header_mob.classList.toggle('header-mob--active');

    };

});