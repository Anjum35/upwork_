
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    //navText: ['Prev','Next'],
    autoplay:true,
    smartSpeed:600,
    autoplayTimeout:6000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})