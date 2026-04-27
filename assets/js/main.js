// Product Database with 100% WORKING ONLINE IMAGES
const products = [
    // Electronics
    { id: 1, name: "iPhone 15 Pro Max", price: 1299.99, category: "electronics", rating: 4.9, reviews: 3421, image: "https://picsum.photos/id/20/400/400", badge: "Hot Sale", description: "Latest A17 Pro chip, titanium design, 48MP camera." },
    { id: 2, name: "MacBook Pro M3", price: 1999.99, category: "electronics", rating: 4.9, reviews: 2156, image: "https://picsum.photos/id/21/400/400", badge: "New Arrival", description: "M3 chip, 14-inch Liquid Retina XDR display." },
    { id: 3, name: "Samsung Galaxy S24", price: 1199.99, category: "electronics", rating: 4.8, reviews: 1876, image: "https://picsum.photos/id/22/400/400", badge: "Best Seller", description: "200MP camera, AI-powered features, titanium frame." },
    { id: 4, name: "Apple Watch Ultra 2", price: 799.99, category: "electronics", rating: 4.8, reviews: 943, image: "https://picsum.photos/id/23/400/400", badge: "Premium", description: "49mm titanium case, 100m water resistance." },
    { id: 5, name: "Sony WH-1000XM5", price: 399.99, category: "electronics", rating: 4.9, reviews: 2876, image: "https://picsum.photos/id/24/400/400", badge: "Trending", description: "Noise cancellation, 30-hour battery life." },
    { id: 6, name: "iPad Pro 12.9\"", price: 1099.99, category: "electronics", rating: 4.8, reviews: 1543, image: "https://picsum.photos/id/25/400/400", badge: "M2 Chip", description: "M2 chip, Liquid Retina XDR display." },
    { id: 7, name: "Dyson V15 Detect", price: 749.99, category: "electronics", rating: 4.7, reviews: 876, image: "https://picsum.photos/id/26/400/400", badge: "Smart", description: "Laser dust detection, powerful suction." },
    { id: 8, name: "Samsung QLED 4K TV", price: 1499.99, category: "electronics", rating: 4.8, reviews: 1234, image: "https://picsum.photos/id/27/400/400", badge: "Smart TV", description: "65-inch 4K QLED, 120Hz, Quantum HDR." },
    { id: 9, name: "Google Pixel 8 Pro", price: 999.99, category: "electronics", rating: 4.7, reviews: 987, image: "https://picsum.photos/id/28/400/400", badge: "AI", description: "Tensor G3 chip, pro-level camera." },
    { id: 10, name: "AirPods Pro 2", price: 249.99, category: "electronics", rating: 4.9, reviews: 5432, image: "https://picsum.photos/id/29/400/400", badge: "Audio", description: "Noise cancellation, spatial audio." },
    { id: 11, name: "MSI Gaming Laptop", price: 1699.99, category: "electronics", rating: 4.8, reviews: 765, image: "https://picsum.photos/id/30/400/400", badge: "Gaming", description: "RTX 4080, Intel i9, 240Hz display." },
    { id: 12, name: "Xiaomi Smart Band 8", price: 49.99, category: "electronics", rating: 4.6, reviews: 8765, image: "https://picsum.photos/id/31/400/400", badge: "Budget", description: "AMOLED display, 16-day battery life." },
    // Clothing
    { id: 13, name: "Classic White T-Shirt", price: 29.99, category: "clothing", rating: 4.5, reviews: 128, image: "https://picsum.photos/id/32/400/400", badge: "Best Seller", description: "Premium cotton, soft and breathable." },
    { id: 14, name: "Smart Fit Blazer", price: 199.99, category: "clothing", rating: 4.8, reviews: 89, image: "https://picsum.photos/id/33/400/400", badge: "New", description: "Modern slim-fit blazer, wrinkle-resistant." },
    { id: 15, name: "Tech Wear Jacket", price: 159.99, category: "clothing", rating: 4.7, reviews: 156, image: "https://picsum.photos/id/34/400/400", badge: "Cyber", description: "Water-resistant tech jacket with hidden pockets." },
    { id: 16, name: "Minimalist Hoodie", price: 59.99, category: "clothing", rating: 4.6, reviews: 234, image: "https://picsum.photos/id/35/400/400", badge: "Cozy", description: "Oversized hoodie, premium cotton blend." },
    { id: 17, name: "Smart Casual Shirt", price: 49.99, category: "clothing", rating: 4.7, reviews: 167, image: "https://picsum.photos/id/36/400/400", badge: "Office", description: "Breathable fabric, wrinkle-free." },
    { id: 18, name: "Eco-Friendly Jeans", price: 89.99, category: "clothing", rating: 4.7, reviews: 298, image: "https://picsum.photos/id/37/400/400", badge: "Sustainable", description: "Organic cotton, modern slim fit." },
    { id: 19, name: "Summer Linen Shirt", price: 39.99, category: "clothing", rating: 4.5, reviews: 143, image: "https://picsum.photos/id/38/400/400", badge: "Breathable", description: "100% premium linen, lightweight." },
    { id: 20, name: "Sport Tech T-Shirt", price: 34.99, category: "clothing", rating: 4.6, reviews: 312, image: "https://picsum.photos/id/39/400/400", badge: "Active", description: "Moisture-wicking, UV protection." }
];

localStorage.setItem('products', JSON.stringify(products));

// Load Header & Footer
document.addEventListener('DOMContentLoaded', function() {
    fetch('partials/header.html')
        .then(res => res.text())
        .then(data => { 
            document.getElementById('header-placeholder').innerHTML = data; 
            updateCartCount(); 
        })
        .catch(() => console.log('Header not found'));
    
    fetch('partials/footer.html')
        .then(res => res.text())
        .then(data => { 
            document.getElementById('footer-placeholder').innerHTML = data; 
        })
        .catch(() => console.log('Footer not found'));
});

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');
    const total = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.querySelectorAll('.cart-count').forEach(el => { 
        if(el) el.textContent = total; 
    });
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

const style = document.createElement('style');
style.textContent = '@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}';
document.head.appendChild(style);
