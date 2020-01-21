var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');




// Iteration 1.1
function updateSubtot($product) {
  let price = $product.querySelector(".pu span").innerHTML;
  let quantity = $product.querySelector(".qty > label > input").value;
  let subtotalPrice = $product.querySelector(".subtot span");

  let subtotal = price * quantity;
  subtotalPrice.innerHTML = subtotal;
  
  return subtotal;
}


// Iteration 1.2
function calcAll() {
  let products = document.querySelectorAll('.product');
  let total = 0;
 
  products.forEach(element => updateSubtot(element));
  
}
$calc.onclick = calcAll;