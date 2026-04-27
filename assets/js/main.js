* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary: #6366f1;
    --primary-dark: #4f46e5;
    --secondary: #ec4899;
    --dark: #1e293b;
    --gray: #64748b;
    --light: #f8fafc;
    --white: #ffffff;
    --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
    --radius: 0.5rem;
    --radius-lg: 1rem;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--dark);
    line-height: 1.6;
    background: var(--white);
}

.container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem;
}

/* Header */
.header {
    background: var(--white);
    box-shadow: var(--shadow);
    position: sticky;
    top: 0;
    z-index: 1000;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    text-decoration: none;
}

.nav {
    display: flex;
    gap: 2rem;
    align-items: center;
}

.nav a {
    text-decoration: none;
    color: var(--dark);
    transition: all 0.3s ease;
}

.nav a:hover {
    color: var(--primary);
}

.nav-icons {
    display: flex;
    gap: 1.5rem;
    align-items: center;
}

.cart-icon {
    position: relative;
    cursor: pointer;
    font-size: 1.25rem;
}

.cart-count {
    position: absolute;
    top: -8px;
    right: -12px;
    background: var(--primary);
    color: white;
    font-size: 0.7rem;
    padding: 2px 6px;
    border-radius: 50%;
}

/* Buttons */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.5rem;
    border-radius: var(--radius);
    font-weight: 500;
    text-decoration: none;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    font-size: 1rem;
}

.btn-primary {
    background: linear-gradient(135deg, var(--primary), var(--primary-dark));
    color: var(--white);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg);
}

.btn-outline {
    background: transparent;
    border: 2px solid var(--primary);
    color: var(--primary);
}

.btn-outline:hover {
    background: var(--primary);
    color: var(--white);
}

/* Hero Section */
.hero {
    background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%);
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}

.hero-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.25rem 1rem;
    border-radius: 2rem;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.hero h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.1rem;
    opacity: 0.8;
    margin-bottom: 1rem;
}

.hero-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 1.5rem;
}

.hero-image img {
    width: 100%;
    max-width: 450px;
    border-radius: 2rem;
    box-shadow: var(--shadow-lg);
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
}

/* Features */
.features {
    padding: 4rem 0;
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-card {
    text-align: center;
    padding: 2rem;
    background: var(--light);
    border-radius: var(--radius-lg);
    transition: all 0.3s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.feature-card i {
    font-size: 2rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

/* Categories */
.categories {
    padding: 4rem 0;
    background: var(--light);
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.section-header p {
    color: var(--gray);
}

.categories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.category-card {
    text-align: center;
    padding: 2.5rem;
    background: var(--white);
    border-radius: var(--radius-lg);
    transition: all 0.3s ease;
    cursor: pointer;
}

.category-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow);
}

.category-icon i {
    font-size: 3rem;
    color: var(--primary);
    margin-bottom: 1rem;
}

.category-card h3 {
    margin-bottom: 0.5rem;
}

.category-card a {
    color: var(--primary);
    text-decoration: none;
}

/* Products */
.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    margin: 2rem 0;
}

.product-card {
    background: var(--white);
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: var(--shadow);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-lg);
}

.product-image {
    position: relative;
    height: 280px;
    background: linear-gradient(135deg, #f5f3ff, #ede9fe);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-badge {
    position: absolute;
    top: 1rem;
    left: 1rem;
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
}

.product-actions {
    position: absolute;
    bottom: -50px;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    transition: all 0.3s ease;
}

.product-card:hover .product-actions {
    bottom: 0;
}

.action-btn {
    background: white;
    border: none;
    padding: 0.6rem;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 38px;
    height: 38px;
}

.action-btn:hover {
    background: var(--primary);
    color: white;
}

.product-info {
    padding: 1.25rem;
}

.product-title {
    font-size: 1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.25rem;
    font-weight: bold;
    color: var(--primary);
    margin-top: 0.5rem;
}

.product-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.5rem 0;
}

.stars {
    color: #fbbf24;
    font-size: 0.875rem;
}

/* Newsletter */
.newsletter {
    background: linear-gradient(135deg, var(--primary), var(--secondary));
    padding: 4rem 0;
    color: white;
    text-align: center;
}

.newsletter-content i {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.newsletter-form {
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
    flex-wrap: wrap;
}

.newsletter-form input {
    padding: 0.75rem 1rem;
    border-radius: var(--radius);
    border: none;
    width: 280px;
}

/* Footer */
.footer {
    background: var(--dark);
    color: var(--white);
    padding: 4rem 0 2rem;
    margin-top: 4rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.footer h4 {
    margin-bottom: 1rem;
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 0.5rem;
}

.footer-links a {
    color: var(--light);
    text-decoration: none;
}

.social-links {
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
}

.social-links a {
    color: white;
    font-size: 1.25rem;
    transition: all 0.3s ease;
}

.social-links a:hover {
    color: var(--primary);
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    border-top: 1px solid var(--gray);
}

/* Cart */
.cart-layout {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin: 3rem 0;
}

.cart-header {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
    padding: 1rem;
    background: var(--light);
    font-weight: bold;
    border-radius: var(--radius);
}

.cart-item {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr 0.5fr;
    padding: 1rem;
    align-items: center;
    border-bottom: 1px solid #e2e8f0;
}

.cart-summary {
    background: var(--light);
    padding: 1.5rem;
    border-radius: var(--radius-lg);
    position: sticky;
    top: 100px;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0;
}

.summary-row.total {
    font-weight: bold;
    font-size: 1.2rem;
    border-top: 1px solid #e2e8f0;
    padding-top: 1rem;
    margin-top: 1rem;
}

.empty-cart {
    text-align: center;
    padding: 3rem;
}

.empty-cart i {
    font-size: 4rem;
    color: var(--gray);
    margin-bottom: 1rem;
}

.quantity-control {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.quantity-control button {
    width: 28px;
    height: 28px;
    border: 1px solid #e2e8f0;
    background: white;
    cursor: pointer;
    border-radius: var(--radius);
}

.remove-item {
    color: #ef4444;
    cursor: pointer;
    text-align: center;
}

/* Responsive */
@media (max-width: 768px) {
    .hero {
        grid-template-columns: 1fr;
        text-align: center;
        padding: 3rem 1rem;
    }
    
    .hero h1 {
        font-size: 2rem;
    }
    
    .hero-buttons {
        justify-content: center;
    }
    
    .cart-layout {
        grid-template-columns: 1fr;
    }
    
    .cart-header {
        display: none;
    }
    
    .cart-item {
        grid-template-columns: 1fr;
        gap: 0.5rem;
        text-align: center;
    }
    
    .newsletter-form {
        flex-direction: column;
        align-items: center;
    }
    
    .newsletter-form input {
        width: 100%;
        max-width: 300px;
    }
    
    .container {
        padding: 0 1rem;
    }
}
