$(function () {

	$('.menu__list-item').on('click', function () {
		let drop_down = $(this).children('.dropdown');
		let arrow = $(this).children('a').children('span');

		if (drop_down.attr('style') === 'display: none;') {
			$('.menu__list-item .dropdown').slideUp();
			$('.menu__list-item a span').css('transform', 'rotate(0deg)')
			arrow.css('transform', 'rotate(-180deg)')
			drop_down.slideDown();
		} else if (drop_down.slideDown()) {
			$('.menu__list-item a span').css('transform', 'rotate(0deg)')
			$('.menu__list-item .dropdown').slideUp();
			drop_down.slideUp();
		}
	});

	let header_nav = $('.header__navigation');

	$(document).mouseup(function (e) {
		if (!header_nav.is(e.target) && header_nav.has(e.target).length === 0) {
			$('.menu__list-item .dropdown').slideUp();
		}
	});

	$('.header__slider').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		fade: true,
		cssEase: 'linear',
		prevArrow: '<span class="slider__arrows slider__arrows-left material-icons">keyboard_arrow_left</span>',
		nextArrow: '<span class="slider__arrows slider__arrows-right material-icons">keyboard_arrow_right</span>',
	});


	$('.js-tab-trigger').click(function () {
		let id = $(this).attr('data-tab'),
			content = $('.js-tab-content[data-tab="' + id + '"]');

		$('.js-tab-trigger.active-tab').removeClass('active-tab');
		$(this).addClass('active-tab');

		$('.js-tab-content.active-tab').removeClass('active-tab');
		content.addClass('active-tab');
	});

	$('.main__posts-post:eq(0)').addClass('primary-post');
	$('.main__posts-post:eq(1)').addClass('row-post');
	$('.main__posts-post:eq(2)').addClass('row-post');
	$('.main__posts-post:eq(3)').addClass('row-post');
	$('.main__posts-post:eq(4)').addClass('column-post--small');
	$('.main__posts-post:eq(5)').addClass('column-post--small');
	$('.main__posts-post:eq(6)').addClass('column-post--small');
	$('.main__posts-post:eq(-2)').addClass('column-post--big');
	$('.main__posts-post:eq(-1)').addClass('column-post--big');
});