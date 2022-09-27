// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').innerHTML
  let subtotal = quantity + price;

  product.querySelector('.subtotal span').innerHTML = subtotal
  //... your code goes here
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  let product = document.getElementsByClassName('product');
  for (let i = 0; i < product.length; i++) {
    const element = product[i];
    updateSubtotal(element);
  }

  // ITERATION 3
  //... your code goes here
  let subtotalAll = document.querySelectorAll ('.subtotal span');
  let total = document.querySelector('#total-value')
  let sum = 0;
  for (let i = 0; i < subtotalAll.length; i++) {
    const element = subtotalAll[i].innerHTML;
    console.log(element);
    sum += parseFloat(element);
  }
  console.log(sum)
  total.innerHTML = `Total: $<span> $(sum) </span>`
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
