$(document).ready(function () {

/*   $(".box").hide(5000)
	$(".box").show(5000)
	$(".box").toggle(5000)
	 $(".box").fadeOut(5000)
     $(".box").fadeIn(5000)
    
      $(".box").fadeToggle(5000)
     $(".box").slideUp(5000)
     $(".box").slideDown(5000)
    
    $(".box").slideToggle(5000)*/
   // 
   //$(".box").toggle(5000).delay(2000).slideToggle(5000)

/*	$('#start').click(function () {
		$(".box").toggle(5000).delay(2000).slideToggle(5000)
	})*/

	$(document).on('click','#start',function () {
		$(".box").toggle(5000).delay(2000).slideToggle(5000)
	})
})