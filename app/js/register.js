;(function(){
document.addEventListener("DOMContentLoaded",function(){
	
	var oinput=document.querySelectorAll("input");
	var btn=document.querySelector("button");
	var op=document.querySelector(".op");
	
	var wordList = localStorage.getItem('wordList');
	wordList = wordList ? JSON.parse(wordList) : [];
	var regName = wordList[wordList.length - 1];

	//通过验证登录并跳转到个人中心；
	btn.onclick = function(){
		if(flag1 == true && flag2 == true && (oinput[0].value == regName.name) && (oinput[1].value == regName.psW)){
			window.open("personalCenter.html");
			//保存登录信息；
			var yName = oinput[0].value;
			var yPsW = oinput[1].value;
			var arr = {};
			arr.name = yName;
			arr.psW = yPsW;
			//将对象转化字符串 存储；
			localStorage.setItem("Info",JSON.stringify(arr));
		}else{
			alert("账户或密码错误");
		}
	}
	
//账户手机号码验证
	oinput[0].onblur = function(){
		registernNameTake();
	}
	//密码验证；
	oinput[1].onblur = function(){
		registerPswTake();
	}
//设置全局的变量标记；
	var flag1 = false;//标记用户；
	var flag2 = false;//标记密码；
//账户手机号码验证
function registernNameTake() {
		var _this = oinput[0];
		var name = oinput[0].value;
		
		if(name == ''){
			_this.style.borderColor = "#f20266";
			op.style.color = "#f20266";
			op.innerHTML = "错误";
			return true;
		}else if(/^[1][358][0-9]{9}$/.test(name)){
			op.innerHTML = "正确";
			_this.style.borderColor = "#ccc";
			op.style.color = "green";
			flag1 = true;
			return false;
		}else{
			_this.style.borderColor = "#f20266";
			op.style.color = "#f20266";
			op.innerHTML = "错误";
		}
};		
//密码验证；
function registerPswTake(){
		var _this = oinput[1];
		var name = oinput[1].value;

		if(name == ''){
			_this.style.borderColor = "#f20266";
			return true;
		}
		else if(/[a-z0-9A-Z]{6,20}$/.test(name)){
			flag2 = true;
			_this.style.borderColor = "#ccc";
			return false;
		}else{
			_this.style.borderColor = "#f20266";
			tishi.style.color = "#f20266";
		}
};	

})
})();