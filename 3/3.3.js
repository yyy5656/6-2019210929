const map=new Map()
map.set('白浚骁',19)
map.set('杨颜烯',18)
map.set('李四',55)
map.set('张五',22)
var sum=0;
for(let values of map.values()){
sum=sum+values;}
const promisee = new Promise((resolve,reject)=>{
    if(sum){
    console.log(sum);
    }else{
    }
})




