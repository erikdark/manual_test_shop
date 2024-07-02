document.addEventListener('DOMContentLoaded', function() {
    const addToCartButton = document.getElementById('add-to-cart');
    if (addToCartButton) {
        addToCartButton.addEventListener('click', function() {
            const productId = getProductIdFromURL();
            addToCart(productId);
        });
    }

    loadCartItems();
});

function getProductIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!'); // Bug: No validation of duplicate items
}

function loadCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
        } else {
            cartItemsContainer.innerHTML = cart.map(item => `<p>Product ${item}</p>`).join('');
        }
    }
}

document.getElementById('checkout').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert('Your cart is empty!'); // Bug: No checkout if cart is empty
    } else {
        alert('Proceeding to checkout...'); // Bug: No actual checkout process
    }
});
