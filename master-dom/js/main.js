$(function () {
	$('.burger__menu').on('click', function () {
		$('.header__menu').slideToggle();
	});

	$('.top-carousel').slick({
		infinite: true,
		fade: true,
		autoplay: true,
		autoplaySpeed: 2000,
		dots: true,
		nextArrow: '<span class="carousel-arrows next-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-8" role="img" height="13px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512"><path fill="currentColor" d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"></path></svg></span>',
		prevArrow: '<span class="carousel-arrows prev-arrow"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-8" role="img" xmlns="http://www.w3.org/2000/svg" height="13px" viewBox="0 0 256 512"><path fill="currentColor" d="M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"></path></svg></span>',
	});


	$('.breadcrumbs__item:last a').addClass('active');

	$('.projects__desk-item--btn').hover(function () {
		let prevImg = $(this).prev('.projects__desk-item--image');
		prevImg.children().css('transform', 'scale(1.14)')
	});

	$('.projects__desk-item--btn').mouseleave(function () {
		let prevImg = $(this).prev('.projects__desk-item--image');
		prevImg.children().css('transform', 'scale(1)');
	})

	let delay = 1000;

	$('.totop__btn').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});

	let pageNumFirst = $('.pagination__page:first')
	let pageNumLast = $('.pagination__page:last')

	if (pageNumFirst.hasClass('active')) {
		$('.prev-page a').addClass('deactive')
	}

	if (pageNumLast.hasClass('active')) {
		$('.next-page a').addClass('deactive')
	}


	$('.more-text').click(function () {
		let text = $(this).parent();
		if (!($(this).hasClass('active'))) {
			text.addClass('show');
			$(this).addClass('active');
		} else {
			text.removeClass('show');
			$(this).removeClass('active');

		}
	});

	$('#getProjects').on('click', function () {
		$('#popupEmail').addClass('visible');
	});

	$('#next-btn').on('click', function () {
		$('#popupEmail').removeClass('visible');
	});

	$('.popup__close').on('click', function () {
		$('#popupEmail').removeClass('visible');
	});

	$('#next-btn').on('click', function () {
		$('#popupSucces').addClass('visible');
	});

	$('#succes-btn').on('click', function () {
		$('#popupSucces').removeClass('visible');
	});

	$('.popup').on('click', function (e) {
		if ($(e.target).closest('.popup__content').length == 0) {
			$(this).removeClass('visible')
		}
	});

});


