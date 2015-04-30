 $(document).ready(function() {
	

$('#bio').hover(
    function(){ $(this).css('border', '1px solid white'); },
    function(){ $(this).css('border', '1px dashed white'); });
              


$('img').hover(
    function(){ $(this).css('opacity',
    	'.8'); },
     function(){ $(this).css('opacity','1'); });
      

$('img').hover(
    function(){ $(this).addClass('opacity'); },
     function(){ $(this).removeClass('opacity'); });

});
