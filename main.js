$(document).ready(function() {
	$('#play-video').on('click', function(ev) {
		this.style.display = 'none';
		thevid = document.getElementById('video');
		thevid.style.display = 'block';
		$("#video")[0].src += "?autoplay=1";
		ev.preventDefault();

	});
});
