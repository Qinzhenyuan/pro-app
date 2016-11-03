;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var provincelist = document.querySelectorAll("datalist");
		var city = document.querySelectorAll(".shippingAddress");
		
		$.ajax({
			url:"../json/region.json",
			dataType : "json",
			success : function(res){
				$.each(res.regions, function(idx,item) {				
					$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[0]);
					//city[0].onblur = function(){
						
						//if(city[0].value == item.name){
							
							$.each(item.regions, function(idx,item) {
								$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[1]);
								//city[1].onblur = function(){
									
									//if(city[1].value == item.name){
										$.each(item.regions, function(idx,item) {
											$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[2]);																
										});
									//}
								//}
								
							});
						//}
					//}
					
				});
			}			
		});	
	});
})();