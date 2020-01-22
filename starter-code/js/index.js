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
  
  // Iteration 2
  products.forEach(element => {
    updateSubtot(element);
    // Iteration 3
    totalPrice += updateSubtot(element);
    });
    total.innerHTML = totalPrice;
}
$calc.onclick = calcAll;


let deleteButtons = $cart.querySelectorAll('.btn-delete');

function del() {
  deleteButtons.forEach(element => {
    element.addEventListener('click', event => {
      let productContainer = element.parentNode.parentNode.parentNode;
      productContainer.removeChild(element.parentNode.parentNode);
    })
  })
}
$cart.onclick = del;