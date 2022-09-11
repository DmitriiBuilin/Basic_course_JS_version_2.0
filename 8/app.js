document.querySelector('.product-cards-mainblock').addEventListener('click', event => {
    if (!event.target.classList.contains('product-cards-item-image-darken-button')) {
        return;
    }

    
    console.log('Good choice');
});