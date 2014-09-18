// jQuery
var $ = require('jquery');

// jQuery Ready
$(function () {
	// Window resizing handler
	(function () {
		var win = $(window),
			body = $('body'),
			bg = $('#bg');

		$('#bg').on('load', function () {

			// Set BG sizes
			win.resize(function () {
				// Full screen BG
				bg.css((win.width() / win.height()) > (bg.width() / bg.height()) ? {width: '100%', height: 'auto'} : {height: '100%', width: 'auto'});
			}).resize();

			var engine = new RainyDay({
				image: document.getElementById('bg'),
				parentElement: document.getElementById('rain'),
				blur: 0,
				opacity: 1
			});

			// Start the rain
			engine.rain([
				[1, 0, 25],	// add 20 drops of size 1...
				[3, 6, 1]	// ... and 1 drop of size from 3 - 6 ...
			],100);			// ... every 100ms
		});


	}());
});