$(function(){

	$('.homework-top ul').children('li').click(function(){
		$(this).addClass("active");
        $(this).siblings().removeClass("active");
        var index = $(this).index();
        $(".ul-list").eq(index).css("display", "block");
		$(".ul-list").eq(index).siblings().css("display", "none");
	});

	$("#workdet").click(function(){
		window.location.href="homeworkdetails.html";
	})
})