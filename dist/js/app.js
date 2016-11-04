;(function(){	
	document.addEventListener("DOMContentLoaded",function(){
		var jsonlist = document.querySelector(".jsonlist");
		
		$.ajaxSetup({
			url:"../json/coffersPage.json",
			dataType : "json",
			success : function(res){
				$.each(res, function(idx,item) {
					var $li = $("<li/>");
					$("<p/>").html(item.inOrout).appendTo($li);
					$("<p/>").html(item.surplus).appendTo($li);
					$("<p/>").html(item.remark).appendTo($li);
					$("<p/>").html(item.time).appendTo($li);
					$li.appendTo(jsonlist);
				});
			}
		});
		$.ajax();
			
	//	实现懒加载部分
		var i = 0;
		$(window).on('scroll',function(){
			// 获取滚动条滚动过的距离
			var scrollTop = $(window).scrollTop();
			
			// 当差不多滚动到底部时加载更多内容
			if(scrollTop >= $(document).height() - $(window).height() - 100){					
				if(i<=3){
					$.ajax();
				}else{
					return false;
				}
				i++;
			}
		});
	});
})();
;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var provincelist = document.querySelectorAll("datalist");
		var city = document.querySelectorAll(".shippingAddress");
		

		city[0].onfocus = function(){
			$.ajax({
				url:"../json/region.json",
				dataType : "json",
				success : function(res){
					$.each(res.regions, function(idx,item) {
						$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[0]);
					});
				}			
			});
		}
		city[1].onfocus = function(){
			if(city[0].value!=""){
				$.ajax({
					url:"../json/region.json",
					dataType : "json",
					success : function(res){						
						$.each(res.regions, function(idx,item) {
							if(city[0].value == item.name){
								$.each(item.regions, function(idx,item) {
									$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[1]);
								});
							}
						});
					}			
				});
			}
		}
		city[2].onfocus = function(){
			if(city[1].value!=""&&city[0].value!=""){
				$.ajax({
					url:"../json/region.json",
					dataType : "json",
					success : function(res){
						$.each(res.regions, function(idx,item) {
							$.each(item.regions, function(idx,item) {
								if(city[1].value == item.name){
									$.each(item.regions, function(idx,item) {
										$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[2]);
									});
								}
							});
						});
					}			
				});
			}
		}

	});
})();
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
;(function() {
		document.addEventListener("DOMContentLoaded", function() {

			var oinput = document.querySelectorAll("input");
			var btn = document.querySelector("button");

			var wordList = localStorage.getItem('wordList');
			wordList = wordList ? JSON.parse(wordList) : [];

			//点击通过验证；
			btn.onclick = function() {
					regData();
				}
				//封装函数本地存储
			function regData() {
				var obj = {};
				obj.name = oinput[0].value;
				obj.psW = oinput[2].value;
				// 把当前单词写入数组
				wordList.unshift(obj);
				// 保存到本地存储
				console.log(flag1);
				if(flag1 == true) {
					if(flag2 == true) {
						if(flag3 == true) {

							localStorage.setItem('wordList', JSON.stringify(wordList));
							alert("地球人，您已经越过太阳系，快去登录吧！");
							setTimeout(window.open("register.html"), 1000);

						}
					}
				}
			}
			//设置全局的变量标记；
			var flag1 = false; //标记用户；
			var flag2 = false; //标记密码；
			var flag3 = false; //标记重写密码；

			//用户名验证；
			oinput[0].onblur = function() {
					registernNameTake();
				}
				//密码验证；
			oinput[2].onblur = function() {
				registerPswTake();
			}

			//确认密码验证；
			oinput[3].onblur = function() {
				registerPswAgTake();
			}

			//账户手机号码验证
			function registernNameTake() {
				var _this = oinput[0];
				var name = oinput[0].value;

				if(name == '') {
					_this.style.borderColor = "#f20266";
					return true;
				} else if(/^[1][358][0-9]{9}$/.test(name)) {
					_this.style.borderColor = "#ccc";
					flag1 = true;
					return false;
				}
			};
			//密码验证；
			function registerPswTake() {
				var _this = oinput[2];
				var name = oinput[2].value;
				var tishi = document.querySelector(".hxy-active");
				if(name == '') {
					_this.style.borderColor = "#f20266";
					return true;
				} else if(/[a-z0-9A-Z]{6,20}$/.test(name)) {
					flag2 = true;
					_this.style.borderColor = "#ccc";
					tishi.innerHTML = "";
					return false;
				} else {
					_this.style.borderColor = "#f20266";
					tishi.style.color = "#f20266";
					tishi.innerHTML = "请输入6到20位字母和数字的组合的密码";
				}
			};
			//确认密码
			function registerPswAgTake() {
				var _this = oinput[3];
				var name = oinput[3].value;
				var tishi = document.querySelector(".hxy-active2");
				if(name == "") {
					_this.style.borderColor = "#f20266";
					return true;
				} else if(name === oinput[2].value) {
					flag3 = true;
					_this.style.borderColor = "#ccc";
					tishi.innerHTML = "";
				} else {
					_this.style.borderColor = "#f20266";
					tishi.style.color = "#f20266";
					tishi.innerHTML = "请正确匹配密码";
				}
			};
     });
		})();
