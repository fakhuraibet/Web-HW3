let data = {
  Face: {
    name: "Charlotte Tilburry Foundation",
    img: "./assets/images/foundation.jpg",
    price: 20,
  },
  Eyes: {
    name: "Pat Mcgrath Rose Desendance Eye shadow Pallete",
    img: "./assets/images/5679d12bc99de4faf1e685e819b3944c.jpg",
    price: 45,
  },
  Lips: {
    name: "Dior Lip Glow Oil (Fine Beauty's BestSeller)",
    img: "./assets/images/b8c1484aaa4bd077acd07a1d55568703.jpg",
    price: 10,
  },
};

function display(key) {
  document.getElementById("others").style.display = "block";

  let product_name = data[key]["name"];
  let product_image = data[key]["img"];
  let product_price = data[key]["price"];

  document.getElementById(
    "another"
  ).innerHTML += `<div id="cart" class="product">
  <img src="${product_image}" alt="product image" id="productimg" width="100px">
  <h2 id="productname">${product_name}</h2>
  <h2 id="productprice">${product_price} K.D</h2>
  <div >
<button id="none" onclick="removeCart()" style = "font-size: 32px">X</button>
</div>`;
}
function removeCart() {
  document.getElementById("another").style.display = "none";
}

let count = 0;
