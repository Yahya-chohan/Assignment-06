let result = document.getElementById("result")
function genotp(){
    let otp = Math.round(Math.random()*1000000)
    result.innerText = `Your OTP is ${otp}`
    console.log(otp)
}
