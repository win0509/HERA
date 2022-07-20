$(document).ready(function(){
  AOS.init();
//sec1
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        effect:"slide",
        autoplay:{
          delay:2000},

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      var swiper = new Swiper(".firstSwiper", {
        loop:true,
        effect:"slide",
        autoplay:{
          delay:2000},

        slidesPerView: 3,
        spaceBetween: 30,
        freeMode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
           
          375: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          500: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          756: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1199: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        },

      });



      // hamburger
      $('.hamburger').click(function(){
        $('.hamburger-sub-box').addClass('active');
     
      });
      $('.hamburger-sub-box').mouseleave(function(){
        $('.hamburger-sub-box').removeClass('active');
      });


      //sec3
      
      $(window).scroll(function(){

        const a = $(window).scrollTop();
        console.log(a);
      });

      $('.sec3-btn').mouseenter(function(){
        $('.sec3-btn img').toggleClass('active');
      });
}); /* end */