document.addEventListener("DOMContentLoaded",function(){
	var provincelist = document.querySelectorAll("datalist");

	$.ajax({
		url:"../json/region.json",
		dataType : "json",
		success : function(res){
			$.each(res.regions, function(idx,item) {
				if()
				$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[0]);
				$.each(item.regions, function(idx,item) {
					$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[1]);
					$.each(item.regions, function(idx,item) {
						$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[2]);							
					});
				});
			});
		}			
	});	
});