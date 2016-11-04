;(function(){	
document.addEventListener("DOMContentLoaded", function() {
	console.log(11111);
	//生成商品详细
 	 var data = JSON.parse(localStorage.getItem("goods"));

//内容生成

		var $ming=$(".ming");
		var $jg=$(".jg");
//		
		$ming.html(data.title);
		$jg.html("￥"+data.price);
           var $qcontent = $(".tu div:first").find("img");


		$qcontent.attr("src",data.imgUrl);
		
		
		//点击加入购物车
	var $addtoCar = $("#addtoCar");
	//$addtoCar.singleTap(function(){
	$addtoCar.click(function(){
		//先获取本地存储
		var datalist = localStorage.getItem('datalist');
		//如果没有则返回空数组
		datalist = datalist ? JSON.parse(datalist) : [];
			//本地存储
			var flag = false; //用于判断数组中是否已存在该商品
			datalist.forEach(function(ele,idx){
				//如果有相等的 则已存在
				if(ele.code == data.code){
					flag = true;
					//已存在该商品  在原来数量上加一
					ele.num += 1; 
				}
			});
			//如果数组不存在该商品,则保存该商品信息
			if(!flag){
				//用对象存储当前信息
				//var obj = {};
//				obj.title = $title; //商品名称
//				obj.code = $code; //商品编号
//				obj.imgUrl = $imgUrl; // 商品图片路径
//				obj.price = $price;  // 商品价格
//				obj.num = $num; //商品数量
				// 把当前商品写入数组
				datalist.push(data);
			}
			
			// 保存到本地存储
			localStorage.setItem('datalist',JSON.stringify(datalist));
			console.log(datalist);
	});
	
	 

	
	
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