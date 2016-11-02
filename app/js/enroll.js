


document.addEventListener("DOMContentLoaded",function(){
	
	var oinput=document.querySelectorAll("input");
	var btn=document.querySelector("button");
	
	
	
	console.log(oinput.length);
	
	
	var wordList = localStorage.getItem('wordList');
		wordList = wordList ? JSON.parse(wordList) : [];
	
	
		btn.onclick = function(){
			var obj = {};
			obj.en = oinput[0].value;
			obj.cn = oinput[2].value;
		

			// 把当前单词写入数组
			wordList.unshift(obj);

			// 保存到本地存储
			localStorage.setItem('wordList',JSON.stringify(wordList));
			
		}
	
	
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
//
//	oinput[3].onkeyup = function() {
//
//		if(oin[2].value != oin[3].value) {
//			this.classList.add("has-success");
//		} else {
//			this.classList.add("has-error");
//
//		}
//	}


	
	
	
})