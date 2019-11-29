const s=new Set();
var k;
[2,3,7,5,2,6,9,7,0].forEach(x=>s.add(x));
console.log(s);
function big(params) {
for(let i of s){
    for(let j of s){
        if(i<j)
        k=j;    
    }
}
}
big();
const promise=new Promise((resolve,reject)=>{
    if(s.delete(k)){
    console.log('9已被成功删除！');
    }else{
    console.log('删除数据时出现错误！');

}
})
s.delete(k);