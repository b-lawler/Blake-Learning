var fib = function(){
    var a=1;
    var b=2;
    var total=0;
    while(a<4000000 && b<4000000){
        if(b%2===0){
            total+=b;
            console.log(total);
        }
        b=a+b;
        a=b-a;
    }
    return total;
};
console.log(fib());