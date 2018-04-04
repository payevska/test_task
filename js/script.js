$(document).ready(function(){
	$('.next').click(function() {
		var currentImage = $( '.img.curry' );
		var currentImageIndex = $( '.img.curry' ).index();
		var nextImageIndex = currentImageIndex + 1;
		var nextImage = $( '.img' ).eq(nextImageIndex);

		$( '.img' ).eq(currentImageIndex).hide();
		$( '.img' ).eq(currentImageIndex).removeClass('curry');

		if(nextImageIndex == ($( '.img:last' ).index() + 1)){
			$( '.img' ).eq(0).css('display', 'flex');
			$( '.img' ).eq(0).addClass('curry');
		} else {
			$( '.img' ).eq(nextImageIndex).css('display', 'flex');
			nextImage.addClass('curry');
		}
	});

	$('.prev').click(function() {
		var currentImage = $( '.img.curry' );
		var currentImageIndex = $( '.img.curry' ).index();
		var prevImageIndex = currentImageIndex - 1;
		var prevImage = $( '.img' ).eq(prevImageIndex);

		currentImage.hide();
		currentImage.removeClass('curry');

		prevImage.css('display', 'flex');
		prevImage.addClass('curry');

	});


/* map */
function myMap() {
var mapProp= {
    center:new google.maps.LatLng(51.508742,-0.120850),
    zoom:5,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}	

});



