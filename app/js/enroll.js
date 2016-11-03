

;(function(){
document.addEventListener("DOMContentLoaded",function(){
	
	var oinput=document.querySelectorAll("input");
	var btn=document.querySelector("button");
	
	var wordList = localStorage.getItem('wordList');
		wordList = wordList ? JSON.parse(wordList) : [];
	
		//点击通过验证；
		btn.onclick = function(){
			regData();
		}
	//封装函数本地存储
	function regData(){
			var obj = {};
			obj.name = oinput[0].value;
			obj.psW = oinput[2].value;
			// 把当前单词写入数组
			wordList.unshift(obj);
			// 保存到本地存储
			console.log(flag1);
			if(flag1 == true){
				if(flag2 == true){
					if(flag3 == true){

					
							localStorage.setItem('wordList',JSON.stringify(wordList));
							alert("地球人，您已经越过太阳系，快去登录吧！");
							setTimeout(window.open("register.html"),1000);
						

					}
				}
			}
	}
	//设置全局的变量标记；
	var flag1 = false;//标记用户；
	var flag2 = false;//标记密码；
	var flag3 = false;//标记重写密码；
	
	//用户名验证；
	oinput[0].onblur = function(){
		registernNameTake();
	}
	//密码验证；
	oinput[2].onblur = function(){
		registerPswTake();
	}
		
	//确认密码验证；
	oinput[3].onblur = function(){
		registerPswAgTake();
	}

//账户手机号码验证
function registernNameTake() {
		var _this = oinput[0];
		var name = oinput[0].value;
		
		if(name == ''){
			_this.style.borderColor = "#f20266";
			return true;
		}else if(/^[1][358][0-9]{9}$/.test(name)){
			_this.style.borderColor = "#ccc";
			flag1 = true;
			return false;
		}
};
//密码验证；
function registerPswTake(){
		var _this = oinput[2];
		var name = oinput[2].value;
		var tishi = document.querySelector(".hxy-active");
		if(name == ''){
			_this.style.borderColor = "#f20266";
			return true;
		}
		else if(/[a-z0-9A-Z]{6,20}$/.test(name)){
			flag2 = true;
			_this.style.borderColor = "#ccc";
			tishi.innerHTML = "";
			return false;
		}else{
			_this.style.borderColor = "#f20266";
			tishi.style.color = "#f20266";
			tishi.innerHTML = "请输入6到20位字母和数字的组合的密码";
		}
};
//确认密码
function registerPswAgTake(){
		var _this = oinput[3];
		var name = oinput[3].value;
		var tishi = document.querySelector(".hxy-active2");
		if(name == ""){
			_this.style.borderColor = "#f20266";
			return true;
		}else if(name === oinput[2].value){
			flag3 = true;
			_this.style.borderColor = "#ccc";
			tishi.innerHTML = "";
		}else{
			_this.style.borderColor = "#f20266";
			tishi.style.color = "#f20266";
			tishi.innerHTML = "请正确匹配密码";
		}
};






})();