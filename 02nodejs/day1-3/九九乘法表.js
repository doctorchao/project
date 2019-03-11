var str ="";
for(var i = 1;i <= 9;i++){
    for(var j=1;j<=i;j++){
        str += j + "*" + i + "=" + j*i+"\t";
    }
    str+="\n";
}
console.log(str);