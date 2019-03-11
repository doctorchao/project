var arr = document.getElementsByTagName("input")
console.log(arr)
var abc = document.getElementById("abc")
abc.onclick = function(){
    axios.post("/registe",{
        name:arr[0].value,
        email:arr[1].value,
        password:arr[2].value
    }).then( res =>{
        console.log(res);
    })
}