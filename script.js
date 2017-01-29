$(document).ready(function(){
	var a = "Ram";
	var b = "Sital";
	var c = a+ " "+b;
	console.log(c);
});


function fun(){
	var x = "this is a joke";
	var y = m+ " "+n+ " "+x;
	console.log(x);//called local variable
	console.log(y);// called local and global variable together
	
}

var m = "hello";
var n = "world";
fun();

 
