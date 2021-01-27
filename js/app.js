

// menu

const $menuMobileJs = document.querySelector('.menu-mobile-js'),
$menuModal = document.querySelector('.menu-modal');


$menuMobileJs.addEventListener('click', e => {
    e.preventDefault();

    if (!$menuMobileJs.getAttribute('active')) {

        $menuMobileJs.classList.add('active');
        $menuModal.classList.add('active');
        $menuMobileJs.setAttribute('active', 'active');

    } else {
        $menuMobileJs.classList.remove('active');
        $menuModal.classList.remove('active');
        $menuMobileJs.removeAttribute('active');
        
    }
});




jQuery(function($) {

    const section = $('.scrollto'),
          nav = $('.menu-js'),
          navA = $('.menu-js a'),
          navHeight = nav.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    window.addEventListener('orientationchange', function () {
        navHeight = nav.outerHeight();
    }, false);

    $(window).on('scroll', function () {
        const position = $(this).scrollTop();
        navA.removeClass('active');
        section.each(function () {
            const top = $(this).offset().top - navHeight - 85,
                  bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                nav.find('a').removeClass('active');

                section.removeClass('active');

                $(this).addClass('active');
                nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }  else {
                
            }
        });
    });

    nav.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeight - 85
        }, 487);

        return false;
    });

});