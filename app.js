let result = document.getElementById("result")
function genotp(){
    let otp = Math.round(Math.random()*100000)
    result.innerText = `Your OTP is ${otp}`
    console.log(otp)
}
