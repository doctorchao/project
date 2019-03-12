
var res = "";

for(var i=1; i<=9; i++){
	for(var j=1; j<=i; j++){
		res += j+"*"+i+"="+i*j;
		res += '\t';
	}
	res += '\n';
}

console.log(res);

























