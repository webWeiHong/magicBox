$(function(){
	$('.chooseCourse ul .l2 p span').click(function(){
		$(this).addClass('yesClick').siblings().removeClass();
	});
	$('.chooseCourse ul .l3 p span').click(function(){
		$(this).addClass('yesClick').siblings().removeClass();
	});
	
	var index = 1;
    $('.chooseCourse ul .l4 .reduce').click(function(){
        if($(".chooseCourse ul .l4 .num").html() > 1){
            index--;
            $(".chooseCourse ul .l4 .num").html(index);
        }
    })
    $('.chooseCourse ul .l4 .add').click(function(){
        index++;
        $(".chooseCourse ul .l4 .num").html(index);
    })
})
