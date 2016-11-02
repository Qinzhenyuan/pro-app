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
			var $part1 = $("<div/>").addClass("part1").html("<span class='iconfont icon-yuanquan'></span><img src="+ele.imgUrl+" />");
			var $part2 = $("<div/>").addClass("part2").html("<h4>"+ele.title+"</h4><p>&yen;"+ele.price+"</p><div class='shuliang'><span class='sub iconfont icon-jian'></span><span class='num'>1</span><span class='add iconfont icon-jia'></span><span class='iconfont icon-lajitong0-copy'></span></div>");
			$goods.append($part1).append($part2).appendTo($xcontent);
		});
		
		var $sub = $(".sub"); //减
		var $add = $(".add"); //加
		var $num = $(".num"); //数量
		//修改数量
		
	});
})();
