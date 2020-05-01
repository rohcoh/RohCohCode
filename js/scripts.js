/*!
    * Start Bootstrap - Creative v6.0.1 (https://startbootstrap.com/themes/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-creative/blob/master/LICENSE)
    */

  
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);


  var projItem =document.getElementsByClassName("test");
  var imageActive=false;

  var resetProjs = function(){
    for(var i = 0; i < projItem.length; i++)
    {
      $(projItem[i]).hide();
    }
    imageActive=false;
  };

  $("#projectItems").hide();
  resetProjs();

    $(".imagePort").click(function(){
      var indexImage =$(".imagePort").index(this);
      var isvisible = $(projItem[indexImage]).is(':visible');


      //clicking the image again
      if(isvisible){
        imageActive=false;
        resetProjs();
        $("#projectItems").hide();
        $(this).attr("href","#project");
      }
      //no other projects visible and clicking
      else if(!isvisible && !imageActive){
        $(projItem[indexImage]).show();
        $("#projectItems").show();
        imageActive=true;
        $(this).attr("href","#portfolio");
      }
      //another project is visible and clicking
      else if(!isvisible && imageActive){
        resetProjs();
        $(".imagePort").attr("href","#project");
        $(projItem[indexImage]).show();
        imageActive=true;
        $(this).attr("href","#portfolio");
      }
    }); 
    

    $('.carousel').carousel({
      interval:false,
      pause:"hover"
    });




    var  magnificData = [
      [{
        src:"img/fullsize/4.jpg",
        title:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAA"
      },
      {
        src:"img/fullsize/1.jpg",
        title:"HEY YAY YAY YAYAY HEY YAY YAY I SAID HEY WHAT'S GOING ON????"
      },
      {
        src:"https://www.youtube.com/watch?v=WDY7uD4E8p4",
        title:"lol look at dis"
      },
      {
        src:"https://www.youtube.com/watch?v=0CBL3rS1ZKs",
        title: "ayylmao"
      }],

      [{
        src:"img/fullsize/4.jpg",
        title:"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAAAA AAAAAAAAAAAAAAAAAAAAA AAAAAAAA"
      },
      {
        src:"img/fullsize/1.jpg",
        title:"HEY YAY YAY YAYAY HEY YAY YAY I SAID HEY WHAT'S GOING ON????"
      },
      {
        src:"https://www.youtube.com/watch?v=WDY7uD4E8p4",
        title:"lol look at dis"
      },
      {
        src:"https://www.youtube.com/watch?v=0CBL3rS1ZKs",
        title: "ayylmao"
      }]


    ];

    var portfolioItem =document.getElementsByClassName("portfolio-box");

    // Magnific popup calls
$('.portfolio-box').magnificPopup({
  items: [
    {
      src: 'http://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Peter_%26_Paul_fortress_in_SPB_03.jpg/800px-Peter_%26_Paul_fortress_in_SPB_03.jpg',
      title: 'Peter & Paul fortress in SPB'
    },
    {
      src: 'https://www.youtube.com/watch?v=xdq1gVgvDkY',
      type: 'iframe' // this overrides default type
    },
    {
      src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
      type: 'inline'
    },
    {
      src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
      type: 'inline'
    },
    {
      src: '#my-popup', // CSS selector of an element on page that should be used as a popup
      type: 'inline'
    }
  ],
  gallery: {
    enabled: true
  },
  type: 'image' // this is a default type
 
});


$('.video').magnificPopup({
  type: 'iframe',
  
  
  iframe: {
     markup: '<div class="mfp-iframe-scaler">'+
                '<div class="mfp-close"></div>'+
                '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
                '<div class="mfp-title">Some caption</div>'+
              '</div>'
  },
  callbacks: {
    markupParse: function(template, values, item) {
     values.title = item.el.attr('title');
    }
  }
  
  
});


})(jQuery); // End of use strict
