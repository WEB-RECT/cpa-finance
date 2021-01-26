

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

