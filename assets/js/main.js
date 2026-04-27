// Product Database
const products = [
    { id: 1, name: "Classic White T-Shirt", price: 29.99, category: "men", rating: 4.5, reviews: 128, image: "https://placehold.co/300x300/6366f1/white?text=T-Shirt", badge: "Best Seller", description: "Premium cotton t-shirt for everyday comfort." },
    { id: 2, name: "Slim Fit Jeans", price: 79.99, category: "men", rating: 4.8, reviews: 256, image: "https://placehold.co/300x300/6366f1/white?text=Jeans", badge: "New", description: "Modern slim fit jeans with stretch comfort." },
    { id: 3, name: "Floral Summer Dress", price: 89.99, category: "women", rating: 4.7, reviews: 189, image: "https://placehold.co/300x300/ec4899/white?text=Dress", badge: "Sale", description: "Beautiful floral print dress for summer." },
    { id: 4, name: "Leather Sneakers", price: 119.99, category: "shoes", rating: 4.9, reviews: 342, image: "https://placehold.co/300x300/6366f1/white?text=Shoes", badge: "Trending", description: "Premium leather sneakers for casual style." }
];

localStorage.setItem('products', JSON.stringify(products));

// Load Header & Footer
document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/header.html')
        .then(res => res.text())
        .then(data => { document.getElementById('header-placeholder').innerHTML = data; updateCartCount(); })
        .catch(() => console.log('Header not found'));
    
    fetch('partials/footer.html')
        .then(res => res.text())
        .then(data => { document.getElementById('footer-placeholder').innerHTML = data; });
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => { if(el) el.textContent = total; });
}

function getStarRating(rating) {
    let stars = '';
    for(let i = 0; i < Math.floor(rating); i++) stars += '<i class="fas fa-star"></i>';
    if(rating % 1 >= 0.5) stars += '<i class="fas fa-star-half-alt"></i>';
    for(let i = 0; i < 5 - Math.ceil(rating); i++) stars += '<i class="far fa-star"></i>';
    return stars;
}

function showNotification(message) {
    const note = document.createElement('div');
    note.textContent = message;
    note.style.cssText = 'position:fixed;bottom:20px;right:20px;background:#6366f1;color:white;padding:1rem 1.5rem;border-radius:0.5rem;z-index:9999;animation:slideIn 0.3s ease';
    document.body.appendChild(note);
    setTimeout(() => note.remove(), 3000);
}

// Add animation style
const style = document.createElement('style');
style.textContent = '@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}';
document.head.appendChild(style);
