var str = '';
function show(n){
	document.getElementById("disp").value += n;  /*Adds the input to display and str*/
	str += n;
}
function backSpace(){
	var data = document.getElementById("disp").value;
	document.getElementById("disp").value = data.substring(0, data.length - 1); /* Takes the string and gives substring removing last char*/
	str = str.substring(0,data.length-1);
}

function clearScreen(){
	document.getElementById("disp").value = "";
	str = "";
}
/*This is for = function
	If you use keyboard keys for numbers it shows error*/
function find(){
	if(document.getElementById("disp").value==''){
		alert("Use the keys on the screen for calculation");
		document.getElementById("disp").value = "";
	}
	else{
		try {
			document.getElementById("disp").value = eval(str);
		}
		catch(err) {
			alert("  Invalid expression! \nPlease check the input");
    		document.getElementById("disp").value = "";
		}
	}
}