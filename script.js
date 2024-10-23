$(document).ready(function () {
	$(".sidenav").sidenav();
});

$(document).ready(function(){
	$('select').formSelect();
});

$(document).ready(function(){
	$('.modal').modal();
});

// Modal submit on agree eventlistner 
// Agree btn on click, function takes info from form, checks if valid, if true, it submits
$('#agree-btn').on('click', function() {
	var form = $('.donations-form');

	if (form[0].checkValidity()) {
		form.submit();
	}
});
