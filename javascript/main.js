function button_push(btn, value) {
    btn.addEventListener('click', (e) => {
        input.value += value;
    });
}

function detectCant(str, symbol){
    var j=0;
    for(i=0;i<str.length;i++){
        if(str[i]==symbol){
            j++;
        }
    }
    return j;
}

function exponentation (str){
    var x =detectCant(str,"^");
    console.log(x);
    for(var i=0;i<x;i++){
       str = str.replace("^","**");
    }
    return str;
}
function exponentation10 (str){
    var x =detectCant(str,"E");
    console.log(x);
    for(var i=0;i<x;i++){
       str = str.replace("E","*10**");
    }
    return str;
}

function sqrtoperation(str){
    var positionstart = str.indexOf("√");
    var positionend;
    var result;
    var j=0;
    if(positionstart!=-1 && str[positionstart+1]!="("){
        for(var i=positionstart+1;!isNaN(str[i])&&str[i]!="^";i++){
            positionend = i;
            j++;
        }
        var sqrtoper= str.substr(positionstart+1,j);
        console.log(sqrtoper);
        var entireSqrtstr=str.substring(positionstart,positionend+1);
        console.log(entireSqrtstr);
        for(var i of sqrtoper){
            if(i=="√"){
                sqrtoperation(sqrtoper);
            }else if(i=="^"){
                exponentation(sqrtoper);
            }
        }
        result=Math.sqrt(sqrtoper);
        console.log(result);
        console.log(str.replace(entireSqrtstr,result));
        return str.replace(entireSqrtstr,result);
    }else if(str[positionstart+1]=="("){

        for(var i=positionstart+1;str[i]!=")";i++){
            positionend = i;
            j++;
        }
        var sqrtoper= str.substr(positionstart+1,j);
        console.log(sqrtoper);
        var entireSqrtstr=str.substring(positionstart,positionend+1);
        console.log(entireSqrtstr);
        for(var i of sqrtoper){
            if(i=="√"){
                sqrtoperation(sqrtoper);
            }else if(i=="^"){
                exponentation(sqrtoper);
            }
        }
        result=Math.sqrt(sqrtoper);
        console.log(result);
        console.log(str.replace(entireSqrtstr,result));
        return str.replace(entireSqrtstr,result);
    }
}
const input = document.querySelector('#calc');
const output= document.querySelector('#result')
const submit = document.querySelector('.submit')
input.value = "";
const buttons = document.querySelectorAll(".container-buttons-basics .btn");
console.log(buttons.length);
for (var btn of buttons) {
    button_push(btn, btn.innerText);
}

submit.addEventListener('click', (e) => {
    var str = input.value;
    var sqrtcant = detectCant(str,"√");
    for(var i=0;i<sqrtcant;i++){
         str = sqrtoperation(str);
    }
    str = exponentation(str);
    str = exponentation10(str);
    console.log(str);
    try{
        result.innerText=eval(str);
        input.value=eval(str);
    }catch(err){
        result.innerText="Syntax Error";
    }
    
});



