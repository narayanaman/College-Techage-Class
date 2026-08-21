function calculate() {
    let num1 = document.getElementById("num1");
    let a = parseInt(num1.value);
    let num2 = document.getElementById("num2");
    let b = parseInt(num2.value);
    let num3=document.getElementById("num3");
    let c=parseInt(num3.value);
    let num4=document.getElementById("num4");
    let d=parseInt(num4.value);
    let res = document.getElementById("result");
    
    let x;
    if(a>b){
        if(a>c){
            if(b>c){
                x=b
            }else{
                x=c;
            }
       }
    }
    // if(a<b){
    //     if(a<c){
    //         x=a;
    //     }else{
    //         x=c;
    //     }
    // }else{
    //     if(b<c){
    //         x=b;
    //     }else{
    //         x=c;
    //     }
    // }
    res.innerHTML=x;
}





    // res.innerHTML=a>b?a:b;
    //     if (a > b)
    //         res.innerHTML = a;
    //     else
    //         res.innerHTML = b;
    // }
const sum=()=>{
    console.log("Hello EveryOne");
}