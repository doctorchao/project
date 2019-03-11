var arr = document.getElementsByTagName("input")
var abc = document.getElementById("abc")
console.log(arr)
abc.onclick = function(){
    axios.post("/register",{
        name:arr[0].value,
        email:arr[1].value,
        password:arr[2].value
    }).then(res =>{
        console.log(res.data.msg)
        alert("234")
        // if(res.data == 200){
        //     alert(res.data.msg)
        //     top.location.href="http://localhost:3000/"
        // }else if(res.data == 400){
        //     alert(res.data.msg)
        // }else{
        //     alert(res.data.msg)
        // }

    })
}