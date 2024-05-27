let unitCost = document.getElementsByClassName('unitCost')
let items = document.getElementsByClassName('items')
let btn = document.getElementById('price')
let totalPrice = document.getElementsByClassName('totalPrice')
let units = document.getElementsByClassName('units')
let total = document.getElementById('total')
let delet = document.getElementsByClassName('btn-delete')
let body = document.querySelector('body')
let createBtn = document.getElementById('createBtn')
let newProductName = document.getElementById('newProductName')
let newPrice = document.getElementById('newPrice')
let main = document.getElementById('main')

function calculatePrices() {
  let suma = 0
  for(let i=0; i < items.length; i++){
    if (units[i]){
    let prices = units[i].value * parseInt(unitCost[i].innerText)
    totalPrice[i].innerText = prices + '€'
    suma += prices
    total.innerText = suma
    }
  }
}

btn.addEventListener('click', calculatePrices)

createBtn.addEventListener('click', () => {
  let newElement = document.createElement('div')
  newElement.classList.add('items')
  newElement.innerHTML = `<div class="items">
    <span class="productName">${newProductName.value}</span>
    <span class="unitCost">${newPrice.value}</span>
    <span>
      <label for="units">QTY</label>
      <input type="text" value="0" class="units">
    </span>
    <span class="totalPrice">1€</span>
    <span><button type="button" class="btn btn-delete">Delete</button></span>
  </div>`
  main.appendChild(newElement)

  for (let i = 0; i < items.length; i++) {
    if(delet[i]){
      delet[i].addEventListener('click', (event) => {
       event.target.parentNode.parentNode.remove() //borra el padre (div) del padre (span) del boton actual
      })
    }
  }
  btn.addEventListener('click', calculatePrices)
})