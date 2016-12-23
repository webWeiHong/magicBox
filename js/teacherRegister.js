$(function(){
	var wrap = $('.sendMessage .tel input').val();
	console.log(wrap == undefined);
	if(wrap !== null){
		$('.sendMessage .tel span').removeClass('yesClick');
	}else{
		$('.sendMessage .tel span').addClass('yesClick');
	}
})