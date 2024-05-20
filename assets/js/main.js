//ANIMACIÓN SCROLL
AOS.init();

//CARRUSEL SECCIÓN INSPECCIÓN REGULAR
document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        width: '90%',
        perPage: 5,
        perMove: 1,
        breakpoints: {
            768: {
        perPage: 2,
        gap: 10,
    //   padding: {
    //     right: "5rem",
    //   },
    },
},
gap: 20,
drag: true,
arrows: true,
autoplay: true,
pagination: false,
type: "loop",
} );

    splide.mount();
} );





