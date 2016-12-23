$(function(){
	
	$('#areaBut ul li').click(function(){
		$(this).removeClass().children().children().addClass('toTop');
		$('#areaDetail > div').hide().eq($('#areaBut ul li').index(this)).show();
		if($('#areaBut ul li').index(this) == 0){
			$('#subwayAndArea ul li').click(function(){
				$(this).addClass('yesClick').siblings().removeClass();
				$('#areaContent > div').hide().eq($('#subwayAndArea ul li').index(this)).show();
				$('#areaContent > div > div:first-child ul li').click(function(){
					$(this).removeClass('bg_c').siblings().addClass('bg_c');
					$('#areaContent > div > div:last-child ul').hide().eq($('#areaContent > div > div:first-child ul li').index(this)).show();
				    
				});
				$('#areaContent > div div:last-child ul li').click(function(){
			    	$('#areaBut ul li:nth-child(1) p').html($(this).text() + '<span></span>');
					$('#areaDetail > div').hide();
			    })
				
			})
		};
		if($('#areaBut ul li').index(this) == 1){
			$('#secondSearch ul li').click(function(){
				$('#areaBut ul li:nth-child(2) p').html($(this).text() + '<span></span>');
				$('#areaDetail > div').hide();
			})
		};
		if($('#areaBut ul li').index(this) == 2){
			$('#thirdSearch ul li').click(function(){
				$('#areaBut ul li:nth-child(3) p').html($(this).text() + '<span></span>');
				$('#areaDetail > div').hide();
			})
		};
	});
})
