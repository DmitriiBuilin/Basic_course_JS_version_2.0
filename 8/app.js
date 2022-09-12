let countItemsValue = 0;
let productPlaceName;
let productPlacePrice;
let productPlaceTotal;
let totalPrice;

document.querySelector('.top-right-block')
    .addEventListener('click', event => {
        if (!event.target.classList
            .contains('cart-button-svg')) {
                return;
        }
        document.querySelector('.cart-panel').classList.toggle('hidden')
    });

document.querySelector('.product-cards-mainblock')
    .addEventListener('click', event => {
        if (!event.target.classList
            .contains('product-cards-item-image-darken-button')) {
                return;
        }
        let productPlaceElement = document
            .createElement('div.product-place-element');
        let productPlaceQuantity = 0;

        document.querySelector('.count-items').classList.remove('hidden');
;
        countItemsValue++;
        document.querySelector('.count-items-number')
            .textContent = countItemsValue;
        productPlaceName = event.target
            .parentNode.parentNode.parentNode.dataset.name;
        productPlacePrice = event.target
            .parentNode.parentNode.parentNode.dataset.price;
        productPlaceQuantity++;
        productPlaceTotal = productPlaceQuantity * productPlacePrice;
        productPlaceTotal = productPlaceTotal.toFixed(2);

        document.querySelector('.cart-panel-product-place')
        .insertAdjacentHTML('beforeend', 
        `<div class="product-place-element">
            <div class="product-place-name">${productPlaceName}</div>
            <div class="product-place-quantity">${productPlaceQuantity}</div>
            <div class="product-place-price">${productPlacePrice}</div>
            <div class="product-place-total">${productPlaceTotal}</div>
        </div>`);
    });