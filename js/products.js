/**
 * Saraswathy Bakery - Products JavaScript File
 * Author: Replit Expert
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Products data
    const products = [
        {
            id: 'fresh-bread',
            name: 'Fresh Bread',
            description: 'Soft inside with crispy crust, baked daily',
            price: '₹40.00 - ₹80.00',
            category: 'bakery',
            image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Freshly baked bread'
        },
        {
            id: 'pastries-cakes',
            name: 'Pastries & Cakes',
            description: 'Delicious treats for special occasions',
            price: '₹25.00 - ₹450.00',
            category: 'bakery',
            image: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Assorted pastries'
        },
        {
            id: 'dairy-products',
            name: 'Dairy Products',
            description: 'Fresh milk, curd, and eggs',
            price: '₹30.00 - ₹120.00',
            category: 'groceries',
            image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Dairy products'
        },
        {
            id: 'school-supplies',
            name: 'School Supplies',
            description: 'Notebooks, pencils, and art supplies',
            price: '₹15.00 - ₹250.00',
            category: 'stationery',
            image: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'School supplies'
        },
        {
            id: 'packaged-snacks',
            name: 'Packaged Snacks',
            description: 'Chips, cookies, and savory treats',
            price: '₹10.00 - ₹150.00',
            category: 'snacks',
            image: 'https://images.unsplash.com/photo-1621939514649-280e2ee25f60?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Packaged snacks'
        },
        {
            id: 'cookies-biscuits',
            name: 'Cookies & Biscuits',
            description: 'Handmade with premium ingredients',
            price: '₹20.00 - ₹100.00',
            category: 'bakery',
            image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Fresh cookies'
        },
        {
            id: 'essential-groceries',
            name: 'Essential Groceries',
            description: 'Rice, flour, oils, and everyday items',
            price: '₹40.00 - ₹500.00',
            category: 'groceries',
            image: 'https://images.unsplash.com/photo-1543168256-418811576931?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Essential groceries'
        },
        {
            id: 'office-supplies',
            name: 'Office Supplies',
            description: 'Files, folders, and business essentials',
            price: '₹25.00 - ₹350.00',
            category: 'stationery',
            image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Office supplies'
        },
        {
            id: 'sweet-pastries',
            name: 'Sweet Pastries',
            description: 'Sweet treats for tea time and dessert',
            price: '₹20.00 - ₹80.00',
            category: 'bakery',
            image: 'https://images.unsplash.com/photo-1483695028939-5bb13f8648b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Sweet pastries'
        },
        {
            id: 'art-supplies',
            name: 'Art Supplies',
            description: 'For students and creative professionals',
            price: '₹50.00 - ₹500.00',
            category: 'stationery',
            image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Art supplies'
        },
        {
            id: 'traditional-snacks',
            name: 'Traditional Snacks',
            description: 'Local Kerala savory and sweet treats',
            price: '₹15.00 - ₹120.00',
            category: 'snacks',
            image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Traditional snacks'
        },
        {
            id: 'household-items',
            name: 'Household Items',
            description: 'Everyday essentials for your home',
            price: '₹30.00 - ₹400.00',
            category: 'groceries',
            image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
            alt: 'Household items'
        }
    ];

    // Get DOM elements
    const productsContainer = document.getElementById('products-container');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const noProductsMessage = document.getElementById('no-products-message');
    
    if (!productsContainer || !filterButtons.length) {
        return; // Exit if elements don't exist on this page
    }

    // Create product card HTML
    function createProductCard(product) {
        return `
            <div class="product-card" data-category="${product.category}" id="${product.id}">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.alt}">
                </div>
                <div class="product-content">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p class="product-price">${product.price}</p>
                </div>
            </div>
        `;
    }

    // Display products by category
    function displayProducts(category = 'all') {
        let filteredProducts = products;
        
        if (category !== 'all') {
            filteredProducts = products.filter(product => product.category === category);
        }
        
        // Clear the container
        productsContainer.innerHTML = '';
        
        // Display the filtered products
        if (filteredProducts.length > 0) {
            filteredProducts.forEach(product => {
                productsContainer.innerHTML += createProductCard(product);
            });
            noProductsMessage.style.display = 'none';
        } else {
            noProductsMessage.style.display = 'block';
        }
    }

    // Handle filter button clicks
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Update active class
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Filter products
            const category = this.getAttribute('data-category');
            displayProducts(category);
            
            // Update URL hash without scrolling
            const currentUrl = window.location.href.split('#')[0];
            history.replaceState(null, null, `${currentUrl}#${category}`);
        });
    });

    // Check URL hash on page load
    function checkUrlHash() {
        const hash = window.location.hash.substring(1);
        if (hash) {
            const categoryButton = document.querySelector(`.filter-btn[data-category="${hash}"]`);
            if (categoryButton) {
                categoryButton.click();
            } else {
                displayProducts(); // Show all products if category doesn't exist
            }
        } else {
            displayProducts(); // Show all products by default
        }
    }

    // Initialize products
    checkUrlHash();
});
