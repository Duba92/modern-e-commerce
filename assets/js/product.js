function displayFeaturedProducts() {
    const grid = document.getElementById('featured-products');
    if(!grid) return;
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const featured = products.slice(0, 8);
    
    grid.innerHTML = featured.map(p => `
        <div class="product-card" onclick="goToProduct(${p.id})">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <div class="product-rating">
                    <div class="stars">${getStarRating(p.rating)}</div>
                    <span>(${p.reviews})</span>
                </div>
                <div class="product-price">$${p.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
}

function displayProducts(productsToShow = null) {
    const grid = document.getElementById('all-products');
    if(!grid) return;
    const products = productsToShow || JSON.parse(localStorage.getItem('products') || '[]');
    
    if(products.length === 0) { 
        grid.innerHTML = '<p style="text-align:center;padding:2rem;">No products found.</p>'; 
        return; 
    }
    
    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <div class="product-image">
                <img src="${p.image}" alt="${p.name}">
                ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
                <div class="product-actions">
                    <button class="action-btn" onclick="event.stopPropagation(); goToProduct(${p.id})"><i class="fas fa-eye"></i></button>
                    <button class="action-btn" onclick="event.stopPropagation(); addToCart(${p.id})"><i class="fas fa-shopping-cart"></i></button>
                    <button class="action-btn" onclick="event.stopPropagation(); addToWishlist(${p.id})"><i class="far fa-heart"></i></button>
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-title">${p.name}</h3>
                <div class="product-rating">
                    <div class="stars">${getStarRating(p.rating)}</div>
                    <span>(${p.reviews})</span>
                </div>
                <div class="product-price">$${p.price.toFixed(2)}</div>
            </div>
        </div>
    `).join('');
    
    if(document.getElementById('product-count')) {
        document.getElementById('product-count').textContent = `Showing ${products.length} products`;
    }
}

function goToProduct(id) { 
    window.location.href = `product-detail.html?id=${id}`; 
}

function addToWishlist(productId) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
    if(!wishlist.includes(productId)) {
        wishlist.push(productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showNotification('Added to wishlist! ❤️');
    } else {
        showNotification('Already in wishlist!');
    }
}

if(document.getElementById('featured-products')) displayFeaturedProducts();
if(document.getElementById('all-products')) displayProducts();
