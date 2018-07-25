;(function () {
	
	'use strict';

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var mobileMenuOutsideClick = function() {

		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {

	    	if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
	    
	    	
	    }
		});

	};


	var offcanvasMenu = function() {

		$('#page').prepend('<div id="fh5co-offcanvas" />');
		$('#page').prepend('<a href="#" class="js-fh5co-nav-toggle fh5co-nav-toggle fh5co-nav-white"><i></i></a>');
		var clone1 = $('.menu-1 > ul').clone();
		$('#fh5co-offcanvas').append(clone1);
		var clone2 = $('.menu-2 > ul').clone();
		$('#fh5co-offcanvas').append(clone2);

		$('#fh5co-offcanvas .has-dropdown').addClass('offcanvas-has-dropdown');
		$('#fh5co-offcanvas')
			.find('li')
			.removeClass('has-dropdown');

		// Hover dropdown menu on mobile
		$('.offcanvas-has-dropdown').mouseenter(function(){
			var $this = $(this);

			$this
				.addClass('active')
				.find('ul')
				.slideDown(500, 'easeOutExpo');				
		}).mouseleave(function(){

			var $this = $(this);
			$this
				.removeClass('active')
				.find('ul')
				.slideUp(500, 'easeOutExpo');				
		});


		$(window).resize(function(){

			if ( $('body').hasClass('offcanvas') ) {

    			$('body').removeClass('offcanvas');
    			$('.js-fh5co-nav-toggle').removeClass('active');
				
	    	}
		});
	};


	var burgerMenu = function() {

		$('body').on('click', '.js-fh5co-nav-toggle', function(event){
			var $this = $(this);


			if ( $('body').hasClass('overflow offcanvas') ) {
				$('body').removeClass('overflow offcanvas');
			} else {
				$('body').addClass('overflow offcanvas');
			}
			$this.toggleClass('active');
			event.preventDefault();

		});
	};



	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated-fast') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn animated-fast');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft animated-fast');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight animated-fast');
							} else {
								el.addClass('fadeInUp animated-fast');
							}

							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '85%' } );
	};


	var dropdown = function() {

		$('.has-dropdown').mouseenter(function(){

			var $this = $(this);
			$this
				.find('.dropdown')
				.css('display', 'block')
				.addClass('animated-fast fadeInUpMenu');

		}).mouseleave(function(){
			var $this = $(this);

			$this
				.find('.dropdown')
				.css('display', 'none')
				.removeClass('animated-fast fadeInUpMenu');
		});

	};


	var goToTop = function() {

		$('.js-gotop').on('click', function(event){
			
			event.preventDefault();

			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});

		$(window).scroll(function(){

			var $win = $(window);
			if ($win.scrollTop() > 200) {
				$('.js-top').addClass('active');
			} else {
				$('.js-top').removeClass('active');
			}

		});
	
	};


	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};

	var counter = function() {
		$('.js-counter').countTo({
			 formatter: function (value, options) {
	      return value.toFixed(options.decimals);
	    },
		});
	};

	var counterWayPoint = function() {
		if ($('#fh5co-counter').length > 0 ) {
			$('#fh5co-counter').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( counter , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}
	};

	var parallax = function() {

		if ( !isMobile.any() ) {
			$(window).stellar({
				horizontalScrolling: false,
				hideDistantElements: false, 
				responsive: true

			});
		}
	};

	var testimonialCarousel = function(){
		
		var owl = $('.owl-carousel-fullwidth');
		owl.owlCarousel({
			items: 1,
			loop: true,
			margin: 0,
			nav: false,
			dots: true,
			smartSpeed: 800,
			autoHeight: true
		});

	};

	var tabs = function() {

		// Auto adjust height
		$('.fh5co-tab-content-wrap').css('height', 0);
		var autoHeight = function() {

			setTimeout(function(){

				var tabContentWrap = $('.fh5co-tab-content-wrap'),
					tabHeight = $('.fh5co-tab-nav').outerHeight(),
					formActiveHeight = $('.tab-content.active').outerHeight(),
					totalHeight = parseInt(tabHeight + formActiveHeight + 90);

					tabContentWrap.css('height', totalHeight );

				$(window).resize(function(){
					var tabContentWrap = $('.fh5co-tab-content-wrap'),
						tabHeight = $('.fh5co-tab-nav').outerHeight(),
						formActiveHeight = $('.tab-content.active').outerHeight(),
						totalHeight = parseInt(tabHeight + formActiveHeight + 90);

						tabContentWrap.css('height', totalHeight );
				});

			}, 100);
			
		};

		autoHeight();


		// Click tab menu
		$('.fh5co-tab-nav a').on('click', function(event){
			
			var $this = $(this),
				tab = $this.data('tab');

			$('.tab-content')
				.addClass('animated-fast fadeOutDown');

			$('.fh5co-tab-nav li').removeClass('active');
			
			$this
				.closest('li')
					.addClass('active')

			$this
				.closest('.fh5co-tabs')
					.find('.tab-content[data-tab-content="'+tab+'"]')
					.removeClass('animated-fast fadeOutDown')
					.addClass('animated-fast active fadeIn');


			autoHeight();
			event.preventDefault();

		}); 
	};

	var customContent = function() {
		console.log('definindo dados institucionais');
		
		//INNER HTML
		
		$("#teste").load('teste.html', function(data){
			console.log(data);
		});
		
		//CONTATOS
		var telefone = '61 98271 2088';
		var email = 'studiomovimentoearte@gmail.com';
		
		$("#telefone").attr('href','tel:'+telefone.replace(' ','').replace(' ',''));
		$("#telefone").text(telefone);
		
		$("#email").attr('href','mailto:'+email);
		$("#email").text(email);
		
		//MIDIAS
		
		var linkYoutube = 'https://youtu.be/7uYjfjtvh54';
		var linkFacebook = 'https://pt-br.facebook.com/studiomovimentoearte';
		var linkInstagram = 'https://www.instagram.com/p/BlSrSeNhPJi/?utm_source=ig_share_sheet&igshid=aqleex4a5mso';
		
		$(".linkYoutube").attr('href', linkYoutube);		
		$(".linkFacebook").attr('href', linkFacebook);
		$(".linkInstagram").attr('href', linkInstagram);
		
		//MODALIDADES
		
		var modalidades1 = ['Cardio','Body Building','Yoga','Boxing','Running'];
		var modalidades2 = ['Boxing','Martial Arts','Karate','Kungfu','Basketball'];
		var modalidades3 = ['Badminton','Teams','Advertise','API','Babys'];
		
		for(var i = 0; i < modalidades1.length; i++){
			$("#modalidade1 ul").append('<li>'+modalidades1[i]+'</li>');
		}
		
		for(var i = 0; i < modalidades2.length; i++){
			$("#modalidade2 ul").append('<li>'+modalidades2[i]+'</li>');
		}
		
		for(var i = 0; i < modalidades3.length; i++){
			$("#modalidade3 ul").append('<li>'+modalidades3[i]+'</li>');
		}
		
		//TEXTOS
		
		var textSlogan = 'Nosso corpo se move, e nossa alma dança';
		var textChamado = 'Marque sua aula experimental!';
		var textTrainers = 'Nossa equipe altamente capacitada oferece os mais modernos métodos e modalidades para proporcionar aos seus alunos um melhor rendimento e desempenho a cada atividade!';
		var textFooterMsg = '"A dança não é movimento súbito gesto musical, é concentração, num momento, da humana graça natural."';
		var textFooterAutor = 'Carlos Drummond de Andrade';
		var textCopyright = '&copy; '+(new Date).getFullYear()+' - All Rights Reserved.';
		
		//SHOW PART
		
		var showService = true;
		var showTrainer = true;
		var showAgenda = false;
		
		var showPricing = true;
		
		var showGallery = false;
		
		var showTestimonial = false;
		
		var showStarted = true;
		
		var showBlog = true;

		
		

		
		$('.textSlogan').html(textSlogan);
		$('.textChamado').html(textChamado);
		$('.textTrainers').html(textTrainers);
		$('.textFooterMsg').html(textFooterMsg);
		$('.textFooterAutor').html(textFooterAutor);
		$('.textCopyright').html(textCopyright);
		
		
		if(!showService){
			$('#fh5co-services').css('display', 'none');	
		}

		if(!showTrainer)
			$('#fh5co-trainer').css('display', 'none');
		
		

		if(!showAgenda)
			$('#fh5co-schedule').css('display', 'none');

		if(!showBlog)
			$('#fh5co-blog').css('display', 'none');		

		if(!showTestimonial)
			$('#fh5co-testimonial').css('display', 'none');

		if(!showGallery)
			$('#fh5co-gallery').css('display', 'none');

		if(!showPricing)
			$('#fh5co-pricing').css('display', 'none');

		if(!showStarted)
			$('#fh5co-started').css('display', 'none');
		
	};
	
	$(function(){
		mobileMenuOutsideClick();
		offcanvasMenu();
		burgerMenu();
		contentWayPoint();
		dropdown();
		goToTop();
		loaderPage();
		counterWayPoint();
		parallax();
		testimonialCarousel();
		tabs();
		customContent();
	});
	
       



}());