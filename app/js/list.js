;(function(){
	$(function(){
		var $xcontent = $(".xcontent");
		//每次加载的数量
		var num = 8;
		//加载的索引
		var index = -1;
		//ajax加载    先加载8个
		ajaxJz();
		
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
				//分类菜单隐藏
				$classify_menu.removeClass("active3");
			}else{
				$(this).addClass("active").siblings("li").removeClass("active");
				var $l2 = $(".classify-menu .leval2");
				$l2.find("."+da_name+"").siblings("li").css("display","none");
				$l2.find("."+da_name+"").css("display","block");
			}
			
			//点击二级分类
			$leval2.singleTap(function(){
				$(this).addClass("active").siblings("li").removeClass("active");
				if(da_name == "muying"){
					//没有三级菜单
//					$classify_menu.removeClass("active3");
				}else{
					var $l3 = $(".classify-menu .leval3");
					var da_name2 = $(this).attr("data-name");
					$l3.find("."+da_name2+"").siblings("li").css("display","none");
					$l3.find("."+da_name2+"").css("display","block");
				}
				
			});
			
			//点击三级分类
			$leval3.singleTap(function(){
				$(this).addClass("active").siblings("li").removeClass("active");
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
		})
		
		
		//加载的函数
		function ajaxJz(){
			$.ajax({
				url:"../json/list.json",
				success:function(res){
					$.each(res, function(idx,ele) {
						if(num > idx && index < idx){
							var $div = $("<div/>").addClass("goods col-xs-6 "+ele.code+"").html("<fieldset><img src="+ele.imgUrl+" class='col-xs-12'/><figcaption><a href='#'>"+ele.title+"</a></figcaption><p><span class='iconfont icon-jifen'></span>"+ele.price+"</p></fieldset>")
							$div.appendTo($xcontent);
						}
					});
					index = num;
				}
			});
		}
		
		
		
	});
})();
