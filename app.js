const contador = document.getElementById("contador");
const minusBtn = document.getElementById("minus-btn");
const plusBtn = document.getElementById("plus-btn");
const extraNumber = document.getElementById("extra-number");
const addToBagBtn = document.getElementById("add-to-bag-btn");
const shoppingCart = document.getElementById("shopping-cart");
const shoppingCartItems = document.getElementById("shopping-cart-items");
const numberOfItemsAddedToBag = document.getElementById(
  "number-of-items-added-to-bag"
);
const empty = document.getElementById("empty");
const bag = document.getElementById("bag");
const actualPrice = document.getElementById("actual-price");
const PreviousPrice = document.getElementById("previous-price");
const currentDicount = document.getElementById("discount");
let btnHasBeenClicked = false;
let currentPrice = 125;
let pastPrice = 250;
let count = 0;
let dicount = 50;
currentDicount.textContent = `${dicount}%`;
PreviousPrice.textContent = `$${pastPrice}.00`;
actualPrice.textContent = `${currentPrice}.00`;

addToBagBtn.addEventListener("click", function () {
  btnHasBeenClicked = true;
  
    
  try {
    if (count > 10) {
      throw new Error("No puedes agregar más de 10 artículos en tu compra.");
    }

    // Este alert se ejecutará solo si no hay error
  } catch (error) {
    // Este alert se mostrará en caso de error
    alert(error.message);
  }

  if (btnHasBeenClicked === true && count > 0 ) {
    extraNumber.textContent = count;
    empty.style.display = "none";
    shoppingCartItems.innerHTML = `
                <img src="/images/image-product-1-thumbnail.jpg" alt="" class="square">
                <div class="total-amount">
                  <p>Fall Limited Edition <br> Sneakers</p>
                  <p  class="number-of-items-added-to-bag">${currentPrice} x ${count} = ${125 * count}</p>
                </div>
                <button class="trash" id="trash"><i class="fa-solid fa-trash fa-xl trash-can"></i></button>
    `;
    
    const trashBtn = document.getElementById("trash");
    trashBtn.addEventListener("click", function(){
    shoppingCartItems.innerHTML = `<p class="empty" id="empty">Cart is Empty</p>`
    extraNumber.textContent = ''
    }) 
    
    count = 0
    updateCount()
  }
});
function updateCount() {
  contador.textContent = count;

  if (count === 0) {
    minusBtn.disabled = true;
    addToBagBtn.disabled = true;
  } else {
    minusBtn.disabled = false;
    addToBagBtn.disabled = false;
  }
}

minusBtn.addEventListener("click", function () {
  count--;
  updateCount();
});
plusBtn.addEventListener("click", function () {
  count++;
  updateCount();
});
bag.addEventListener("click", function () {
    
    if(shoppingCart.style.display === "block"){
        shoppingCart.style.display = "none";
    }else{
        shoppingCart.style.display = "block"; 
    }
});



// carrousel
const modal = document.getElementById("modal")
const openImg = document.querySelectorAll(".open-img")
const images = document.querySelectorAll(".carrousel-img")
let currentIndex = 0;
images[currentIndex].classList.add("active")

function mostrarImagen(index){
  images.forEach(function(image){
    image.classList.remove("active")
  })
  images[index].classList.add("active")
}

function openModal(index){
  currentIndex = index
  mostrarImagen(currentIndex)
  modal.style.display = "flex"
}
openImg.forEach(function(thumbnail, index){
  thumbnail.addEventListener("click", function(){
    openModal(index)
  })
})

const nextBtn = document.getElementById("next").addEventListener("click", function(){
  currentIndex = (currentIndex + 1) % images.length
mostrarImagen(currentIndex)
})


const prevBtn = document.getElementById("prev").addEventListener("click", function(){
  currentIndex = (currentIndex - 1 + images.length) % images.length
  mostrarImagen(currentIndex)
})
const closeBtn = document.getElementById("close-btn").addEventListener("click", function(){
  modal.style.display = "none"
})
window.addEventListener("click", function(event){
if(event.target === modal){
  modal.style.display = "none"
}
})
const bigImgContainer = document.getElementById("big-img-container")
const imagenesJuntas = document.getElementById("imagenes-juntas")


imagenesJuntas.addEventListener("mouseover", function(e){
  if (e.target !== e.currentTarget) {
     const index = e.target.getAttribute("data-index");
     bigImgContainer.innerHTML = `<img src="/images/image-product-${index}.jpg"  alt="Shoes"  id="big-img" class="big-img"></img>`
  }
  
})



updateCount();

