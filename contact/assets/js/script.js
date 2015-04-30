 $(document).ready(function() {
	$( "p" ).hide();

	$("#send").click(function(){
        $("#twitter").fadeOut(500);
    });

    $("#send").click(function(){
    	$("p").fadeIn(1000);
    });
});
