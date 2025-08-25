
const id = window.location.search.split("=")[1]
const singleProduct = productsDummyData.find((product)=> String(id)===String(product._id))
const singleContainer = document.getElementById("singleProduct")
singleContainer.innerHTML =` 
      
<div class=" w-100 w-md-50  " style="max-width: 400px;">
            <img src=${singleProduct.image[0]} class=" w-100"   alt="" />
        </div>
        <div class=" d-flex flex-column gap-2" style="width: 600px;">
            <h1>${singleProduct.name}</h1>
            <div class=" d-flex gap-1 align-items-center">
                <div>
                    <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                    <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                    <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                    <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                    <i class="fa-regular fa-star"></i>
                </div>
                <span>(4.5)</span>
            </div>
            <p>${singleProduct.description}</p>
            <div>
                <span class=" fs-2 fw-bold">${singleProduct.offerPrice}$</span>
                <span class="text-decoration-line-through">${singleProduct.price}$</span>
            </div>
            <hr>
            <div>
                <p>
                    brand: ${2025}
                </p>
                <p>category: ${singleProduct.category}</p>
            </div>
            <div id="addToCart" class="">
                <button class=" bg-warning py-2 px-4 text-capitalize text-white">add to cart</button>
            </div>
        </div>
`
const addToCartBtn = document.getElementById("addToCart")
addToCartBtn.addEventListener("click",()=>{
Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "add!"
}).then((result) => {
  if (result.isConfirmed) {
        const oldCart = JSON.parse(localStorage.getItem("cart"))||[]
        const product = oldCart.find((item)=>item.product._id===singleProduct._id)
        console.log(product)
        console.log(oldCart)
        if(!product) {
            localStorage.setItem("cart",JSON.stringify([...oldCart,{product:singleProduct,quentity:1}]))

        }else {
            oldCart.forEach((item)=> {
                if(item.product._id===singleProduct._id) {
                    item.quentity=item.quentity+1;
                }
            })
            localStorage.setItem("cart",JSON.stringify([...oldCart]))
        }
        Swal.fire({
            title: "added to cart!",
            text: "Your product has been added",
            icon: "success"
        });
    
  }
});})
const menu_icon2 = document.getElementById("menu-icon2")
const drop2 = document.getElementById("drop2")
menu_icon2.addEventListener("click",()=> {
  drop2.classList.toggle("d-none")
  drop2.classList.toggle('d-block')
  menu_icon2.classList.toggle("border","p-5")

})
/*---------------------------*/
const cartC = document.querySelectorAll("#cart")
cartC.forEach((item)=> item.innerHTML = `cart(${JSON.parse(localStorage.getItem("cart")).length})`)
/*-----------------------------------------------*/
const relatedProducts = productsDummyData.filter((product)=> {
    if(String(product.category)===String(singleProduct.category)&&(singleProduct._id!==product._id)) {
        return true
    }
    return false
})
const related_products = document.getElementById("relatedProducts")
relatedProducts.forEach((product)=> {
    related_products.innerHTML+=`
            <div  data-aos="fade-up" class=" card rounded-3 shadow-sm"  style="width: 230px; overflow: hidden; cursor:pointer;" onClick="toSingleProduct('${product._id}')">
                <img src=${product.image[0]} class="bg-body-secondary"  alt="" style="width:100%; height: 250px;">
                <div class="p-2">
                <h3 class="fw-bold fs-5">${product.name}</h3>
                <p class="lh-sm ">${product.description.slice(0,80)}...</p>
                <div class=" d-flex align-items-center gap-1">
                    <span>
                        4.5
                    </span>
                    <div>
                        <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                        <span  class="text-warning"><i class="fa-solid fa-star"></i></span>
                        <span  class="text-warning"><i class="fa-solid fa-star"></i></span>
                        <span  class="text-warning"><i class="fa-solid fa-star"></i></span>
                        <span><i class="fa-regular fa-star"></i></span>
                    </div>
                </div>
                <div class=" d-flex justify-content-between align-items-center">
                        <span class=" fw-bold fs-3">${product.price}$</span>
                        <button  class=" border rounded-2 p-2 bg-transparent text-capitalize">
                            buy now
                        </button>
                </div>
                </div>
            </div>    

    `
    
})
