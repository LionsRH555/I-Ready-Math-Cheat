var a = document.createElement("div");
var num1 = document.getElementsByClassName("number")[0];
var num2 = document.getElementsByClassName("number")[1];
a.innerHTML = "<h2>Calculator</h2> <input placeholder='number 1' class='number'> <br> <input placeholder='number 2' class='number'> <br> <button onclick='alert(num1+num2)'>Add</button> <br> <button onclick='alert(num1-num2)'>Subtract</button> <br> <button onclick='alert(num1*num2)'>Multiply</button> <br> <button onclick='alert(num1/num2)'>Divide</button> <br> <button onclick='alert(Math.pow(num1, num2))'>Exponent</button> <br> <button onclick='alert(Math.sin(num1))'>Sin</button> <br> <button onclick='alert(Math.cos(num1))'>Cos</button> <br> <button onclick='alert(Math.tan(num1))'>Tan</button>";
a.style.borderRadius = "20px";
a.style.border = "3px ridge black";
