class Father{
    constructor(name,age,height){
    this.name=name;
    this.age=age;
    this.height=height;
    }
}
let father1=new Father('bob',38,179+'cm');
console.log(father1);
class Child extends Father{}
let child1=new Child('jack',9,'148cm');
console.log(child1);
