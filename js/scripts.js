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


    var  magnificData = [
      [{
        src:"img/sd_md/md0.png",
        title:"e"
      },
      {
        src:"img/sd_md/md1.png",
        title:"e"
      },
      {
        src:"img/sd_md/md2.png",
        title:"e"
      },
      {
        src:"img/sd_md/md3.png",
        title:"e"
      }],

      [{
        src:"img/cmas_2019/cm0.png",
        title:"e"
      },
      {
        src:"img/cmas_2019/cm1.png",
        title:"e"
      },
      {
        src:"img/cmas_2019/cm2.png",
        title:"e"
      }],

      [{
        src:"img/halloween/h0.png",
        title:"e"
      },
      {
        src:"img/halloween/h1.png",
        title:"e"
      },
      {
        src:"img/halloween/h2.png",
        title:"e"
      }],

      [{
        src:"img/md_garden/md0.png",
        title:"e"
      },
      {
        src:"img/md_garden/md1.png",
        title:"e"
      },
      {
        src:"img/md_garden/md2.png",
        title:"e"
      },
      {
        src:"img/md_garden/md3.png",
        title:"e"
      }],

            
      [{
        src:"img/kts/kts0.png",
        title:"e"
      },
      {
        src:"img/kts/kts1.png",
        title:"e"
      },
      {
        src:"img/kts/kts2.png",
        title:"e"
      },
      {
        src:"img/kts/kts3.png",
        title:"e"
      }],

            
      [{
        src:"img/kts/kts0.png",
        title:"e"
      },
      {
        src:"img/kts/kts1.png",
        title:"e"
      },
      {
        src:"img/kts/kts2.png",
        title:"e"
      },
      {
        src:"img/kts/kts3.png",
        title:"e"
      }],

    ];

    // Magnific popup calls

    $('.portfolio-box').each(function(){

      var indexImage =$(".portfolio-box").index(this);
      console.log(indexImage);
        $(this).magnificPopup({
          items: magnificData[$(".portfolio-box").index(this)],
          gallery: {
            enabled: true
          },
          type: 'image', // this is a default type
          // callbacks: {
    
          //   buildControls: function() {
          //     // re-appends controls inside the main container
          //     this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
          //   }
            
          // }
        });
    });




})(jQuery); // End of use strict
