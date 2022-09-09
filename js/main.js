(function ($) {
    "use strict";
    $(document).on('ready', function () {

        /* Screenshot Swiper Active
        =============================*/	
	    var swiper = new Swiper('.swiper-container', {
		  effect: 'coverflow',
		  grabCursor: true,
		  centeredSlides: true,
		  slidesPerView: 'auto',
		  coverflowEffect: {
			rotate: 50,
			stretch: 0,
			depth: 100,
			modifier: 1,
			slideShadows : true,
		  },
		  autoplay: {
			delay: 5000,
		  },
		  pagination: {
			el: '.swiper-pagination',
		  },
		});
	
        /* Post Slider Active
        =============================*/
        $('.post-slider').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: true,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3,
                    nav: false,
                    margin: 0,
                },
                168: {
                    margin: 0,
                    items: 1
                },
                200: {
                    items: 1
                }
            }
        });
        /* testimonials Slider Active
        =============================*/
        $('.testimonials1').owlCarousel({
            loop: true,
            margin: 0,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 1
                },
                1170: {
                    items: 1
                }
            }
        });


        /* testimonials Slider Active
        =============================*/
        $('.features').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });

        /* testimonials Slider Active
        =============================*/
        $('.clients').owlCarousel({
            loop: true,
            margin: 0,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 3,
                },
                768: {
                    items: 3
                },
                1170: {
                    items: 3
                }
            }
        });


        /* testimonials Slider Active
        =============================*/
        $('.related-post').owlCarousel({
            loop: true,
            margin: 30,
            responsiveClass: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 4000,
            smartSpeed: 1000,
            navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right" ></i>'],
            responsive: {
                0: {
                    items: 1,
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 2
                }
            }
        });


        /* Counter-JS */
        $('.count').counterUp({
            delay: 10,
            time: 3000
        });

        $('.video-popup').magnificPopup({
            type: 'iframe',
        });
        
        /* Slick Nav Acitve */
        $('.primary-menu ul').slicknav();
        $('.slicknav_menu').prepend('<a href="index.html"><img src="images/logo.png" alt=""></a>');

        /* Scroll to top */
        $.scrollUp({
            scrollText: '<i class="fa fa-angle-up"></i>',
            easingType: 'linear',
            scrollSpeed: 900,
            animation: 'fade'
        });
        
        
        $('.single-service.box-1').prepend('<span class="line"></span><span class="line"></span><span class="line"></span><span class="line"></span>');
        
        /*-- Accordion-List --*/
        $('.accordion-content.in').siblings().addClass('active');
        $('.accordion').find('.accordion-title').on('click', function () {
            $('.accordion').removeClass('active');
            $(this).toggleClass('active');
            //Expand or collapse this panel
            $(this).next().slideToggle('fast');
            //Hide the other panels
            $(".accordion-content").not($(this).next()).slideUp('fast');
        });
        
        
        
        // Select all links with hashes
        $('.mainmenu-area a[href*="#"]')
          // Remove links that don't actually link to anything
          .not('[href="#"]')
          .not('[href="#0"]')
          .on('click',function(event) {
            // On-page links
            if (
              location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
              && 
              location.hostname == this.hostname
            ) {
              // Figure out element to scroll to
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
              // Does a scroll target exist?
              if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                  scrollTop: target.offset().top
                }, 1000, function() {
                  // Callback after animation
                  // Must change focus!
                  var $target = $(target);
                  $target.focus();
                  if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                  } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                  };
                });
              }
            }
          });
        
        

    });
    /* Preloader Js
    ===================*/
    $(window).on("load", function () {
        
        $('.preloader').fadeOut(500);

    });
})(jQuery);