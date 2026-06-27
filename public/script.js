// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Get Started Button (used by inline onclick on hero CTA)
function getStart() {
    const productsSection = document.getElementById('products');
    if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Scroll-triggered Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Trigger counter animation if it's a stat number
            if (entry.target.classList.contains('stat-number')) {
                animateCounter(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all scroll-animate elements
document.querySelectorAll('.scroll-animate, .scroll-animate-left, .scroll-animate-right, .scroll-animate-zoom').forEach(el => {
    observer.observe(el);
});

// Observe stat numbers for counter animation
document.querySelectorAll('.stat-number').forEach(el => {
    observer.observe(el);
});

// Animated Statistics Counter
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const step = target / (duration / 16); // 60fps
    let current = 0;
    
    const counter = setInterval(() => {
        current += step;
        if (current >= target) {
            element.textContent = target.toLocaleString();
            clearInterval(counter);
        } else {
            element.textContent = Math.floor(current).toLocaleString();
        }
    }, 16);
}

// Add hover effects with JavaScript for enhanced interactivity
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Add smooth reveal animation for navigation links
document.querySelectorAll('.nav-links a').forEach((link, index) => {
    link.style.opacity = '0';
    link.style.animation = `fadeUp 0.5s ease-out forwards ${index * 0.1}s`;
});

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero-content');
    const scrolled = window.pageYOffset;
    if (hero) {
        hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        hero.style.opacity = 1 - (scrolled * 0.002);
    }
});

// Product Gallery Data
const products = [
    {
        id: 1,
        name: 'Organic Fertilizer',
        category: 'Fertilizers',
        description: 'Premium quality compost made from organic waste materials. Rich in nutrients and beneficial microorganisms for healthy soil.',
        image: '../public/Organic.png',
        features: ['100% Organic', 'Rich in Nutrients', 'Improves Soil Structure', 'Water Retention']
    },
    {
        id: 2,
        name: 'Velvet Beans',
        category: 'plant',
        description: 'High-quality velvet bean seeds ideal for soil enrichment, green manure production, and sustainable farming.',
        image: '../public/Velvet.png',
        features: ['Nitrogen Fixation', 'Improves Soil Fertility', 'Excellent Green Manure Crop', 'Supports Sustainable Agriculture']
    },
    {
        id: 3,
        name: 'Pheromone Beetle Trap',
        category: 'All Products',
        description: 'Effective pest monitoring and control solution designed to attract and trap harmful beetles naturally.',
        image: '../public/Pheromone.png',
        features: ['Chemical-Free Pest Control', 'Targets Specific Beetles', 'Easy Installation', 'Environment Friendly']
    },
    {
        id: 4,
        name: 'Fertilizers',
        category: 'fertilizer',
        description: 'Premium organic fertilizer enriched with natural nutrients that improves soil fertility, root development, and overall crop productivity.',
        image: '../public/Fertilizerss.png',
        features: ['100% Organic Formula', 'Improves Soil Health', 'Enhances Root Growth', 'Increases Crop Yield']
    },
    {
        id: 5,
        name: 'Crop Gel',
        category: 'liquid',
        description: 'Advanced micronutrient gel formulation that enhances nutrient absorption, plant vigor, and overall crop productivity.',
        image: '../public/Gel.png',
        features: ['Fast Nutrient Absorption', 'Micronutrient Enriched', 'Enhances Plant Growth', 'Increases Crop Yield']
    },
    {
        id: 6,
        name: 'Sea Nutri',
        category: 'liquid',
        description: 'Seaweed-based liquid fertilizer packed with natural minerals for stronger roots and healthier plant development.',
        image: '../public/Liquid.png',
        features: ['Seaweed Extract Formula', 'Promotes Root Growth', 'Improves Stress Tolerance', 'Easy Foliar Application']
    },
    {
        id: 7,
        name: 'CCTV',
        category: 'All Prodcts',
        description: 'Advanced 4G solar-powered surveillance camera providing continuous monitoring, remote access, and reliable farm security coverage.',
        image: '../public/CCTVS.png',
        features: ['Solar Powered Operation', '4G Remote Connectivity', 'AOV (Always ON Video)', '4-Linkage Camera Coverage']
    },
    {
        id: 8,
        name: 'CCTV',
        category: 'All Products',
        description: 'Smart solar-powered surveillance camera providing continuous farm security with remote monitoring capabilities.',
        image: '../public/CCTV.png',
        features: ['Solar Powered Operation', 'HD Video Recording', 'Remote Mobile Access', 'Weatherproof Design']
    }
];

// Render Products
function renderProducts(productsToRender) {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';
    
    productsToRender.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card scroll-animate';
        productCard.style.animationDelay = `${index * 0.1}s`;
        productCard.dataset.category = product.category;
        
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
                <div class="product-overlay">
                    <button class="view-details-btn">View Details</button>
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description.substring(0, 80)}...</p>
            </div>
        `;
        
        productCard.addEventListener('click', () => openModal(product));
        productsGrid.appendChild(productCard);
    });
    
    // Re-observe new elements for scroll animation
    document.querySelectorAll('.product-card.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Filter Products
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Filter products
        const filter = button.dataset.filter;
        const filteredProducts = filter === 'all' 
            ? products 
            : products.filter(product => product.category === filter);
        
        renderProducts(filteredProducts);
    });
});

// Modal Functionality
const modal = document.getElementById('product-modal');
const closeModal = document.querySelector('.close-modal');
const contactFormUrl = 'https://forms.gle/HFA4LKUA12pimeH47';
const addToCartButton = document.querySelector('.modal-action-btn');

function openModal(product) {
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-category').textContent = product.category;
    document.getElementById('modal-description').textContent = product.description;
    
    const featuresList = document.getElementById('modal-features-list');
    featuresList.innerHTML = product.features.map(feature => `<li>${feature}</li>`).join('');
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
        window.open(contactFormUrl, '_blank', 'noopener noreferrer');
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Initialize products on page load
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});
