
document.addEventListener("DOMContentLoaded",function(){
	
	var oinput=document.querySelectorAll("input");
	var btn=document.querySelector("button");
	var op=document.querySelector(".op");
	
	
	console.log(oinput.length);
	var wordList = localStorage.getItem('wordList');
		wordList = wordList ? JSON.parse(wordList) : [];
	
//		oinput[0].onblur = function() {
//		var pa = this.value;
//		var ss = /^1\d{10}$/.test(pa);
//		if(ss) {
//			this.classList.add("has-success");
//                    console.log(1111);
//		} else {
//			this.classList.add("has-error");
//		}
//
//	}
//	
//	
//		oinput[2].onblur = function() {
//		var pass = this.value;
//		var ss = /\w{8,20}/.test(pass);
//		if(ss) {
//			this.classList.add("has-success");
//		} else {
//			
//			this.classList.add("has-error");
//		}
//	}
           
		
		btn.onclick = function(){
			 var name = oinput[0].value;
			var pwr= oinput[1].value;
	
         wordList.forEach(function(item,idx){
		
      if(name == item.en && pwr == item.cn){
                console.log("登录成功");
			window.open("../index.html")
	
				}
      
      });
      
    }  
      
      
      
//       oinput[0].onblur=function(){
//  	wordList.forEach(function(item,idx){
//		if(name!=item.en){
//					
//			op.innerHTML="该用户名还没注册哦";
//  
//       }
//    
//    
//    });
//  }     	
         	
//    
//    
//   
//			
//				}
//else if(name == item.en && pwr != item.cn){
//					console.log("密码错误");
//				}
      
      

		






})