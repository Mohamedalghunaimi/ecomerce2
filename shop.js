const shop_container = document.getElementById("shop-container")
console.log(shop_container)
productsDummyData.forEach((product)=> {
    shop_container.innerHTML+=`
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
const menu_icon1 = document.getElementById("menu-icon1")
const drop1 = document.getElementById("drop1")
menu_icon1.addEventListener("click",()=> {
  drop1.classList.toggle("d-none")
  drop1.classList.toggle('d-block')
  menu_icon1.classList.toggle("border","p-5")

})
/*------------------------*/
const cartB = document.querySelectorAll("#cart")
cartB.forEach((item)=> item.innerHTML = `cart(${JSON.parse(localStorage.getItem("cart")).length})`)