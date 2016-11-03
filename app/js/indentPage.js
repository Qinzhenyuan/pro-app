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
		for(var i=0;i<10;i++){
			var $ul = $("<ul/>");
			$("<li/>").append($("<span/>").html("店铺一")).append($("<span/>").html("交易成功").addClass("bianse")).appendTo($ul);
			$("<li/>").append($("<a/>").attr({href:"xiangqing.html"}).append($("<img/>").attr({src:"../img/56.jpg"}))).append($("<span/>").addClass("name").html("斯文印花黑灰色短袖连衣裙")).append($("<span/>").addClass("price").html("￥120")).append($("<span/>").addClass("number").html("X 2")).appendTo($ul);
			$("<li/>").append($("<span/>").addClass("tongji").html("共2件商品，合计：￥240")).appendTo($ul);
			$("<li/>").append($("<span/>").addClass("anniu").append($("<button/>").html("付款")).append($("<button/>").html("删除订单")).append($("<button/>").html("查看物流"))).appendTo($ul);			
			$ul.appendTo(content);
		}
	});
})();