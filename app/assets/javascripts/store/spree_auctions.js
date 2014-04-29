//= require store/spree_frontend

$(document).on('click', '#add-to-cart-button', function(){
	var min_bid = $('#bd_pz').text().trim().slice(2)
	var user_bid = $('#bid_price').val().trim()
	if((parseFloat(user_bid) <= parseFloat(min_bid)) || user_bid == ""){
		$( "#dialog" ).dialog();
   return false;
	}else{
		$(this).attr('type','submit');
		$(this).trigger('click');
	}
})

$(document).ready(function() {
	$(".is-company").click( function(){
		if ($(".is-company").is(":checked")){
			$(".company_fields").removeClass("hidden");
			$(".company_name").prop("disabled", false);
			$(".nip").prop("disabled", false);
		}
		else{
			$(".company_fields").addClass("hidden");
			$(".company_name").prop("disabled", true);
			$(".nip").prop("disabled", true);
		}
	});
});