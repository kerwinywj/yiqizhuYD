$(function(){
	// 滑动块滑出效果
	// $(window).scroll(function(){
	// 	console.log(1);
	// })
	var slider=false;
	$('.top-right p').click(function(){
		slider=true;
		// alert(1);
		$('.slider-mask').show();
		$('.slider').stop(true).animate({
			"right":"0%"
		},500);
		return false;
	})

	//app广告关闭效果
	$('.app-download .left img').click(function(){
		$(this).parent().parent().hide();
	})

    //关闭滑动块效果
    //
    // $('body').not('.slider').click(function(){
	//   	closeSlider();
	//   	return false;
	// })
	$(document).bind("click",function(e){
		var target = $(e.target); 
		// target.closest('.slider').length == 0吧 等价于if(!target.closest('.pop')[0])
    	// 查找target元素是否有class=pop的父节点
		if(target.closest(".slider").length == 0){ //点击为slider之外的地方触发		
 			closeSlider();
		}
	})

    $('.slider p img').click(function(){
		closeSlider();
	})

	function closeSlider(){
		$('.slider-mask').hide();
		$('.slider').stop(true).animate({
			"right":"-70%"
		},500);
	}


	//nav选择下拉框切换效果
	$('.nav-content .left li').click(function(){
		var index=$(this).index();
		$(this).addClass('active').siblings('li').removeClass('active');
		$(this).parent().siblings('.right').eq(index).show().siblings('.right').hide();
	})

	$('.nav-top li').click(function(){
		var index=$(this).index();
		$('.nav-content').show();
		$('.nav-content div').eq(index).show().siblings('div').hide();
		$('.nav-mask').show();
	})

	$(document).bind("click",function(e){
		var target = $(e.target); 
		if(target.closest(".nav").length == 0){		
 			$('.nav-content').hide();
 			$('.nav-mask').hide();
		}
	})

	//房源详细 ul li隔行变色
	// $(".room-list li:nth-child(even)").addClass('even');
	// 
	
	//点击底部看房 弹出看房框效果
	$('.fix-bottom .btn').click(function(){
		$('.showings').show();
		$('.showings').stop(true).animate({
			"top":"0%"
		},300);
	})

	$('.showings .close').click(function(){
		$('.showings').stop(true).animate({
			"top":"100%"
		},300);
	})

	//房源 图片slider切换效果
	//
	$('.top').click(function(){
		$('#slider').show();
		// $('#slider ul').css("width","3912px");
	})
	$('#slider .close').click(function(){
		$('#slider').hide();
	})
	TouchSlide({
		slideCell:"#top",
		effect:"leftLoop",
		mainCell:".lists",
		titCell:".nav li",
		autoPlay:true,
		pageStateCell:".image-count span"
	});
})