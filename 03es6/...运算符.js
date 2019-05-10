var girl = {
    name: '周青蓉',
    sex: 'girl'
}
var gf = {
    owner: 'me'
}
// gf.name = girl.name
// gf.sex = girl.sex

// for (key in girl) {
//     gf[key] = girl[key]
// }


// Object.assign(gf, girl)

gf = {
    ...gf,
    ...girl
}

console.log(gf)