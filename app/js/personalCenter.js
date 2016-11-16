;(function(){
	document.addEventListener("deviceready",function(){
		var btnCamera = document.querySelector("#btncamera");
		var pic = document.querySelector("#pic");
		btnCamera.addEventListener("touchstart",function(){
			//调用照相机
			navigator.camera.getPicture(success,error, {
				//照片质量
				quality : 100
			});
		});
		
		//成功的回调函数
		function success(imgData){
			pic.src = imgData;
		}
		
		//失败的回调函数
		function error(){
			
		}
	});
})();