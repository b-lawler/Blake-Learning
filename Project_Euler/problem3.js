var prime=function(value){
    var largeFac=0;
    for(var x=2; x<value; x++){
        if(value%x===0){
            value=value/x;
        }
    }
    return value;
};
console.log(prime(600851475143));