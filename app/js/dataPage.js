;(function(){
	document.addEventListener("DOMContentLoaded",function(){
		var provincelist = document.querySelectorAll("datalist");
		var city = document.querySelectorAll(".shippingAddress");
		
		
		var shengming;
		var shiming;
		city[0].onfocus = function(){
			
			$.ajax({
				url:"../json/region.json",
				dataType : "json",
				success : function(res){
					console.log(111);
					provincelist[0].innerHTML = "";
					city[0].value = "";
					city[2].value = "";
					city[1].value = "";
					$.each(res.regions, function(idx,item) {						
						$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[0]);
					});
				}			
			});
		}
		city[0].onblur = function(){
			shengming = city[0].value;
		}
		
		city[1].onfocus = function(){
			if(city[0].value!=""){
				$.ajax({
					url:"../json/region.json",
					dataType : "json",
					success : function(res){	
						city[2].value = "";
						city[1].value = "";
						provincelist[1].innerHTML = "";
						$.each(res.regions, function(idx,item) {
							if(shengming == item.name){
								$.each(item.regions, function(idx,item) {
									$("<option/>").html(item.name).attr({value:item.name}).appendTo(provincelist[1]);
								});
							}
						});
					}			
				});
			}
		}
		city[1].onblur = function(){
			shiming = city[1].value;
		}
		city[2].onfocus = function(){
			if(city[1].value!=""&&city[0].value!=""){
				$.ajax({
					url:"../json/region.json",
					dataType : "json",
					success : function(res){
						city[2].value = "";
						provincelist[2].innerHTML = "";
						$.each(res.regions, function(idx,item) {					
							$.each(item.regions, function(idx,item) {
								if(shiming == item.name){
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