let arr=[-4,-1,0,3,10];
let [a,b,c,d,e]=[-4,-1,0,3,10];
console.log(arr);
function reu(params) {
    return[a*a,b*b,c*c,d*d,e*e]
}
    arr1=[a*a,b*b,c*c,d*d,e*e]
console.log(reu());
for(let i=0;i<arr1.length;i++){
    let k;
    for(j=0;j<5;j++){
        if(arr1[i]<arr1[j])
         {
             k=arr1[j];
             arr1[j]=arr1[i];
             arr1[i]=k;
         }
    }
}
console.log(arr1);



