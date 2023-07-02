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
        title:"Assisted with the creation of the Jacquie Lawson Country Cottage App. Users of the application play various games to earn in-game money used to clean up their cottage, buy decorations, find hidden ambient animations and unlock various games and activities. Developed ui, game tutorials and card game features in Unity. <br> For more information on the app, visit <a target='_blank' href='https://www.jacquielawson.com/cottage?jl207'>the page here.</a>"
      },
      {
        src:"img/cottage/cottage1.png",
        title:"Account creation page. Formatted the page based on specifications given in Adobe Animate files by product owners. "
      },
      {
        src:"img/cottage/cottage3.png",
        title:"Ported over reusable assets from previous ecards and games. Programmed tutorials and new features for the playing card based games.  Implemented the autoclick and helped with the autowin function for Solitaire and Tripeaks."
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
        title:"Worked on programming the background ambient animations."
      }
     ],
      [{
        src:"img/val/val1.png",
        title:"Blue Mountain’s interactive 2019 Valentine's card. Was the primary coder and contact point for the project. Communicated directly with artists to get the specifications and assets for the card. This is the intro scene where the user has to click  butterflies to reveal the animation. <br><a target='_blank' href='https://www.americangreetings.com/detail/ecards/valentines-day/beauty-sweetness-and-love-ecard-interactive/pn/prod3506709'>Link to card</a>"
      },
      {
        src:"img/val/val2.png",
        title:"Card animation that plays when the mailbox is clicked."
      },
      {
        src:"img/val/val3.png",
        title:"Valentine's day ending scene."
      }],

      [{
        src:"img/cmas_2019/cm0.png",
        title:"Interactive card made for Christmas 2019. Main programmer on project. Worked with the artist to put in the animations and assets. Tasked with optimization for older devices and handling particles. Made using Typescript with Greensock, PIXIJS and in house libraries. <br><a target='_blank' href='https://www.bluemountain.com/ecards/christmas/the-gift-of-christmas-personalize/card-3491452'>Link to card</a>"
      },
      {
        src:"img/cmas_2019/cm1.png",
        title:"Ending of card displaying the reciever's name."
      },
      {
        src:"img/cmas_2019/cm2.png",
        title:"Splash screen when exiting fullscreen."
      }],

      [{
        src:"img/jlnotecard/jlvid1.png",
        title:"Jacquie Lawson’s videocards are a collection of animated ecards made for different holidays and situations. Wrote detailed step-by-step tutorials used by non-tech related positions, interns and future hires.<br><a target='_blank' href='https://www.jacquielawson.com/sendcard/preview?cont=1&hdn=0&fldCard=3506977&path=393919&pmode=init'>Link to card</a>"
      },
       {
        src:"img/jlnotecard/jlvid2.png",
        title:"Scene at the end of the card, which displays  information about the topic of the video."
      },
       {
        src:"img/jlnotecard/jlvid3.png",
        title:"Saint Patrick's day JL video card.<br><a target='_blank' href='https://www.jacquielawson.com/sendcard/preview?cont=1&hdn=0&fldCard=3506979&path=393919&pmode=init'>Link to card</a>"
      },
       {
        src:"img/jlnotecard/jlvid4.png",
        title:"End of JL video card from the sender's side."
      }
     ],
            
      [{
        src:"img/ar/ar1.png",
        title:"Programmed Unity AR application for 2018 American Greetings Interactive Intern Hackday. Application won first place. Application integrated greeting cards in the virtual space."
      },
      {
        src:"img/ar/ar2.png",
        title:"Programmed AR application to detect certain patterns on the user's screen. Interactions changed based on the detected pattern."
      }],           
      [{
        src:"img/levelproj/portal2.PNG",
        title:"A collection of various levels created during my free time. Some of the maps have been published to each game’s respective workshop. <br><a target='_blank' href='https://youtu.be/ChireDV6Xp0'>Link to video of the map</a>"
      },
        {
        src:"img/levelproj/portal1.PNG",
        title:"Overview of the Portal 2's level."
            
      },
      {
        src:"img/levelproj/bs1.PNG",
        title:"First published Beat Saber map - Charlie's Inferno by That Handsome Devil. This was the 3rd map I finnished. Published the map to BeatSaver and to the offical Beat Saber discord server.<br><a target='_blank' href='https://youtu.be/vlGm93O0fH0'>Link to video of the map</a>"
      },
      {
        src:"img/levelproj/bs2.PNG",
        title:"Second half of the Beat Saber map and the song."
      },
      {
        src:"img/levelproj/randyphoto.PNG",
        title:"This is the 2nd ever map I made to completion. Unfortunately, the first map got wiped from my hard-drive. This map was made for friends and was not published.<br><a target='_blank' href='https://youtu.be/4P3ZgBqskxo'>Link to video of the map</a>"
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
