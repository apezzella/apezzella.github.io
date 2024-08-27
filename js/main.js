
function main() {

(function () {
   'use strict';

   /* ==============================================
  	Testimonial Slider
  	=============================================== */ 

  	$('a.page-scroll').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 900);
            return false;
          }
        }
      });




    /*====================================
    Show Menu on Book
    ======================================*/
    $(window).bind('scroll', function() {
        var navHeight = $(window).height() - 1500;
        if ($(window).scrollTop() > navHeight) {
            $('.navbar-default').addClass('on');
        } else {
            $('.navbar-default').removeClass('on');
        }
    });

    $('body').scrollspy({ 
        target: '.navbar-default',
       // offset: 80
        offset: 50
    })



  	$(document).ready(function() {
  	  $("#awards").owlCarousel({
  	 
		navigation : false, // Show next and prev buttons
		nav:false,
		loop:true,
		slideSpeed : 300,
		paginationSpeed : 400,
		autoHeight : true,
		itemsCustom : [
					[0, 1],
					[450, 2],
					[600, 2],
					[700, 2],
					[1000, 4],
					[1200, 4],
					[1400, 4],
					[1600, 4]
				  ],
  	  });

  	  $("#clients").owlCarousel({
 
			loop:true,
			margin:10,
			//autoWidth:true,
			responsiveClass:true,
			responsive:{
				0:{
					items:2,
					nav:false,
					loop:true
				},
				600:{
					items:4,
					nav:false,
					loop:true
				},
				1000:{
					items:5,
					nav:false,
					loop:true
				}
			}
			
//		navigation : false, // Show next and prev buttons
//		nav:true,
//		loop:true,	 
//		slideSpeed : 300,
//		paginationSpeed : 400,
//		autoHeight : true,
//		itemsCustom : [
//					[0, 1],
//					[450, 2],
//					[600, 2],
//					[700, 2],
//					[1000, 4],
//					[1200, 5],
//					[1400, 5],
//					[1600, 5]
//				  ],
  	  });

		$("#testimonial").owlCarousel({
			loop:true,
			margin:10,
			responsiveClass:true,
			responsive:{
				0:{
					items:1,
					nav:false,
					loop:true
				},
				600:{
					items:1,
					nav:false,
					loop:true
				},
				1000:{
					items:1,
					nav:false,
					loop:true
				}
			}



//			navigation : false, // Show next and prev buttons
//			nav:true,
//			loop:true,
//			slideSpeed : 300,
//			paginationSpeed : 400,
//			singleItem:true
        });



		$("#work").owlCarousel({
			loop:true,
			//margin:10,
			navigation : false, // Show next and prev buttons
			nav:true,
			lazyLoad:true,
			
			center:true,
	        singleItem : true,
	        pagination: true,
			items: 1,
			//autoWidth:true,
			
			//responsiveClass:true,
//			responsive:{
//				0:{
//					items:1,
//					nav:true,
//					loop:true
//				},
//				600:{
//					items:1,
//					nav:true,
//					loop:true
//				},
//				1000:{
//					items:1,
//					nav:true,
//					loop:true
//				}
//			}
        });


  	});






  	/*====================================
    Portfolio Isotope Filter
    ======================================*/
    $(window).load(function() {
        var $container = $('#lightbox');
        $container.isotope({
            filter: '*',
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        });
        $('.cat a').click(function() {
            $('.cat .active').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({
                filter: selector,
                animationOptions: {
                    duration: 750,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });

    });



}());


}
main();




/*====================================
 Slide-in element effect
======================================*/


document.addEventListener("DOMContentLoaded", function () {
	const elements = document.querySelectorAll('.hidden');

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.classList.remove('hidden');
				observer.unobserve(entry.target); // Stop observing once the element is visible
			}
		});
	}, { threshold: 0.1 });

	elements.forEach(element => {
		observer.observe(element);
	});
});

