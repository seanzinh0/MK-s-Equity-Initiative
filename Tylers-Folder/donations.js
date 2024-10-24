// Modal submit on agree eventlistner 
// Agree btn on click, function takes info from form, checks if valid, if true, it submits
$('#agree-btn').on('click', function() {
	const form = $('.donations-form');

	if (form[0].checkValidity()) {
		form.submit();
	}
});

$(document).ready(function(){
	$('.modal').modal();
});

$(document).ready(function(){
	$('select').formSelect();
});