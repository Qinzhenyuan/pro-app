

;(function(){	
	



document.addEventListener("DOMContentLoaded", function() {
	
	
	
	
	
	//生成商品详细
  var data = JSON.parse(localStorage.getItem("goods"));
       console.log(data.title);


//内容生成

		var $ming=$(".ming");
		var $jg=$(".jg");
//		
		$ming.html(data.title);
		$jg.html("￥"+data.price);
           var $qcontent = $(".tu div:first").find("img");


	$qcontent.attr("src",data.imgUrl);
	
	
	 

	
	
//商品轮播图
var mySwiper = new Swiper('.bao .swiper-container', {
loop: true,
autoplay: 5000,
pagination: '.swiper-pagination',
	paginationClickable: true,
	spaceBetween: 30,
});









//图片延迟加载
$('img.lazy').lazyload();
var $news_list = $(".news-list");

$.ajaxSetup({
	url:"../json/pinglun.json",
success:function(res){
	$.each(res, function(idx,ele) {
		var $div = $("<div/>").addClass("pj").html("<div class='one'><div class='ming'><img src="+ele.imgurl+"    /><span>"+ele.id+"</span></div><div  class='day'>"+ele.ping+"</div></div><span class='xing iconfont icon-xing '>  </span><span class='xing iconfont icon-xing '>  </span><span class='xing iconfont icon-xing' >  </span><span class='xing iconfont icon-xing '>  </span><span class='xing iconfont icon-xing '>  </span><p   class='ping'>"+ele.pinglun+"</p><p class='buy'>"+ele.buy+"</p>");
			$news_list.append($div);
		});
		
	}
});

      
		
		
		
$.ajax();
	$(window).on("scroll",function(){
	
	var scroolltop=$(window).scrollTop();
if(scroolltop>=$(document).height()-$(window).height()-200){
	$.ajax();
	
}
				
});






//详情，评论切换
var tabsSwiper = new Swiper('#tabs-container', {
speed: 500,
onSlideChangeStart: function() {
	$(".tabs .active").removeClass('active')
$(".tabs h2").eq(tabsSwiper.activeIndex).addClass('active')
	}
})
$(".tabs h2").on('touchstart mousedown', function(e) {
e.preventDefault()
$(".tabs .active").removeClass('active');
$(this).addClass('active');
	tabsSwiper.slideTo($(this).index()-1);
	console.log($(this).index());
});
$(".tabs h2").click(function(e) {
		e.preventDefault();
});

});

})();