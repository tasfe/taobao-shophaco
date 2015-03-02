(function($) {
	$(document).ready(function() {	
		$('.nav-tabs a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})
	
	if($("div").hasClass("category-title")==true){
		$(".padding-s").children(".breadcrumbs").css("margin","-10px -10px 23px -10px");
		$(".padding-s").children(".breadcrumbs")[0].hide();
	}
	


	});

})(jQuery);
