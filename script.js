// get elements into variable

var inputEle = document.getElementById("input");
var buttonEle = document.getElementById("btn");
var msgEl = document.getElementById("msg");

// Events 

buttonEle.onclick = function() {

    // get value from input 
    var inputValue = inputEle.value;
   // console.log(inputValue);

   if(inputValue != "") {
    // put input Value into P
    msgEl.innerHTML = inputValue;
    
    // empty input value
    inputEle.value ="";
    } else {
        alert("Please enter Msg!");
        return;
    }
    alert("Msg Added Successfully!")
}