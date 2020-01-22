var $cart = document.querySelector('#cart tbody');
var $calc = document.getElementById('calc');




// Iteration 1.1
function updateSubtot($product) {
  let price = $product.querySelector('.pu > span').innerHTML;
  let quantity = $product.querySelector('.qty > label > input').value;
  let subtotalPrice = $product.querySelector('.subtot > span');

  let subtotal = price * quantity;
  subtotalPrice.innerHTML = subtotal;
  
  return subtotal;
}


// Iteration 1.2
function calcAll() {
  let products = document.querySelectorAll('.product');
  let total = document.querySelector('h2 > span');
  let totalPrice = 0;
  

  products.forEach(element => {
    updateSubtot(element);
    totalPrice += updateSubtot(element);
    });
    total.innerHTML = totalPrice;
}
$calc.onclick = calcAll;
