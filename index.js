// function DelateButton(){
//    document.getElementById("result").value = "";
// }

// function Calculator(valuName){
// document.getElementById("result").value += valuName;

// }

// function answer(){

//     //  var a = document.getElementById("result").value ;
//     //  var b =eval(a);
//     //  document.getElementById("result").value = b;

//     var a = document.getElementById("result").value;
//     var b = eval(a);
//     document.getElementById("result").value = b;
// }



function answer(){

    var a = document.getElementById("result").value;
    var b = eval(a);
    document.getElementById("result").value= b;

}

function calculator(newValue){

    document.getElementById("result").value  += newValue;
}

function Deleate(){

    document.getElementById("result").value = "";
}