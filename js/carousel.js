function init() {
	$(function() {
		$('#myCarousel').carousel({
			interval: 8000,
			pause: 'false'
		});
		$('#playButton').click(function() {
			$('#myCarousel').carousel('cycle');
		});
		$('#pauseButton').click(function() {
			$('#myCarousel').carousel('pause');
		});
	});
}
init();
