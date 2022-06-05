$(function($){

    $('.bar_toggle_btn').on('click', function(){
        $('#my_nav ul').toggleClass('menu_hide');
        $('.logo').toggleClass('logo_left');
    })




    //  slider js
    
   $('#banner').slick({
    // autoplay:true,
    autoplaySpeed:2000,
    speed:1500,
    prevArrow:'<i class="fa-solid fa-angle-left pre_arrow"></i>',
    nextArrow: '<i class="fa-solid fa-angle-right next_rrow"></i>',

    
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



})