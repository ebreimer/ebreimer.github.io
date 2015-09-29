function clickHandler(){
	var field = document.getElementById("name");
	if (field.value == "") {
		var newNode = document.createElement("span");
		newNode.innerHTML = "Please enter name.";
		newNode.style.color = "red";
		newNode.id = "name_error";
		field.parentNode.insertBefore(newNode, field.nextSibling);
		var label = document.querySelectorAll('[for="name"]')[0];
		label.style.color = "red";
	}
	else {
		var label = document.querySelectorAll('[for="name"]')[0];
		label.style.color = "black";
		var message = document.getElementById("name_error");
		message.parentNode.removeChild(message);		
	}
}