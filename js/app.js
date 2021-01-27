

// menu

const $menuMobileJs = document.querySelector('.menu-mobile-js'),
$menuModal = document.querySelector('.menu-modal'),
$menuJsSM = document.querySelectorAll('.menu-m a');


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

$menuJsSM.forEach(item => {
    item.addEventListener('click', e => {
        setTimeout(() => {
            $menuMobileJs.classList.remove('active');
            $menuModal.classList.remove('active');
            $menuMobileJs.removeAttribute('active');
        }, 100);
    })
})




jQuery(function($) {

    const section = $('.scrollto'),
          navEr = $('.menu-js'),
          navA = $('.menu-js a'),
          navHeights_it = navEr.outerHeight(); // получаем высоту навигации 

    // поворот экрана 
    window.addEventListener('orientationchange', function () {
        navHeights_it = navEr.outerHeight();
    }, false);

    $(window).on('scroll', function () {
        const position = $(this).scrollTop();
        navA.removeClass('active');
        section.each(function () {
            const top = $(this).offset().top - navHeights_it - 85,
                  bottom = top + $(this).outerHeight();

            if (position >= top && position <= bottom) {
                navEr.find('a').removeClass('active');

                section.removeClass('active');

                $(this).addClass('active');
                navEr.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
            }  else {
                
            }
        });
    });

    navEr.find('a').on('click', function () {
        const id = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(id).offset().top - navHeights_it - 85
        }, 487);

        return false;
    });

});