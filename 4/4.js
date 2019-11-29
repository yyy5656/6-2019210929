
var term=1;
let myPow = (x,n)=>{
if(n>=0){ 
    let term=1;
    for(let i=0;i<n;i++){
       
       term=term*x;
    }    
    return term;
}
else 
{
    let term=1;
    for(let i=0;i>n;i--){
        term=term*(1/x);
    }
    return term;
}
};
let result1=myPow(2,10);
console.log(result1);
console.log(myPow(2,-2));
console.log(myPow(2,0));