;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var content = document.querySelector(".content");
		

		var cookies = JSON.parse(localStorage.getItem("datalist"));
		
//		$.each(cookies, function(res) {
//			var $ul = $("<ul/>");
//			$("<li/>").append($("<span/>").html("店铺一")).append($("<span/>").html("交易成功").addClass("bianse")).appendTo($ul);
//			$("<li/>").append($("<a/>").attr({href:"xiangqing.html"}).append($("<img/>").attr({src:"../img/56.jpg"}))).append($("<span/>").addClass("name").html("斯文印花黑灰色短袖连衣裙")).append($("<span/>").addClass("price").html("￥120")).append($("<span/>").addClass("number").html("X 2")).appendTo($ul);
//			$("<li/>").append($("<span/>").addClass("tongji").html("共"+$("<span/>").html("2")+"件商品，合计：￥"+$("<span/>").html("120"))).appendTo($ul);
//			$("<li/>").append($("<span/>").addClass("anniu").append($("<button/>").html("付款")).append($("<button/>").html("删除订单")).append($("<button/>").html("查看物流"))).appendTo($ul);			
//			$ul.appendTo(content);
//		});
		cookies.forEach(function(ele,idx){
			var $ul = $("<ul/>");
			$("<li/>").append($("<span/>").html("店铺一")).append($("<span/>").html("交易成功").addClass("bianse")).appendTo($ul);
			$("<li/>").append($("<a/>").attr({href:"xiangqing.html"}).append($("<img/>").attr({src:ele.imgUrl}))).append($("<span/>").addClass("name").html(ele.title)).append($("<span/>").addClass("price").html("￥"+ele.price)).append($("<span/>").addClass("number").html("X "+ele.num)).appendTo($ul);
			$("<li/>").append($("<span/>").addClass("tongji").html("共2件商品，合计：￥240")).appendTo($ul);
			$("<li/>").append($("<span/>").addClass("anniu").append($("<button/>").html("付款")).append($("<button/>").html("删除订单").addClass("delate")).append($("<button/>").html("查看物流"))).appendTo($ul);			
			$ul.appendTo(content);
		});

		var delate = document.querySelectorAll(".delate");
		for(var i=0;i<delate.length;i++){
			$(delate[i]).on("singleTap",function(){
				$(this).parents("ul").remove();
			});
		}
		
		
	});
})();
;(function(){
document.addEventListener('DOMContentLoaded',function(){
	//swiper 轮播图
	var mySwiper = new Swiper('.swiper-container', {
	autoplay: 3000,//可选选项，自动滑动
	direction: 'horizontal',
	})

});
$(function(){

	
	
	//用ajax获取数据实现加载；
	$.ajaxSetup({
		url:"json/indexpro.json",
		dataType:"json",
		success:function(data){
			console.log(data);
			$.each(data, function(idx,item) {

					//创建标签，并添加hxy-project
					var $dl = $("<dl/>").addClass("hxy-pro-list");
					var $dt = $("<dt/>");
					var $dd = $("<dd/>");
					var $a = $("<a/>").attr({href:item.href});
					var $a2 = $("<a/>").attr({href:item.href});
					var $a3 = $("<a/>").attr({href:item.href})
					//创建储产品图片；
					$("<img data-original="+item.imgurl+"/>").addClass("lazy").appendTo($a);				
					//$("<img src="+item.imgurl+"/>").addClass("lazy").appendTo($a);				
					//产品价格和产品说明；
					$("<p/>").addClass("hxy-pro-intr").html(item.title).appendTo($a2);
					$("<span/>").addClass("hxy-integral").html(item.proPri).appendTo($a3);
					$("<span/>").addClass("hxy-pro-price").html(item.price+"<i class='hxy-unit'>起</i>").appendTo($a3);
				
					$a.appendTo($dt);
					$a2.appendTo($dd);
					$a3.appendTo($dd);
					$dt.appendTo($dl);
					$dd.appendTo($dl);
					$dl.appendTo($(".hxy-project"));
				
			})		
		},error:function(xhr,type){
			alert("Ajax error")
		}
	});
	     //运行加载数据
	     $.ajax();
	    

	$(".hxy-container").scroll(function(){
		//回到顶部；
		$(".hxy-backTop").on("click",function(){
			$(".hxy-container").scrollTop(0);
		})
		$("img.lazy").lazyload({
			effect:'fadeIn'
		});
	
		
	})
		
//	$(".hxy-container").scroll(function() {
//	var $scrollTop = $(window).scrollTop();
//	console.log($scrollTop);
//	if($scrollTop >= $(document).height() - $(window).height() - 100) {
//		$.ajax();
//		}
//	});
});

})();

