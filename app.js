let step1 = document.getElementById("step1");
let step2 = document.getElementById("step2");
let step3 = document.getElementById("step3");
let step4 = document.getElementById("step4");
let step5 = document.getElementById("step5");
let nextbutton1 = document.getElementById("step1nextbutton")
let nextbutton2 = document.getElementById("step2nextbutton")
let nextbutton3 = document.getElementById("step3nextbutton")
let nextbutton4 = document.getElementById("step4nextbutton")
let previousbtn2 = document.getElementById("btn-paragraph2")
let previousbtn3 = document.getElementById("btn-paragraph3")
let previousbtn4 = document.getElementById("btn-paragraph4")
let firstStep = document.getElementById("firststep")
let secondStep = document.getElementById("secondstep")
let thirdStep = document.getElementById("thirdstep")
let fourthStep = document.getElementById("fourthstep")

let username = document.getElementById("username");
let email = document.getElementById("email");
let phonenumber = document.getElementById("number");

// let checkbox1 = document.getElementById("online")

// function check(element) {
//     const parts = element.parentElement;
//     if (checkbox1 == true) {
//         parts.style.background = "red";
//     } else {
//         parts.style.background = "yellow";
//     }
// }
// checkbox1.addEventListener("checked",(e)=>{

// })
// 
/*
step1.addEventListener("submit", e => {
    e.preventDefault();
    ValidateInputs();
    if (setSuccess) {
        step1.style.transform = "translateX(100%)"
        step2.style.transform = "translateX(0)"
    }

})

const setError = (element, message) => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");

    errorDisplay.innerText = message;
    inputcontrol.classList.add("error")
    inputcontrol.classList.remove("success")
}

const setSuccess = element => {
    const inputcontrol = element.parentElement;
    const errorDisplay = inputcontrol.querySelector(".error");


    errorDisplay.innerText = "";
    inputcontrol.classList.remove("error")
    inputcontrol.classList.add("success")

}

const ValidateInputs = () => {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const numberValue = phonenumber.value.trim();


    if (usernameValue === "") {
        setError(username, "username is required")
    } else {
        setSuccess(username)
    }

    if (emailValue === "") {
        setError(email, "email is required")
    } else {
        setSuccess(email)
    }

    if (numberValue === "") {
        setError(number, "Phone Number is required")
    } else if (numberValue.length < 11) {
        setError(number, "provide a valid phone Number")
    } else {
        setSuccess(number)
    }
}
const isValidEmail = email => {

}*/




const slidePage = document.querySelector(".slidepage");
const firstNextBtn = document.querySelector(".nextBtn");
const PrevBtnSec = document.querySelector(".prev-1");
const NextBtnSec = document.querySelector(".next-1");
const PrevBtnThird = document.querySelector(".prev-2");
const NextBtnThird = document.querySelector(".next-2");
const PrevBtnFourth = document.querySelector(".prev-3");
const NextBtnFourth = document.querySelector(".next-3");


firstNextBtn.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
})

NextBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
})

NextBtnThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-75%";
})

PrevBtnSec.addEventListener("click", function() {
    slidePage.style.marginLeft = "0%";
})

PrevBtnThird.addEventListener("click", function() {
    slidePage.style.marginLeft = "-25%";
})

PrevBtnFourth.addEventListener("click", function() {
    slidePage.style.marginLeft = "-50%";
})





// var subscriptionPage = document.querySelector(".step2")
var selector = document.querySelector(".selector")

selector.addEventListener("click", () => {
    step2.classList.toggle("yearly");
})






let step1SelectedOption = document.querySelector(".step1selected")
let step1Price = document.querySelector(".step1price")

gridContainer = document.querySelector(".grid")
let gridContent1 = document.querySelector("#grid-content1")
let gridContent2 = document.querySelector("#grid-content2")
let gridContent3 = document.querySelector("#grid-content3")

gridContent1.addEventListener("click", () => {
    gridContainer.classList.add("grid-1")
    gridContainer.classList.remove("grid-2")
    gridContainer.classList.remove("grid-3")

    step1SelectedOption.textContent = "Arcade"
    step1Price.textContent = "$9/mo"
})


gridContent2.addEventListener("click", () => {
    gridContainer.classList.add("grid-2")
    gridContainer.classList.remove("grid-1")
    gridContainer.classList.remove("grid-3")
    step1SelectedOption.textContent = "Advanced";
    step1Price.textContent = "$12/mo"
})


gridContent3.addEventListener("click", () => {
    gridContainer.classList.add("grid-3");
    gridContainer.classList.remove("grid-2");
    gridContainer.classList.remove("grid-1");

    step1SelectedOption.textContent = "Pro"
    step1Price.textContent = "$15/mo"
})