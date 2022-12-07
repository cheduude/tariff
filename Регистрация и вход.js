document.getElementById("Cnopka").onclick = function(){
	var UserName = document.getElementById("UserName").value;
	var NewPassword = document.getElementById("NewPassword").value;
	if (UserName == "" && NewPassword == ""){
		alert("Заполните поля!")
	}
	else if (UserName == ""){
		alert("Заполните поле Имя")
	}
	else if (NewPassword == ""){
		alert("Заполните поле Пароль")
	}
	else{
		var name = ("Имя: " + UserName + " Пароль: " + NewPassword + " || Вы зарегесрированы теперь войдите в аккаунт")
		alert(name)
	}
}
document.getElementById("cnopka").onclick = function(){
	var login = document.getElementById("login").value;
	var password = document.getElementById("password").value;
	if (login == "Удевительное Обучение IT" && password == "keek12"){
		document.write("Вы авторезированы.")
	}
	else if (login == "Удевительное Обучение IT1" && password == "keek12"){
		document.write("Вы авторезированы.(1)")
	}
	else	if (login == "" && password == ""){
		alert("Заполните поля!")
	}
	else if (login == ""){
		alert("Заполните поле Имя")
	}
	else if (password == ""){
		alert("Заполните поле Пароль")
	}
	else{
		alert("Ошибка синтакса")
	}
}