;(function(){
	$(function(){
		var $xcontent = $(".xcontent");
		//每次加载的数量
		var num = 8;
		//加载的索引
		var index = -1;
		//ajax加载    先加载8个
		ajaxJz();
		//获取回到顶部上箭头
		var $top = $("#top");
		//当滚动滚动条时
		$(window).scroll(function(){
			//滚动条到顶部的距离
			var iTop = document.documentElement.scrollTop || document.body.scrollTop;
			//网页的高度
			var iHeight = $("html").height();
			//可视区域的高度
			var vheight =window.innerHeight;
			//console.log(iTop+","+iHeight+","+vheight);
			//当滚动条滑到底部的时候
			if(iTop == iHeight-vheight){
				//再加载8个
				num += 8;
				ajaxJz();
			}
			
			//当滚动条距离顶部距离大于可视区域的高度时
			if(iTop > vheight){
				$top.css("display","flex");
			}else{
				$top.css("display","none");
			}
		});
		
		//点击回到顶部按钮时
		$top.singleTap(function(){
			 $(window).scrollTop(0);
		});
		//头部分类
		var $classify = $("#classify");
		//头部品牌
		var $brand = $("#brand");
		//头部分类菜单
		var $classify_menu = $(".classify-menu");
		//单击头部分类时
		$classify.singleTap(function(){
			//箭头翻转
			$(this).find(".iconfont").toggleClass("active");
			//字变色
			$(this).toggleClass("active2");
			//打开分类菜单
			$classify_menu.toggleClass("active3");
		});
		
		var $leval1 = $(".classify-menu .leval1 li");
		var $leval2 = $(".classify-menu .leval2 li");
		var $leval3 = $(".classify-menu .leval3 li");
		//单击 选择一级分类
		$leval1.singleTap(function(){
			var da_name = $(this).attr("data-name");
			//当点击的是全部分类的时候
			if(da_name == "all"){
				//先隐藏二级三级菜单
				$leval2.css("display","none");
				$leval3.css("display","none");
				//把头部菜单的文字替换
				$classify.find("b").html("分类");
				//移除头部菜单的激活类
				//箭头翻转
				$classify.find(".iconfont").toggleClass("active");
				//字变色
				$classify.toggleClass("active2");
				//添加激活类 其他移除
				$(this).addClass("active").siblings("li").removeClass("active");
				//移除激活类 关闭菜单
				$classify_menu.removeClass("active3");
				//先清空
				$xcontent.html("");
				//初始化索引
				index = -1;
				//调用加载函数
				ajaxJz();
			}else{
				//隐藏三级菜单
				$leval3.css("display","none");
				//添加激活类 其他移除
				$(this).addClass("active").siblings("li").removeClass("active");
				var $l2 = $(".classify-menu .leval2");
				$l2.find("."+da_name+"").siblings("li").css("display","none");
				$l2.find("."+da_name+"").css("display","block");
			}
			
			//点击二级分类
			$leval2.singleTap(function(){
				//添加激活类 其他移除
				$(this).addClass("active").siblings("li").removeClass("active");
				var $l3 = $(".classify-menu .leval3");
				var da_name2 = $(this).attr("data-name");
				$l3.find("."+da_name2+"").siblings("li").css("display","none");
				$l3.find("."+da_name2+"").css("display","block");
				
			});
			
		});
		
		//点击三级分类
		$leval3.singleTap(function(){
			//添加激活类 其他移除
			$(this).addClass("active").siblings("li").removeClass("active");
			//移除头部菜单的激活类
			//箭头翻转
			$classify.find(".iconfont").removeClass("active");
			//字变色
			$classify.removeClass("active2");
			//移除激活类 关闭菜单
			$classify_menu.removeClass("active3");
			//获取  自身的html 即分类
			var $fl_html = $(this).children().html();
			//把头部菜单的文字替换
			$classify.find("b").html($fl_html);
			//先清空
			$xcontent.html("");
			//加载
			$.ajax({
				url:"../json/list.json",
				success:function(res){
					$.each(res, function(idx,ele) {
						if(ele.category == $fl_html){
							var $div = $("<div/>").addClass("goods col-xs-6").attr({"data-code":ele.code}).html("<fieldset><img src="+ele.imgUrl+" class='col-xs-12'/><figcaption><a href='#'>"+ele.title+"</a></figcaption><p><span class='iconfont icon-jifen'></span><b>"+ele.price+"</b></p></fieldset>")
							$div.appendTo($xcontent);
						}
					});
				}
			});
			
		});
		
		//单击头部品牌时
		$brand.singleTap(function(){
			//箭头翻转
			$(this).find(".iconfont").toggleClass("active");
			//字变色
			$(this).toggleClass("active2");
			//打开分类菜单
			
		});
		
		//底部菜单
		var $footer_div = $(".footer div");
		//点击底部菜单时
		$footer_div.singleTap(function(){
			//本身添加激活类   其他兄弟节点移除
			$(this).addClass("active").siblings("div").removeClass("active");
		});
		
		
		//点击图片添加商品信息到本地存储
		//事件委托
		$xcontent.on("singleTap","div",function(){
			//获取当前的商品编号
			var $code = $(this).attr("data-code");
			//获取图片路径
			var $imgUrl = $(this).find("img").attr("src");
			//获取商品名称
			var $title = $(this).find("figcaption a").html();
			//获取商品价格
			var $price = $(this).find("b").html();
			//商品的数量   初始
			var $num =  1;
			//console.log($price+","+$code+","+$imgUrl+","+$title);
			
			//设置本地存储
			var obj = {};
			obj.title = $title; //商品名称
			obj.code = $code; //商品编号
			obj.imgUrl = $imgUrl; // 商品图片路径
			obj.price = $price;  // 商品价格
			obj.num = 1; //默认一件
			
			//储存
			localStorage.setItem("goods",JSON.stringify(obj));
			
			//跳转到详情页
			location.href = "details.html";
			
		});
		 
		
		
		
		//加载的函数
		function ajaxJz(){
			$.ajax({
				url:"../json/list.json",
				success:function(res){
					$.each(res, function(idx,ele) {
						if(num > idx && index < idx){
							var $div = $("<div/>").addClass("goods col-xs-6 ").attr({"data-code":ele.code}).html("<fieldset><img src="+ele.imgUrl+" class='col-xs-12'/><figcaption><a href='#'>"+ele.title+"</a></figcaption><p><span class='iconfont icon-jifen'></span><b>"+ele.price+"</b></p></fieldset>")
							$div.appendTo($xcontent);
						}
					});
					index = num;
				}
			});
		}
	});
})();

