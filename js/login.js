
function validate(){
	var user = document.getElementById("username").value;
	var key = document.getElementById("password").value;

	if ( user == "rafael" && key == "123"){
		window.location = "home-admin.html";
		return false;
	}

	if 	( user == "estudiante" && key == "123"){
		window.location = "home-student.html";
		return false;
	}

	if 	( user == "acudiente" && key == "123"){
		window.location = "home-tutor.html";
		return false;
	}

	if 	( user == "maestro" && key == "123"){
		window.location = "home-teacher.html";
		return false;
	}

	else{
		document.getElementById("alert-user").style.display ="inherit";
		document.getElementById("alert-password").style.display ="inherit";
	}
}