(function ($) {
    $.fn.slideShow = function(options){	

        defaults = {
            "autoPlay":"true",
           	"eType":"click",
           	"show":"slide",
            "speed":2000,
        }

        var options = $.extend(defaults, options);

    return this.each(function(){

    	var me=$(this),
    	    index=0,
    	    images=me.find('ul:first-child'),
		    navs=me.find('.nav li'),
			imageWidth=images.find('li img').eq(0).width(),
			// alert(imageWidth);
			timer=null;

        navs.on(defaults.eType,function(){
		   index=$(this).index();
		   navs.eq(index).addClass('active').siblings('li').removeClass('active');
		   if(defaults.show=='slide'){
		   	images.animate({"left":-index*imageWidth});
		   }
		   else if(defaults.show=='fade'){
		   	 images.find('li').eq(index).show().siblings('li').hide();
		   }
		})

        if(defaults.autoPlay){
	        autoPlay();
	        me.find('li img').mouseover(function(){
	        	// console.log(ab++);    //如果是find('li')一刷新页面就会执行一次 ？？
	        	clearInterval(timer);
	        })
	        me.find('li img').mouseout(function(){
	        	autoPlay();
	        })
       	}
        
            function autoPlay(){
	        	timer=setInterval(function(){
	    		   index++;
	    		   if(index>navs.length-1){
	    		   	  index=0;
	    		   }
	    		   console.log(index);
	    		   	navs.eq(index).trigger(defaults.eType);
	    		   // alert(index);
	    		},defaults.speed);
           }
        });
    };
})(jQuery);
