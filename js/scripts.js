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
        src:"img/bday_gd/gd0.png",
        title:"<br><a target='_blank' href='https://www.bluemountain.com/ecards/birthday/beautiful-birthday-garden-interactive/card-3509034'>Link to card</a>"
      },
      {
        src:"img/bday_gd/gd1.png",
        title:"e"
      },
      {
        src:"img/bday_gd/gd2.png",
        title:"e"
      },
      {
        src:"img/bday_gd/gd3.png",
        title:"e"
      }],
      [{
        src:"img/sd_md/md0.png",
        title:"Spot the difference game made for Mother's day 2020. Collaberated programming with one other coworker. Worked on updating programming framework, particle effects, implamenting audio, and putting in new art assets. <br><a target='_blank' href='https://www.bluemountain.com/ecards/mothers-day/mothers-day-spot-the-differences-game/card-3506711'>Link to game</a>"
      },
      {
        src:"img/sd_md/md1.png",
        title:"Main game scene"
      },
      {
        src:"img/sd_md/md2.png",
        title:"Hint effect. Zooms in on area around difference."
      },
      {
        src:"img/sd_md/md3.png",
        title:"e"
      }],

      [{
        src:"img/cmas_2019/cm0.png",
        title:"<br><a target='_blank' href='https://www.bluemountain.com/ecards/christmas/the-gift-of-christmas-personalize/card-3491452'>Link to card</a>"
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
        title:"<br><a target='_blank' href='https://www.bluemountain.com/ecards/halloween/halloween-hidden-objects-game/card-3501609'>Link to game</a>"
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
        src:"img/kts/kts0.png",
        title:""
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
        title:"<br><a target='_blank' href='https://killthestreamer.itch.io/kill-the-streamer'>Link to game</a>"
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
