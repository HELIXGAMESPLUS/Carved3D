
let cartCount = 0;
let cartItems = [];

function openShop() {
  document.getElementById("shopPopup").style.display = "flex";
}
function closeShop() {
  document.getElementById("shopPopup").style.display = "none";
}
function openCartPopup() {
  document.getElementById("cartPopup").style.display = "flex";
  updateCartDisplay();
}
function closeCart() {
  document.getElementById("cartPopup").style.display = "none";
}

function updateSnowboard() {
  const color = document.getElementById("baseColor").value;
  const pattern = document.getElementById("pattern").value;
  const patternColor = document.getElementById("patternColor").value;
  const board = document.getElementById("snowboard");

  board.style.background = color;
  board.style.backgroundImage = pattern !== "none" ? getPattern(pattern, patternColor) : "none";
}

function getPattern(type, color) {
  if (type === "stripes")
    return `repeating-linear-gradient(45deg, ${color}, ${color} 10px, transparent 10px, transparent 20px)`;
  if (type === "dots")
    return `radial-gradient(${color} 10%, transparent 10%)`;
  if (type === "grid")
    return `linear-gradient(${color} 1px, transparent 1px), linear-gradient(to right, ${color} 1px, transparent 1px)`;
  return "none";
}

function finishDesign() {
  cartCount++;
  document.getElementById("cart-count").textContent = cartCount;
  cartItems.push({ price: 5.00 });
}

function updateCartDisplay() {
  const list = document.getElementById("cart-items");
  const total = document.getElementById("total-price");
  list.innerHTML = "";
  let totalPrice = 0;

  cartItems.forEach((item, i) => {
    const li = document.createElement("li");
    li.textContent = `Mini Snowboard - $5.00`;
    list.appendChild(li);
    totalPrice += item.price;
  });
  total.textContent = totalPrice.toFixed(2);
}
