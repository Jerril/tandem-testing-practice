$(document).ready(function(){

	// display search
	var searchBtn = document.querySelector(".searchBtn"),
		search = document.querySelector(".search");

	searchBtn.addEventListener('click', function(e,i){

		e.preventDefault();

		this.classList.toggle('show');

	});

	search.addEventListener('click', function(e,i){
		e.stopPropagation();
	});

	// owlcarousel
	$('.owl-carousel').owlCarousel({
	    animateOut:'fadeOut',
	    animateIn:'fadeIn',
	    loop: true,
	    margin: 10,
	    items: 1,
	    dots: true,
	    autoplay: true,
	    nav: true,
	    navText: ['<span class="icon-angle-left"></span>','<span class="icon-angle-right"></span>']
	})

	//menu icon
	var menu = document.querySelector('.icon-menu');

	menu.addEventListener('click', function(e){
		document.querySelector('.menuWrap').classList.toggle("open");
	});

	// dropdown
	var dMenu = document.querySelectorAll('.dropMenu');

	for (var i=0; i<dMenu.length; i++){
		dMenu[i].onclick=function(e){
			e.preventDefault();

			var target = this.getAttribute('data-target');

			var dd = document.querySelector(target);
			console.log(dd.classList.value);
			dd.classList.toggle('show');
		}
	}

	var ddLink  = document.querySelectorAll('.dropMenu > a'),
		ddAll = document.querySelectorAll('.dropMenu .dropdown');

		ddLink.forEach(function(){
			this.addEventListener('click', function(e){
				e.stopPropagation();
			});
		});

		ddAll.forEach(function(){
			this.addEventListener('click', function(e){
				e.stopPropagation();
			});
		});
});