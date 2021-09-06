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
        src:"img/cottage/cottage2.png",
        title:"Jaquie Lawson's Cottage is an app that allows users to play various games to earn money in order to clean up and decorate their cottage.  Assisted with QA. <br><a target='_blank' href='https://www.jacquielawson.com/cottage?jl207'>Link to app details.</a>"
      },
      {
        src:"img/cottage/cottage1.png",
        title:"Account creation page. Formated the page based on specifications given in Adobe Animate files by product owners. "
      },
      {
        src:"img/cottage/cottage3.png",
        title:"Ported over reusable assets from previous ecards and games. Programmed tutorials and new features for the card based games. Implamented the autoclick and helped with the autowin function for Solitaire and Tripeaks."
      },
       {
        src:"img/cottage/cottage4.png",
        title:""
      },
       {
        src:"img/cottage/cottage5.png",
        title:""
      },
       {
        src:"img/cottage/cottage6.png",
        title:"Helped work on programming the background ambient animations."
      }
     ],
      [{
        src:"img/val/val1.png",
        title:"Blue Mountain’s interactive 2019 Valentine's card. Was the primary coder and contact point for the project. Communicated directly with artists in order to get the specifications and assets for the card. <br><a target='_blank' href='https://www.americangreetings.com/detail/ecards/valentines-day/beauty-sweetness-and-love-ecard-interactive/pn/prod3506709'>Link to card</a>"
      },
      {
        src:"img/val/val2.png",
        title:"Main game scene."
      },
      {
        src:"img/val/val3.png",
        title:"Hint effect. Zooms in on area around difference."
      }],

      [{
        src:"img/cmas_2019/cm0.png",
        title:"Interactive card made for Christmas 2019. Main programmer on project. Worked with the artist to put in animations and various art assets. Tasked with optimization for older devices and handling particles. Made using Typscript with Greensock, PIXIJS, and inhouse libraries. <br><a target='_blank' href='https://www.bluemountain.com/ecards/christmas/the-gift-of-christmas-personalize/card-3491452'>Link to card</a>"
      },
      {
        src:"img/cmas_2019/cm1.png",
        title:"Ending custom name screen"
      },
      {
        src:"img/cmas_2019/cm2.png",
        title:"Splash screen when exitting fullscreen."
      }],

      [{
        src:"img/jlnotecard/jlvid1.png",
        title:"<br><a target='_blank' href='https://www.jacquielawson.com/sendcard/preview?cont=1&hdn=0&fldCard=3506977&path=393919&pmode=init'>Link to game</a>"
      },
       {
        src:"img/jlnotecard/jlvid2.png",
        title:"text"
      },
       {
        src:"img/jlnotecard/jlvid3.png",
        title:"<br><a target='_blank'https://www.jacquielawson.com/sendcard/preview?cont=1&hdn=0&fldCard=3506979&path=393919&pmode=init'>Link to game</a>"
      },
       {
        src:"img/jlnotecard/jlvid4.png",
        title:"text"
      }
     ],
            
      [{
        src:"img/ar/ar1.png",
        title:"AR application made for the 2018 American Greetings Interactive Intern Hackday. Project won first place. The goal of the application was to integrate greeting cards in the virtual space. Was the programmer on the team. "
      },
      {
        src:"img/ar/ar2.png",
        title:"App could detect if two or more certain cards were on the screen and based on the cards they could interact with each other. This was achieved by detecting which patterns were present and if the two had some sort of connection."
      }, 
      {
        src:"img/ar/ar3.png",
        title:""
      }],           
      [{
        src:"img/levelproj/portal2.png",
        title:"A collection of various maps done during my free time and published to the game’s respective workshop. Jumping around the pit is a Portal 2 level originally made for a class but continuously worked on after the end of the class until it was published. <br><a target='_blank' href='https://youtu.be/ChireDV6Xp0'>Link to video of the map</a>"
      },
        {
        src:"img/levelproj/portal1.png",
        title:""
      },
      {
        src:"img/levelproj/bs1.png",
        title:"My first officially published Beatsaber map. Published the map to the BeatSaver mapping site. Song went through several iterations  <br><a target='_blank' href='https://youtu.be/vlGm93O0fH0'>Link to video of the map</a>"
      },
      {
        src:"img/levelproj/bs2.png",
        title:""
      }]

    ];

    // Magnific popup calls

    $('.portfolio-box').each(function(){

      var indexImage =$(".portfolio-box").index(this);
        $(this).magnificPopup({
          items: magnificData[$(".portfolio-box").index(this)],
          gallery: {
            enabled: true
          },
          type: 'image', // this is a default type
        });
    });

    function removeFocus() { 
      $(".portfolio-box").index(this).blur(); 
  } 



})(jQuery); // End of use strict
