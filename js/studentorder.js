$(function(){
	$('.nav li').bind('click', function(){
 		$(this).addClass("active").siblings().removeClass('active');
 		var num = $(this).index();
 		// console.log(index);
 		switch (num)
 			{
 			case 0:
 			$("#nopay").css('display','block');
 			$("#readypay").css('display','block');
 			$("#tocommit").css('display','block');
 			break;
 			case 1:
 			$("#nopay").css('display','block');
 			$("#readypay").css('display','none');
 			$("#tocommit").css('display','none');
 			break;
 			case 2:
 			$("#nopay").css('display','none');
 			$("#readypay").css('display','block');
 			$("#tocommit").css('display','none');
 			break;
 			case 3:
 			$("#nopay").css('display','none');
 			$("#readypay").css('display','none');
 			$("#tocommit").css('display','block');
 			break;
 		}

	});

	$("#confirmbtn").click(function(){
		
		window.location.href="studentorderconfirm.html";
	});
	$("#goevaluate").click(function(){
		window.location.href="studentassess.html";
	});


});

$(function(){

		var  url= location.search; //获取url中"?"符后的字串
		var theRequest = new Object();
		if (url.indexOf("?") != -1) {
			var str = url.substr(1);
			strs = str.split("&");
			for(var i = 0; i < strs.length; i ++) {
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
			}
		}
		var nums = theRequest.id;
		if (nums == 1) {
			$("#nopay").css('display','block');
 			$("#readypay").css('display','none');
 			$("#tocommit").css('display','none');
 			$(".nav ul li").eq(nums).addClass('active');
 			$(".nav ul li").eq(nums).siblings('li').removeClass('active');
		}else if(nums == 2){
			$("#nopay").css('display','none');
 			$("#readypay").css('display','block');
 			$("#tocommit").css('display','none');
 			$(".nav ul li").eq(nums).addClass('active');
 			$(".nav ul li").eq(nums).siblings('li').removeClass('active');
		}else if(nums == 3){
			$("#nopay").css('display','none');
 			$("#readypay").css('display','none');
 			$("#tocommit").css('display','block');
 			$(".nav ul li").eq(nums).addClass('active');
 			$(".nav ul li").eq(nums).siblings('li').removeClass('active');
		};
	
	



});
