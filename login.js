if(localStorage.getItem("email")) {
    window.location.replace("../index.html")
}

const loginForm = document.getElementById("loginForm")
const inputs = document.querySelectorAll("input")
loginForm.addEventListener("submit",(e)=> {
    e.preventDefault();
    if(!inputs[0].value||!inputs[1].value) {
    return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing details!",
    });   
    } 
    localStorage.setItem("email",inputs[0].value)
    window.location.replace("../index.html")
})