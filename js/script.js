$(function ($) {

  $('.bar_toggle_btn').on('click', function () {
    $('#my_nav ul').toggleClass('menu_hide');
    $('.logo').toggleClass('logo_left');
  })


  // blog part js
  $('.blog_slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 1500,
    centerMode: true,
    centerPadding: '0',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]

  })

  //  slider js

  $('#banner').slick({
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 2000,
    prevArrow: ".banner_icon",
    nextArrow: ".banner_icon",


  })


  $('.servi_slider').slick({
    slidesToShow: 3,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,

    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        }
      },
    ]



  });

  //  counter js
  $('.counter_up').counterUp({
    delay: 50,
    time: 1500
  });



  // testimonial content sldier
  $('.testimonial_content_slider').slick({
    slidesToShow: 1,
    arrows: false,
    asNavFor: '.testimonial_img_slider'

  });

  $('.testimonial_img_slider').slick({
    slidesToShow: 3,
    arrows: true,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: ".pre_arrow",
    nextArrow: ".next_arrow",
    asNavFor: '.testimonial_content_slider'
  });



  $('.home_slide_img_slider').slick({
    slidesToShow: 5,
    centerMode: true,
    centerPadding: '0px',
    arrows: false,
    prevArrow: '',
    nextArrow: ''

  })
});