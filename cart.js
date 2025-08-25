const tbody = document.querySelector(".body")
let cartProducts = JSON.parse(localStorage.getItem("cart"))
console.log(cartProducts)
function getCartProducts () {
tbody.innerHTML=``

cartProducts.forEach((item,index) => {

    tbody.innerHTML+=`
    <tr>
    <td>${index+1}</td>
    <td><img src=${item.product.image[0]} style="width:100px;" alt=""/></td>
    <td>${item.product.name}</td>
    <td>${item.product.offerPrice}$</td>
    <td>${item.quentity}</td>
    <td onclick= "removeFromCart('${item.product._id}')" style="cursor:pointer;"><i class="fa-solid fa-xmark"></i></td>

    <tr>
    `
});
}
getCartProducts()

function removeFromCart(id) {
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    cartProducts= cartProducts.filter((item)=> String(item.product._id)!==String(id))
    localStorage.setItem("cart",JSON.stringify(cartProducts))
    getCartProducts()
    getTotalAmount()
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});



}
/*------------------------------------------------------------------------ */
const totalCart = document.getElementById("totalCart")
function getTotalAmount() {
  let sum = 0;
  cartProducts.forEach((item)=> {
    sum+=item.product.offerPrice*item.quentity
  })
  totalCart.innerHTML = `total cart price:${sum.toFixed(2)}$`

}
getTotalAmount()
const menu_icon3 = document.getElementById("menu-icon3")
const drop3 = document.getElementById("drop3")
menu_icon3.addEventListener("click",()=> {
  drop3.classList.toggle("d-none")
  drop3.classList.toggle('d-block')
  menu_icon3.classList.toggle("border","p-5")

})
/*--------------------------*/
const cartD = document.querySelectorAll("#cart")
cartD.forEach((item)=> item.innerHTML = `cart(${JSON.parse(localStorage.getItem("cart")).length})`)