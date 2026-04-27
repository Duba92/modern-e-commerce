function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === productId);
    if(!product) return;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === productId);
    if(existing) {
        existing.quantity += 1;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

function updateQuantity(productId, change) {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const item = cart.find(item => item.id === productId);
    if(item) {
        item.quantity += change;
        if(item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    displayCartItems();
    updateCartCount();
}

function displayCartItems() {
    const container = document.getElementById('cart-items-container');
    if(!container) return;
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    
    if(cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Your cart is empty</p>
                <a href="shop.html" class="btn btn-primary">Continue Shopping</a>
            </div>
        `;
        if(document.getElementById('subtotal')) document.getElementById('subtotal').textContent = '$0.00';
        if(document.getElementById('shipping')) document.getElementById('shipping').textContent = '$0.00';
        if(document.getElementById('total')) document.getElementById('total').textContent = '$0.00';
        return;
    }
    
    container.innerHTML = `
        <div class="cart-header">
            <div>Product</div>
            <div>Price</div>
            <div>Quantity</div>
            <div>Total</div>
            <div></div>
        </div>
        ${cart.map(item => `
            <div class="cart-item">
                <div><strong>${item.name}</strong></div>
                <div>$${item.price.toFixed(2)}</div>
                <div class="quantity-control">
                    <button onclick="updateQuantity(${item.id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
                <div class="remove-item" onclick="removeFromCart(${item.id})">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
        `).join('')}
    `;
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    const total = subtotal + shipping;
    
    if(document.getElementById('subtotal')) document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if(document.getElementById('shipping')) document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if(document.getElementById('total')) document.getElementById('total').textContent = `$${total.toFixed(2)}`;
}

// Initialize cart page
if(document.getElementById('cart-items-container')) {
    displayCartItems();
}

// Checkout button
document.getElementById('checkout-btn')?.addEventListener('click', function() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(cart.length === 0) {
        alert('Your cart is empty!');
    } else {
        alert('Thank you for your order! This is a demo checkout.');
    }
});
