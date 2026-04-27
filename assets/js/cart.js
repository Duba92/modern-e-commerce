function addToCart(productId) {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const product = products.find(p => p.id === productId);
    if(!product) return;
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const existing = cart.find(item => item.id === productId);
    if(existing) existing.quantity += 1;
    else cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1, image: product.image });
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
        if(item.quantity <= 0) cart = cart.filter(i => i.id !== productId);
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
        container.innerHTML = `<div class="empty-cart"><i class="fas fa-shopping-cart"></i><p>Your cart is empty</p><a href="shop.html" class="btn btn-primary">Continue Shopping</a></div>`;
        if(document.getElementById('subtotal')) document.getElementById('subtotal').textContent = '$0.00';
        if(document.getElementById('total')) document.getElementById('total').textContent = '$0.00';
        return;
    }
    container.innerHTML = `
        <div class="cart-header" style="display:grid;grid-template-columns:3fr 1fr 1fr 1fr 0.5fr;padding:1rem;background:#f8fafc;font-weight:bold">
            <div>Product</div><div>Price</div><div>Quantity</div><div>Total</div><div></div>
        </div>
        ${cart.map(item => `
            <div class="cart-item" style="display:grid;grid-template-columns:3fr 1fr 1fr 1fr 0.5fr;padding:1rem;align-items:center;border-bottom:1px solid #e2e8f0">
                <div><strong>${item.name}</strong></div>
                <div>$${item.price.toFixed(2)}</div>
                <div class="quantity-control" style="display:flex;gap:0.5rem;align-items:center">
                    <button onclick="updateQuantity(${item.id}, -1)" style="width:30px;height:30px;border:1px solid #e2e8f0;background:white;cursor:pointer">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.id}, 1)" style="width:30px;height:30px;border:1px solid #e2e8f0;background:white;cursor:pointer">+</button>
                </div>
                <div>$${(item.price * item.quantity).toFixed(2)}</div>
                <div onclick="removeFromCart(${item.id})" style="color:#ef4444;cursor:pointer"><i class="fas fa-trash"></i></div>
            </div>
        `).join('')}
    `;
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 50 ? 0 : 5.99;
    if(document.getElementById('subtotal')) document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
    if(document.getElementById('shipping')) document.getElementById('shipping').textContent = shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`;
    if(document.getElementById('total')) document.getElementById('total').textContent = `$${(subtotal + shipping).toFixed(2)}`;
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if(!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to wishlist! ❤️');
    } else showNotification('Already in wishlist!');
}

if(document.getElementById('cart-items-container')) displayCartItems();
document.getElementById('checkout-btn')?.addEventListener('click', () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    if(cart.length === 0) alert('Your cart is empty!');
    else alert('Proceeding to checkout (demo)');
});
