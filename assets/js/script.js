function doStuff (callback) {

  	// Sidebar
  
	var menu = document.querySelector(".menu-icon")
	var overlay = document.querySelector(".overlay")
	var contact = document.querySelector(".contact")
	
	menu.addEventListener("click", function() {
		this.classList.toggle("menu-color")
		overlay.classList.toggle("slide")
		contact.classList.toggle("slide")
	})
	
	// Swiper
	
	const swiper = new Swiper('.swiper', {
		loop: true,
		
		pagination: {
			el: '.swiper-pagination',
			type: 'fraction',
		},
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	})
	
	// Cursor
	
	window.addEventListener("load", init);
	
	function init() {
		const img = document.querySelector(".swiper img");
		const {width} = img.getBoundingClientRect();
		const halfImgWidth = width / 2;
		
		img.addEventListener("mousemove", function(e) {
			const xPos = e.pageX - img.offsetLeft;
			this.classList.remove("cursor-prev", "cursor-next");
			if (xPos > halfImgWidth) {
				this.classList.add("swiper-button-prev");
			} else {
				this.classList.add("swiper-button-next");
			}
		});
	}
  
	callback();
}

doStuff(function () {
	document.body.className = 'visible';
});