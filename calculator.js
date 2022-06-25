document.write('<a href="https://github.com/chuksmic/mic-calculator-task.git"> Go to Github Repo</a>');

alert("this is a displayless calculator." +"\r\n"+ "Link to the repo will appear after the operation has been completed.")
var num1 = parseInt(prompt("Enter your first number:"));
var opr = (prompt("What operation do you want to run?"+" "+"("+" "+"+"+" "+","+" "+"-"+" "+","+" "+"*"+" "+","+" "+"/"+" "+")"));
var num2 = parseInt(prompt("Enter your second number:"));
var a = Number(num1) + Number(num2);
var b = Number(num1) / Number(num2);
var c = Number(num1) * Number(num2);
var d = Number(num1) - Number(num2);


if (opr === "+"){
    confirm("Your answer is: " + (a) + ". Refresh or click F5 to run another operation");
}
else if (opr === "/"){
    alert("Your answer is: " + (b) + ". Refresh or click F5 to run another operation");
}
if (opr === "*"){
    alert("Your answer is: " + (c) + ". Refresh or click F5 to run another operation");
}
if (opr === "-"){
    alert("Your answer is: " + (d) + ". Refresh or click F5 to run another operation");
}

document.write('<a href="https://github.com/chuksmic/mic-calculator-task.git"> Go to Github Repo</a>');