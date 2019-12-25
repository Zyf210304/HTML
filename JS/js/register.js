
function initDate(){
	createCode();
	//js 给fav添加方法
	var favs = document.getElementsByName("fv");
	for (var i = 0; i < favs.length; i++) {
		var fav = favs[i];
		// alert(fav)   fav.onclick = checkFav(); 这样的话 直接执行 这里要写方法名 不要()  因为没有()如果传参数怎么办???????
		// fav.onclick = checkFav;
		fav.onclick = function(){
			checkFav();
		}
		
	}
}

function checkFav() {
	var favs = document.getElementsByName("fv");
	var span = document.getElementById("fvSpan");
	var ischoose = false;
	for (var i = 0; i < favs.length; i++) {
		if (favs[i].checked) {
			ischoose = true;
		} 
	}
	if(ischoose) {
		span.innerHTML = "" ;
	} else {
		span.innerHTML = "至少选择一项";
	}
	
	// return ischoose;
}



function createCode() {
	
	var code = Math.floor(Math.random()*9000 + 1000);
	var codeSpan = document.getElementById("codeSpan");
	codeSpan.innerText = code;
	
}

/* 校验 */
//注册确认校验
function checkAll() {
	if(!checkUname()) {
		alert("请确认用户名填写");
		return false;
	} 
	
	if(!(checkRePwd() &&checkPwd())) {
		alert("密码不正确");
		return false;
	}
	//......... 
}


//验证用户名
function checkUname() {
	var bool = false;
	var unameText = document.getElementById("unmaeInp").value;
	var unameSpan = document.getElementById("unameSpan");
	var reg = /^[\u4e00-\u9fa5]{2,4}$/
	if (unameText == "") {
		unameSpan.innerText = "用户名为长度2-4位汉字";
		unameSpan.style.color = "red";
	} else if(reg.test(unameText)){
		unameSpan.innerText = "验证成功";
		unameSpan.style.color = "green";
		bool = true;
	} else {
		unameSpan.innerText = "用户名为长度2-4位汉字";
		unameSpan.style.color = "red";
	}
	return bool;
}

//验证密码
function checkPwd() {
	var pwdInp = document.getElementById("pwd").value;
	var reg = /^\w{6,8}$/;
	var pwdSpan = document.getElementById("pwdSpan");
	if (reg.test(pwdInp)) {
		pwdSpan.innerText = "";
		pwdSpan.style.color = "green";
		checkRePwd();
		return true;
	} else{
		pwdSpan.innerText = "密码为6-8位字符数字下划线组合";
		pwdSpan.style.color = "red";
		checkRePwd();
		return false;
	}
	
}

function checkRePwd(){
	var pwdInp = document.getElementById("pwd").value;
	var rePwdInp = document.getElementById("rePwd").value;
	var rePwdSpan = document.getElementById("rePwdSpan");
	if (pwdInp == rePwdInp) {
		rePwdSpan.innerText = "";
		rePwdSpan.style.color = "green";
		return true;
	} else{
		rePwdSpan.innerText = "两次密码不一致";
		rePwdSpan.style.color = "red";
		return false;
	}
}

function checkPhone(){
	return checkField("phone",/^1\d{10}$/);
}

function checkEmail(){
	return checkField("email",/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)$/);
}

function checkAddress() {
	var sel = document.getElementById("address").value;

	var span = document.getElementById("addressSpan");
	if (sel!= -1) {
		span.innerHTML = "";
		span.style.color = "green";
	} else{
		span.innerHTML = "请选择籍贯";
		span.style.color = "red";
	}
	
}



function checkIsAgree(check) {
	document.getElementById("sub").disabled = !check.checked;
}

/* -------------------------- ----------------------------- */
//封装校验 相同保留 不同传参
function checkField(id,reg) {
	var inp = document.getElementById(id);
	var inpValue = inp.value;
	var alt = inp.alt;
	
	var span = document.getElementById(id + "Span");
	
	if (reg.test(inpValue)) {
		span.innerHTML = "ok";
		span.style.color = "green";
		return true;
	} else{
		span.innerHTML = alt + "不符合规则";
		span.style.color = "red";
		return false;
	}
	
	
}