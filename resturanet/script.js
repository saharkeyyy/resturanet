docSlider.init();
var hideItems = 0;
function hideItemF() {
	$('.nkh-grid-item').each(function(){
		$('.nkh-grid-item-img-replacement', this).fadeOut(250, function(){
			$(this).remove();
		});
	});
}

setInterval(Date)