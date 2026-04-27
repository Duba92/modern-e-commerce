// Product Database - Modern Electronics & Modern Clothing with WORKING IMAGES
const products = [
    // ========== MODERN ELECTRONICS ==========
    { 
        id: 1, 
        name: "iPhone 15 Pro Max", 
        price: 1299.99, 
        category: "electronics", 
        rating: 4.9, 
        reviews: 3421, 
        image: "https://via.placeholder.com/400x400/667eea/white?text=iPhone+15+Pro+Max", 
        badge: "Hot Sale", 
        description: "Latest A17 Pro chip, titanium design, 48MP camera with 5x optical zoom." 
    },
    { 
        id: 2, 
        name: "MacBook Pro M3", 
        price: 1999.99, 
        category: "electronics", 
        rating: 4.9, 
        reviews: 2156, 
        image: "https://via.placeholder.com/400x400/764ba2/white?text=MacBook+Pro+M3", 
        badge: "New Arrival", 
        description: "M3 chip with 8-core CPU, 10-core GPU, 14-inch Liquid Retina XDR display." 
    },
    { 
        id: 3, 
        name: "Samsung Galaxy S24 Ultra", 
        price: 1199.99, 
        category: "electronics", 
        rating: 4.8, 
        reviews: 1876, 
        image: "https://via.placeholder.com/400x400/6366f1/white?text=Galaxy+S24+Ultra", 
        badge: "Best Seller", 
        description: "200MP camera, built-in S Pen, titanium frame, AI-powered features." 
    },
    { 
        id: 4, 
        name: "Apple Watch Ultra 2", 
        price: 799.99, 
        category: "electronics", 
        rating: 4.8, 
        reviews: 943, 
        image: "https://via.placeholder.com/400x400/ec4899/white?text=Apple+Watch+Ultra", 
        badge: "Premium", 
        description: "49mm titanium case, 100m water resistance, precision GPS." 
    },
    { 
        id: 5, 
        name: "Sony WH-1000XM5", 
        price: 399.99, 
        category: "electronics", 
        rating: 4.9, 
        reviews: 2876, 
        image: "https://via.placeholder.com/400x400/10b981/white?text=Sony+Headphones", 
        badge: "Trending", 
        description: "Industry-leading noise cancellation, 30-hour battery life, premium sound." 
    },
    { 
        id: 6, 
        name: "iPad Pro 12.9\"", 
        price: 1099.99, 
        category: "electronics", 
        rating: 4.8, 
        reviews: 1543, 
        image: "https://via.placeholder.com/400x400/f59e0b/white?text=iPad+Pro", 
        badge: "M2 Chip", 
        description: "M2 chip, Liquid Retina XDR display, Apple Pencil hover support." 
    },
    { 
        id: 7, 
        name: "Dyson V15 Detect", 
        price: 749.99, 
        category: "electronics", 
        rating: 4.7, 
        reviews: 876, 
        image: "https://via.placeholder.com/400x400/ef4444/white?text=Dyson+V15", 
        badge: "Smart Vacuum", 
        description: "Intelligent laser dust detection, powerful suction, real-time particle count." 
    },
    { 
        id: 8, 
        name: "Samsung QLED 4K TV", 
        price: 1499.99, 
        category: "electronics", 
        rating: 4.8, 
        reviews: 1234, 
        image: "https://via.placeholder.com/400x400/3b82f6/white?text=Samsung+QLED+TV", 
        badge: "Smart TV", 
        description: "65-inch 4K QLED, 120Hz, Quantum HDR, built-in Alexa." 
    },
    { 
        id: 9, 
        name: "Google Pixel 8 Pro", 
        price: 999.99, 
        category: "electronics", 
        rating: 4.7, 
        reviews: 987, 
        image: "https://via.placeholder.com/400x400/06b6d4/white?text=Google+Pixel+8", 
        badge: "AI Powered", 
        description: "Tensor G3 chip, pro-level camera, 7 years of updates." 
    },
    { 
        id: 10, 
        name: "AirPods Pro 2", 
        price: 249.99, 
        category: "electronics", 
        rating: 4.9, 
        reviews: 5432, 
        image: "https://via.placeholder.com/400x400/8b5cf6/white?text=AirPods+Pro", 
        badge: "Best Audio", 
        description: "H2 chip, 2x noise cancellation, personalized spatial audio." 
    },
    { 
        id: 11, 
        name: "MSI Gaming Laptop", 
        price: 1699.99, 
        category: "electronics", 
        rating: 4.8, 
        reviews: 765, 
        image: "https://via.placeholder.com/400x400/d946ef/white?text=MSI+Gaming", 
        badge: "Gaming", 
        description: "RTX 4080, Intel i9, 240Hz display, RGB keyboard." 
    },
    { 
        id: 12, 
        name: "Xiaomi Smart Band 8", 
        price: 49.99, 
        category: "electronics", 
        rating: 4.6, 
        reviews: 8765, 
        image: "https://via.placeholder.com/400x400/14b8a6/white?text=Xiaomi+Band+8", 
        badge: "Budget", 
        description: "1.62-inch AMOLED, 16-day battery, 150+ sport modes." 
    },

    // ========== MODERN CLOTHING ==========
    { 
        id: 13, 
        name: "Classic White T-Shirt", 
        price: 29.99, 
        category: "clothing", 
        rating: 4.5, 
        reviews: 128, 
        image: "https://via.placeholder.com/400x400/f1f5f9/333333?text=White+T-Shirt", 
        badge: "Best Seller", 
        description: "Premium cotton t-shirt for everyday comfort. Soft, breathable, perfect fit." 
    },
    { 
        id: 14, 
        name: "Smart Fit Blazer", 
        price: 199.99, 
        category: "clothing", 
        rating: 4.8, 
        reviews: 89, 
        image: "https://via.placeholder.com/400x400/475569/white?text=Smart+Blazer", 
        badge: "New Style", 
        description: "Modern slim-fit blazer with smart fabric, wrinkle-resistant." 
    },
    { 
        id: 15, 
        name: "Tech Wear Jacket", 
        price: 159.99, 
        category: "clothing", 
        rating: 4.7, 
        reviews: 156, 
        image: "https://via.placeholder.com/400x400/1e293b/white?text=Tech+Jacket", 
        badge: "Cyber Style", 
        description: "Water-resistant tech jacket with hidden pockets and modern design." 
    },
    { 
        id: 16, 
        name: "Minimalist Hoodie", 
        price: 59.99, 
        category: "clothing", 
        rating: 4.6, 
        reviews: 234, 
        image: "https://via.placeholder.com/400x400/64748b/white?text=Hoodie", 
        badge: "Cozy", 
        description: "Oversized hoodie, premium cotton blend, modern streetwear style." 
    },
    { 
        id: 17, 
        name: "Smart Casual Shirt", 
        price: 49.99, 
        category: "clothing", 
        rating: 4.7, 
        reviews: 167, 
        image: "https://via.placeholder.com/400x400/3b82f6/white?text=Casual+Shirt", 
        badge: "Office Ready", 
        description: "Breathable fabric, wrinkle-free, perfect for modern workplace." 
    },
    { 
        id: 18, 
        name: "Eco-Friendly Jeans", 
        price: 89.99, 
        category: "clothing", 
        rating: 4.7, 
        reviews: 298, 
        image: "https://via.placeholder.com/400x400/2dd4bf/white?text=Jeans", 
        badge: "Sustainable", 
        description: "Organic cotton jeans, recycled materials, modern slim fit." 
    },
    { 
        id: 19, 
        name: "Summer Linen Shirt", 
        price: 39.99, 
        category: "clothing", 
        rating: 4.5, 
        reviews: 143, 
        image: "https://via.placeholder.com/400x400/fbbf24/1e293b?text=Linen+Shirt", 
        badge: "Breathable", 
        description: "100% premium linen, lightweight, perfect for hot weather." 
    },
    { 
        id: 20, 
        name: "Sport Tech T-Shirt", 
        price: 34.99, 
        category: "clothing", 
        rating: 4.6, 
        reviews: 312, 
        image: "https://via.placeholder.com/400x400/22c55e/white?text=Sport+T-Shirt", 
        badge: "Active Wear", 
        description: "Moisture-wicking fabric, UV protection, 4-way stretch." 
    }
];

// Save to localStorage
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