;(function(){
	$(function(){		
		$(".icon-fenlei").on("singleTap",function(){
			$(".caidan").toggle();			
		});		
	});
})();

;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		
		
	});
})();
;(function(){
document.addEventListener("DOMContentLoaded",function(){
	
	var oinput=document.querySelectorAll("input");
	var btn=document.querySelector("button");
	var op=document.querySelector(".op");
	
	var wordList = localStorage.getItem('wordList');
	wordList = wordList ? JSON.parse(wordList) : [];
	var regName = wordList[wordList.length - 1];

	//通过验证登录并跳转到个人中心；
	btn.onclick = function(){
		if(flag1 == true && flag2 == true && (oinput[0].value == regName.name) && (oinput[1].value == regName.psW)){
			window.open("personalCenter.html");
			//保存登录信息；
			var yName = oinput[0].value;
			var yPsW = oinput[1].value;
			var arr = {};
			arr.name = yName;
			arr.psW = yPsW;
			//将对象转化字符串 存储；
			localStorage.setItem("Info",JSON.stringify(arr));
		}else{
			alert("账户或密码错误");
		}
	}
	
//账户手机号码验证
	oinput[0].onblur = function(){
		registernNameTake();
	}
	//密码验证；
	oinput[1].onblur = function(){
		registerPswTake();
	}
//设置全局的变量标记；
	var flag1 = false;//标记用户；
	var flag2 = false;//标记密码；
//账户手机号码验证
function registernNameTake() {
		var _this = oinput[0];
		var name = oinput[0].value;
		
		if(name == ''){
			_this.style.borderColor = "#f20266";
			op.style.color = "#f20266";
			op.innerHTML = "错误";
			return true;
		}else if(/^[1][358][0-9]{9}$/.test(name)){
			op.innerHTML = "正确";
			_this.style.borderColor = "#ccc";
			op.style.color = "green";
			flag1 = true;
			return false;
		}else{
			_this.style.borderColor = "#f20266";
			op.style.color = "#f20266";
			op.innerHTML = "错误";
		}
};		
//密码验证；
function registerPswTake(){
		var _this = oinput[1];
		var name = oinput[1].value;

		if(name == ''){
			_this.style.borderColor = "#f20266";
			return true;
		}
		else if(/[a-z0-9A-Z]{6,20}$/.test(name)){
			flag2 = true;
			_this.style.borderColor = "#ccc";
			return false;
		}else{
			_this.style.borderColor = "#f20266";
			tishi.style.color = "#f20266";
		}
};	

})
})();
;(function(){
	$(function(){
		//模拟数据 本地存储
//		var datalist = 	[	
//							{title:"长款两折钱包",code:"goods1",imgUrl:"../img/list2.jpg",price:569,num:4},
//							{title:"marysharon美丽誓颜小魔球",code:"goods3",imgUrl:"../img/list_kouhong.jpg",price:119,num:6},
//							{title:"s990纯银佛教心经手镯",code:"goods5",imgUrl:"../img/list_yin2.jpg",price:1425,num:3}
//						];
//		//本地存储
//		localStorage.setItem("datalist",JSON.stringify(datalist));
		
		var data = JSON.parse(localStorage.getItem("datalist"));
		
		if(data){
			//内容框
			//内容生成
			var $xcontent = $(".xcontent");
			data.forEach(function(ele,idx){
				var $goods = $("<div/>").addClass("goods").attr("data-code",ele.code);
				var $part1 = $("<div/>").addClass("part1").html("<span class='iconfont icon-yuanquan check'></span><img src="+ele.imgUrl+" />");
				var $part2 = $("<div/>").addClass("part2").html("<h4>"+ele.title+"</h4><p data-price="+ele.price+">&yen;"+(ele.price*ele.num)+"</p><div class='shuliang'><span class='sub iconfont icon-jian'></span><span class='num'>"+ele.num+"</span><span class='add iconfont icon-jia'></span><span class='iconfont icon-lajitong0-copy del'></span></div>");
				$goods.append($part1).append($part2).appendTo($xcontent);
			});
		}
		
		var $sub = $(".sub"); //减
		var $add = $(".add"); //加
		var $num = $(".num"); //数量
		var $del = $(".del"); //删除
		
		var $checkAll = $(".checkAll"); //全选框
		var $check = $(".check"); //每个商品的勾选框
		var $total = $(".total p"); //显示总价框
		var $price = $(".part2 p"); //价格
		
		
		//修改数量
		//减
		$sub.singleTap(function(){
			//当前的数量
			var shuliang = parseInt($(this).next().html());
			//当前商品的单价
			var dq_Price = parseInt($(this).parent().prev().attr("data-price"));
			//当前商品单价*总价得到的价格
			var js_price =parseInt($(this).parent().prev().html().substring(1));
			if(shuliang <= 1){
				shuliang = 1;
			}else{
				shuliang += -1; 
				js_price -= dq_Price;
				
				//判断之前是否有添加
				if($total.html() == "请选择购物车"){
					var total_price = 0;
				}else{
					var total_price = parseInt($total.find("span").html());
					total_price -= dq_Price;
					//更新
					$total.html("去结算( &yen; <span>"+total_price+" </span>)");
				}
			}
			//更新
			$(this).next().html(shuliang);
			$(this).parent().prev().html("&yen;"+js_price);
			
			//获取当前商品的商品号
			var code = $(this).parents(".goods").attr("data-code");
			
			data.forEach(function(ele,idx){
				if(ele.code == code){
					ele.num = shuliang;
				}
			});
			
			//本地存储
			localStorage.setItem("datalist",JSON.stringify(data));
			
			
		});
		//加
		$add.singleTap(function(){
			//当前的数量
			var shuliang = parseInt($(this).prev().html());
			//当前商品的单价
			var dq_Price = parseInt($(this).parent().prev().attr("data-price"));
			//当前商品单价*总价得到的价格
			var js_price = parseInt($(this).parent().prev().html().substring(1));;
			shuliang++;
			js_price += dq_Price;
			//更新
			$(this).prev().html(shuliang);
			$(this).parent().prev().html("&yen;"+js_price);
			
			//获取当前商品的商品号
			var code = $(this).parents(".goods").attr("data-code");
			
			data.forEach(function(ele,idx){
				if(ele.code == code){
					ele.num = shuliang;
				}
			});
			//本地存储
			localStorage.setItem("datalist",JSON.stringify(data));
			
			//判断之前是否有添加
			if($total.html() == "请选择购物车"){
				var total_price = 0;
			}else{
				var total_price = parseInt($total.find("span").html());
				total_price += dq_Price;
				//更新
				$total.html("去结算( &yen; <span>"+total_price+" </span>)");
			}
		});
		//点击删除
		$del.singleTap(function(){
			//删除本商品
			$(this).parent().parent().parent().remove();
			
			//获取当前商品的商品号
			var code = $(this).parents(".goods").attr("data-code");
			
			data.forEach(function(ele,idx){
				if(ele.code == code){
					data.splice(idx,0);
				}
			});
			
			//本地存储
			localStorage.setItem("datalist",JSON.stringify(data));
		});
		
		//点击勾选商品
		$check.singleTap(function(){
			if($(this).hasClass("active")){
				//移除激活类 改变样式
				$(this).removeClass("icon-gouxuan active").addClass("icon-yuanquan");
				//还原购物车
				$total.html("请选择购物车");
				
			}else{
				//添加激活类 改变样式
				$(this).removeClass("icon-yuanquan").addClass("icon-gouxuan active");
				//当前的数量
				var shuliang = parseInt($(this).parent().next().find(".num").html());
				//当前商品的单价
				var dq_Price = parseInt($(this).parent().next().find("p").attr("data-price"));
				//总价
				var sumPrice = dq_Price*shuliang;
				//判断之前是否有添加
				if($total.html() == "请选择购物车"){
					var total_price = 0;
				}else{
					var total_price = parseInt($total.find("span").html());
				}
				sumPrice += total_price;
				//更新
				$total.html("去结算( &yen; <span>"+sumPrice+" </span>)");
			}
		});
		
		//点击全选
		$checkAll.singleTap(function(){
			if($checkAll.hasClass("active")){
				//移除激活类 改变样式
				$checkAll.removeClass("icon-gouxuan active").addClass("icon-yuanquan");
				$check.removeClass("icon-gouxuan active").addClass("icon-yuanquan");
				
				//还原购物车
				$total.html("请选择购物车");
				
			}else{
				//添加激活类 改变样式
				$checkAll.removeClass("icon-yuanquan").addClass("icon-gouxuan active");
				$check.removeClass("icon-yuanquan").addClass("icon-gouxuan active");
				//初始化总价
				var sum = 0;
				//计算总价
				$.each($price, function(idx,ele) {
					var money = $price[idx].innerHTML;
					//取出后面的数字
					money = money.substring(1);
					sum += parseInt(money);
				});
				$total.html("去结算( &yen;<span> "+sum+" </span>)");
			}
		});
		
		//点击结算
		var $pay = $("#pay");
		$pay.singleTap(function(){
			location.href = "indentPage.html";
			
		});
		
		
	});
})();
