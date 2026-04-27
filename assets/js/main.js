// Product Database with Beautiful Images
const products = [
    { 
        id: 1, 
        name: "Classic White T-Shirt", 
        price: 29.99, 
        category: "men", 
        rating: 4.5, 
        reviews: 128, 
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop", 
        badge: "Best Seller", 
        description: "Premium cotton t-shirt for everyday comfort. Soft, breathable, and perfect for any occasion." 
    },
    { 
        id: 2, 
        name: "Slim Fit Jeans", 
        price: 79.99, 
        category: "men", 
        rating: 4.8, 
        reviews: 256, 
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop", 
        badge: "New", 
        description: "Modern slim fit jeans with stretch comfort. Premium denim that lasts." 
    },
    { 
        id: 3, 
        name: "Floral Summer Dress", 
        price: 89.99, 
        category: "women", 
        rating: 4.7, 
        reviews: 189, 
        image: "https://images.unsplash.com/photo-1612336307429-8a898d10e223?w=400&h=400&fit=crop", 
        badge: "Sale", 
        description: "Beautiful floral print dress for summer. Lightweight and elegant." 
    },
    { 
        id: 4, 
        name: "Leather Sneakers", 
        price: 119.99, 
        category: "shoes", 
        rating: 4.9, 
        reviews: 342, 
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop", 
        badge: "Trending", 
        description: "Premium leather sneakers for casual style. Comfort meets sophistication." 
    },
    { 
        id: 5, 
        name: "Wool Blazer", 
        price: 199.99, 
        category: "men", 
        rating: 4.6, 
        reviews: 94, 
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=400&fit=crop", 
        badge: "Limited", 
        description: "Elegant wool blazer for formal occasions. Tailored to perfection." 
    },
    { 
        id: 6, 
        name: "Silk Scarf", 
        price: 39.99, 
        category: "accessories", 
        rating: 4.4, 
        reviews: 67, 
        image: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=400&h=400&fit=crop", 
        badge: "Limited", 
        description: "Luxury silk scarf with artistic print. Adds elegance to any outfit." 
    },
    { 
        id: 7, 
        name: "Sports Jacket", 
        price: 149.99, 
        category: "men", 
        rating: 4.7, 
        reviews: 156, 
        image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=400&h=400&fit=crop", 
        badge: "New Arrival", 
        description: "Lightweight sports jacket for active lifestyle. Breathable and stylish." 
    },
    { 
        id: 8, 
        name: "Designer Handbag", 
        price: 249.99, 
        category: "accessories", 
        rating: 4.9, 
        reviews: 203, 
        image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop", 
        badge: "Luxury", 
        description: "Premium designer handbag. Crafted with finest materials." 
    }
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

// Add animation style
const style = document.createElement('style');
style.textContent = '@keyframes slideIn{from{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}';
document.head.appendChild(style);
