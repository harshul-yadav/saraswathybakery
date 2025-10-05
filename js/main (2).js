/**
 * Saraswathy Bakery - Main JavaScript File
 * Author: Replit Expert
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ======== Mobile Menu Toggle ========
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // Close menu when clicking on a menu item
        const menuLinks = mainNav.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', function() {
                mobileMenuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // ======== Sticky Header ========
    function handleScroll() {
        const header = document.getElementById('main-header');
        if (header) {
            if (window.scrollY > 20) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    // ======== Current Year for Footer Copyright ========
    const yearSpans = document.querySelectorAll('#current-year');
    const currentYear = new Date().getFullYear();
    
    yearSpans.forEach(span => {
        span.textContent = currentYear;
    });

    // ======== Handle URL Hash for Active Tab/Category ========
    function handleUrlHash() {
        const hash = window.location.hash.substring(1);
        
        if (hash && document.querySelector(`[data-category="${hash}"]`)) {
            // If we're on the products page and there's a category filter
            const categoryBtn = document.querySelector(`[data-category="${hash}"]`);
            if (categoryBtn) {
                const event = new Event('click');
                categoryBtn.dispatchEvent(event);
            }
        }
    }

    // Check for hash on initial load
    handleUrlHash();

    // Check for hash change (user clicks a link with hash)
    window.addEventListener('hashchange', handleUrlHash);

    // ======== Smooth Scroll for Anchor Links ========
    document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
});