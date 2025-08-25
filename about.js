const menu_icon4 = document.getElementById("menu-icon4")
const drop4 = document.getElementById("drop4")
menu_icon4.addEventListener("click",()=> {
  drop4.classList.toggle("d-none")
  drop4.classList.toggle('d-block')
  menu_icon4.classList.toggle("border","p-5")

})
/*---------------------*/
const cartB = document.querySelectorAll("#cart")
cartB.forEach((item)=> item.innerHTML = `cart(${JSON.parse(localStorage.getItem("cart")).length})`)