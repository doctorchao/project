function * dosomething(){
    console.log("周青蓉")
    yield console.log("蒋林芝")
    let one = yield "return"
    console.log(one)
    yield console.log("吴芊盈")
    yield console.log("韩佳人")
}
var iterator = dosomething()
// iterator.next()
// iterator.next()
// iterator.next("史瑞雪")
// iterator.next()
for(item of iterator){
    item
}