$(function($){

    $('.bar_toggle_btn').on('click', function(){
        $('#my_nav ul').toggleClass('menu_hide');
        $('.logo').toggleClass('logo_left');
    })




    //  slider js
    
   $('#banner').slick({
    autoplay:true,
    autoplaySpeed:4000,
    speed:2000,
    prevArrow:".banner_icon",
    nextArrow: ".banner_icon",

    
   })
   

   $('.servi_slider').slick({
       slidesToShow:3,
       arrows:false,
       autoplay:true,
       autoplaySpeed:2000,
       speed:1500,
       
       responsive: [
        {
            breakpoint: 992,
            settings: {
              slidesToShow:2,
            }
          },
        {
          breakpoint: 576,
          settings: {
            slidesToShow:1,
          }
        },
      ]

       

   });

  //  counter js
  $('.counter_up').counterUp({
    delay: 50,
    time: 1500
});





})