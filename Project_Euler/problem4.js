var pal=function(min,max){
    var total=0;
    var forward=0;
    var backward="";
    var largest = "";
    for(var x=min; x<max; x++){
        for(var y=min; y<max; y++){
            total=x*y;
            forward=total.toString();
            for(var i=forward.length-1; i>-1; i--){
                backward+=forward[i];
            }
            if(backward == forward && Number(forward)>Number(largest)){
                largest=forward;  
            }
            backward="";
        }
    }
    return largest;
};
console.log(pal(100,1000));