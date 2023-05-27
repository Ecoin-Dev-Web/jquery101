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

/*	$(document).on('click','#start',function () {
		$(".box").toggle(5000).delay(2000).slideToggle(5000)

	})
*/

/*	$(document).on('mousemove','.box',function () {
		$(".box").fadeTo(2000,.2)
		
	})*/
/*
	$(document).on('click','#start',function () {
		$(".box").animate({
			width : '600px',
			height : '150px',
			left:"150px",
			top:"200px",
		},5000)

	})

	$(document).on('click','#stop',function () {
		$(".box").stop()

	})*/

	$(document).on('click','#start',function () {
		$(".box").animate({
			marginLeft : '+=50px',
			marginTop : '+=50px',
		},1000)

	})

	$(document).on('click','#txt',function () {
		$(".box").text("Ecoin 2023")

	})

	$(document).on('click','#ht',function () {
		$(".box").html("<i>Ecoin 2025</i>")

	})



})