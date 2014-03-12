$(document).ready(function(){
	// Smooth scrolling to internal anchors
	$('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
	        || location.hostname == this.hostname) {

	        var target = $(this.hash);
	        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	           if (target.length) {
	             $('html,body').animate({
	                 scrollTop: target.offset().top
	            }, 600);
	            return false;
	        }
	    }
	});

	// ScrollSpy automatically updates nav targets based on scroll position
	// http://twitter.github.com/bootstrap/javascript.html#scrollspy
	$('#nav').scrollspy();

	// SelectNav.js is a JavaScript plugin that lets you convert your website navigation into a select drop-down menu. Used together with media queries it helps you to create a space saving, responsive navigation for small screen devices.
	// https://github.com/lukaszfiszer/selectnav.js
	selectnav('nav');

	// Assign classes to table rows and columns
	$('table').each(function () {
		$(this).find('tr:odd').addClass('odd');
		$(this).find('tr:even').addClass('even');
	});

	$('table tr').each(function () {
		$(this).find('td:eq(0)').addClass('column-first');;
		$(this).find('td:eq(1)').addClass('column-second');;
	});
});