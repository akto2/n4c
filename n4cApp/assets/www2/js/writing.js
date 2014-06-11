	$(window).bind('mousewheel', function(event) {
		if (event.originalEvent.wheelDelta >= 0) {
			$("#Chatbox").css("visibility", "hidden")
		} else {
			$("#Chatbox").css("visibility", "visible")
		}
	});

	$('#btn1').click(function(e){
		$('#file').trigger ('click');
	});
	 

	$('#btnReg').click(function(e) {
		e.preventDefault();
		location.href = "list.html";
	});
	
	$(document).ready(function(){
		$('#textbar').css('height' ,  $(window).height() - 205 );
		$('#textbar').css('width' ,  $(window).width() - 20 );
    $(window).resize(function() {
      $('#textbar').css('height' ,  $(window).height() - 205 );
      $('#textbar').css('width' ,  $(window).width() - 20 );
    });
});
	
	var limit = 100;
	$('#number').val(limit);
	
function fc_chk_byte(){
	var i = $('#number').val(limit - $('#text').val().length);
	if($('#number').val() < 0){
		$('#number').css('color','red');
	     document.getElementById("btnReg").disabled = true;
	}else/* ($('#name').val() > 0) */{
		$('#number').css('color','#A6A6A6');
	    document.getElementById("btnReg").disabled = false;
	}
}
