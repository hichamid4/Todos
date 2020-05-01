var button = document.getElementById('button');
var input = document.getElementById('input');
var ul = document.getElementById('ul');
var il = document.getElementsByTagName('li');

var inputLength = function() {
	return input.value.length
}

var creatList = function() {
	var li = document.createElement("li");
		li.appendChild(document.createTextNode(input.value));
		ul.appendChild(li);
// ***********************buttonToggole**********************
	var btnDone = document.createElement("button");
	btnDone.appendChild(document.createTextNode("Done!!"));
	btnDone.classList.add("btnpadding");
	li.appendChild(btnDone);
	btnDone.onclick = done;
// **************************buttonRemove******************
	var btnDelete = document.createElement("button");
	btnDelete.appendChild(document.createTextNode("Delete!"));
	btnDelete.classList.add("btnpadding");
	li.appendChild(btnDelete);
	btnDelete.onclick = bye;


}

function done(event){
	event.target.parentNode.classList.toggle("done");
}

function bye(evt){
	evt.target.parentNode.remove();
} 


var buttonClick = function() {
	if ( inputLength() > 0 ) {
		creatList();
		input.value = "";
	}
}

var keyEnter = function() {
	if ( inputLength() > 0 && event.which === 13) {
		creatList();
		input.value = "";
	}
}


button.addEventListener("click", buttonClick);

input.addEventListener("keypress", keyEnter)
