$(function () {

	let burger_btn = $('.header__burger-menu');
	let close_btn = $('.header__menu-close');
	let menu = $('.header__menu-navigation');
	let to_top = $('.to-top');

	burger_btn.on('click', function () {
		menu.addClass('active');
		$('body').css('overflow-y', 'hidden')
	});

	close_btn.on('click', function () {
		menu.removeClass('active');
		$('body').css('overflow-y', 'visible')
	});

	let delay = 1000;

	to_top.click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
		/* Плавная прокрутка наверх */
		$('body, html').animate({
			scrollTop: 0
		}, delay);
	});

});