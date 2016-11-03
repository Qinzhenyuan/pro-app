;(function(){
	$(function(){
		//模拟数据 本地存储
		var datalist = [{title:"长款两折钱包",code:"goods1",imgUrl:"../img/list2.jpg",price:569},{title:"marysharon美丽誓颜小魔球",code:"goods3",imgUrl:"../img/list_kouhong.jpg",price:119}];
		//本地存储
		localStorage.setItem("datalist",JSON.stringify(datalist));
		
		var data = JSON.parse(localStorage.getItem("datalist"));
		//console.log(data)
		
		//内容框
		//内容生成
		var $xcontent = $(".xcontent");
		data.forEach(function(ele,idx){
			var $goods = $("<div/>").addClass("goods"+" "+ele.code);
			var $part1 = $("<div/>").addClass("part1").html("<span class='iconfont icon-yuanquan check'></span><img src="+ele.imgUrl+" />");
			var $part2 = $("<div/>").addClass("part2").html("<h4>"+ele.title+"</h4><p data-price="+ele.price+">&yen;"+ele.price+"</p><div class='shuliang'><span class='sub iconfont icon-jian'></span><span class='num'>1</span><span class='add iconfont icon-jia'></span><span class='iconfont icon-lajitong0-copy del'></span></div>");
			$goods.append($part1).append($part2).appendTo($xcontent);
		});
		
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
			console.log(shuliang)
			if(shuliang <= 1){
				shuliang = 1;
			}else{
				shuliang += -1; 
				js_price -= dq_Price;
			}
			//更新
			$(this).next().html(shuliang);
			$(this).parent().prev().html("&yen;"+js_price);
			
			//判断之前是否有添加
			if($total.html() == "请选择购物车"){
				var total_price = 0;
			}else{
				var total_price = parseInt($total.find("span").html());
			}
			
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
		});
		//点击删除
		$del.singleTap(function(){
			//删除本商品
			$(this).parent().parent().parent().remove();
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
				$total.html("去结算( &yen; <span>"+sumPrice+" </span>)")
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
	});
})();
