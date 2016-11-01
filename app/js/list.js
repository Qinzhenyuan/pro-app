;(function(){
	$(function(){
		var $xcontent = $(".xcontent");
		//ajax加载
		$.ajax({
			url:"../json/list.json",
			success:function(res){
				$.each(res, function(idx,ele) {
					var $div = $("<div/>").addClass("goods col-xs-6 "+ele.code+"").html("<fieldset><img src="+ele.imgUrl+" class='col-xs-12'/><figcaption><a href='#'>"+ele.title+"</a></figcaption><p><span class='iconfont icon-jifen'></span>"+ele.price+"</p></fieldset>")
					$div.appendTo($xcontent);
				});
			}
		});
	});
})();
