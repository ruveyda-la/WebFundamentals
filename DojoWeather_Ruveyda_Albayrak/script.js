function acceptbutton (elemclass){
var element= document.querySelector(elemclass)
element.remove()
}

function CtoF (elemId){
var temp = document.querySelector(elemId)
var tempvalue= Number(temp.innerText)
var newtemp= Math.round(tempvalue * 1.8 + 32)
temp.innerText = newtemp
}

function FtoC (elemId){
    var temp = document.querySelector(elemId);
    var tempvalue= Number(temp.innerText);
    var newtemp = Math.round ((tempvalue-32)* 5/9);
    temp.innerText = newtemp;
}

var arr = ["temp1","temp2","temp3","temp4","temp5","temp6","temp7","temp8"]

function choosedegree (element){
    for (var i=0; i<arr.length; i++){
        if ( element.value == "F"){
                CtoF("#" + arr[i]);       
        }  
        else {
                FtoC("#" + arr[i])
        }  
    }
}