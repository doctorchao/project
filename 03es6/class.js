// 构造函数复习
// function MakePerson(name, sex, shengao) {
//     this.name = name;
//     this.sex = sex;
//     this.shengao = shengao;
// }
// MakePerson.prototype.nation = "中国人";
// console.dir(MakePerson)
// var person1 = new MakePerson("王力宏", "1", "185");
// var person2 = new MakePerson("柳岩", "0", "165");
// console.log(person1);
// console.log(person2.nation);

// function makeperson(name,sex){
//     this.name = name;
//     this.sex = sex;
// }
// makeperson.prototype.feature = "美女"
// var a =new makeperson("周青蓉","girl")
// console.dir(a)

// class 类声明
// class makeperson{
//     constructor(name,sex){
//         this.name = name;
//         this.sex = sex;
//     }
// }
// makeperson.prototype.feature = "美女";
// var a = new makeperson("周青蓉","girl")
// console.log(a)
// console.log(a.feature)


//  继承
// function makeperson(name,sex){
//     this.name = name;
//     this.sex = sex;
// }
// function newperson(name,sex){
//     makeperson.call(this,name,sex)
// }
// makeperson.prototype.feature = "美女";
// newperson.prototype.feature = makeperson.prototype.feature
// console.log( new newperson("周青蓉","girl"))
// console.log( new newperson("周青蓉","girl").feature)


//  call apply
// var obj = {
//     name:"周青蓉",
//     man:"liu",
//     hsb(who){
//         console.log(who)
//         console.log(this.man)
//     }
    
// }
// var obj1 = {
//     name:"蒋林芝",
//     man:"chao"
// }
// // obj.hsb.call(obj1)
// // obj.hsb.apply(obj1)
// obj.hsb.call(obj1,"lmc")
// obj.hsb.apply(obj1,["lmc"])

class makeperson{
    constructor(name,sex){
        this.name = name;
        this.sex = sex;
    }
}
makeperson.prototype.feature = "美女";
class newperson extends makeperson{
    constructor(name,sex){
        super(name,sex)
    }
}
var a =new newperson("吴芊盈","girl")
console.log(a.feature)