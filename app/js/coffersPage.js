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