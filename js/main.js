
let gnum=parseInt(prompt("enter guess 1 to 10 number inclusive"))
let random=function(gnum){
    let num=Math.ceil(Math.random()*10);
    document.write("Random number="+num+" ");


    if(gnum==num){
        document.write('Matched');
    }
        else{
         document.write('Not matched, your number = '+gnum);
        }
    


}

random(gnum);