

let form=document.querySelector(".login-form")
let names =document.querySelector("#name")
let email =document.querySelector("#email")
let password =document.querySelector("#password")
let confirmPassword =document.querySelector("#passwordConfirm")
let button =document.querySelector(".submit")
let nameeErrorMesg=document.querySelector("#nameError")
let emailErrorMesg=document.querySelector("#emailError")
let passwordErrorMesg=document.querySelector("#passwordError")
let cpasswordErrorMesg=document.querySelector("#cpasswordError")



button.addEventListener("click",(event) =>
{
    event.preventDefault()

if(nameeErrorMesg.innerText=="" && emailErrorMesg.innerText=="" && passwordErrorMesg.innerText==""&& cpasswordErrorMesg.innerText=="")
{
    window.location.href="./logedin.html"
    
}


})



names.addEventListener("keyup",nameValidate)
function nameValidate(event)
{
    
    let nameRegex=/^[a-zA-Z0-9]+$/
    let nameInput=event.target.value
    console.log(nameInput.length)
    if (nameInput.length <3 || nameInput.length >20) 
    {
        nameeErrorMesg.innerText="Name must be between 3 - 20 characters"
        return false

    }
    else if(nameInput.length==0)
    {
        nameeErrorMesg.innerText=" Name cannot be empty."
        return false
    }
    else if(!nameRegex.test(nameInput))
    {
        nameeErrorMesg.innerText=" invalid Name"
        return false
    }
    else
    {
        nameeErrorMesg.innerText=""
        return true

    }
}
email.addEventListener("keyup",emailValidate)
function emailValidate(e){
    let emailRegex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ 
    let emailInput=e.target.value
    if (emailInput.length==0)
    {
        emailErrorMesg.innerText="The email should not be Empty"
        return false

    }
    else if(!emailRegex.test(emailInput))
    {
        emailErrorMesg.innerText="Please enter valid email"
        return false
    }
    else{
        emailErrorMesg.innerText=""

    return true
    }
    
}
password.addEventListener("keyup",passwordValidate)
function passwordValidate (e) {
    let passwordRegex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/
    let passwordInput=e.target.value
    if(!passwordRegex.test(passwordInput))
    {
        passwordErrorMesg.innerText="At least one number ,At least one uppercase character ,At least one lowercase character"
        return false
    }
    if (passwordInput.length==0)
    {
        passwordErrorMesg.innerText="Password cannot be empty."
        return false

    }
    if (passwordInput.length <6 ||passwordInput.length >10  )
    {
        passwordErrorMesg.innerText="Password must be between 6-10 characters long"
        return false

    }
    else
    {
        passwordErrorMesg.innerText=""
        return true
    }
       


}
confirmPassword.addEventListener("keyup",confirmgivenPassword)
 function confirmgivenPassword(e){
    let cpasswordInput=e.target.value
    let pwd=document.getElementById("password").value
    if(cpasswordInput!=pwd)
    {
        cpasswordErrorMesg.innerText="The password does not matched"
        return false
    }
    else
    {
        cpasswordErrorMesg.innerText=""
        return true
    }



 }















