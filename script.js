var swiper = new Swiper(".mySwiper", {
    spaceBetween: 50,
    slidesPerView: 1,
    speed: 1000,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// hover slide in arrow
$('.shop-now p').hover(() => {
    $('.shop-now img').slideToggle();
});