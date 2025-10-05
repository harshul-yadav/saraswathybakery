/**
 * Saraswathy Bakery - Testimonials JavaScript File
 * Author: Replit Expert
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Testimonials data
    const testimonials = [
        {
            id: 1,
            name: "Priya Menon",
            role: "Local Resident",
            text: "I've been shopping at Saraswathy Bakery for years. Their bread is always fresh, and the staff is incredibly friendly. It's more than just a store; it's part of our community.",
            rating: 5
        },
        {
            id: 2,
            name: "Arjun K.",
            role: "Student",
            text: "As a student, I appreciate being able to pick up stationery and snacks in one convenient location. The prices are reasonable, and they always have what I need for school.",
            rating: 5
        },
        {
            id: 3,
            name: "Rajesh & Sunita",
            role: "Family Customers",
            text: "The cakes from Saraswathy Bakery have been part of our family celebrations for over a decade. Quality ingredients and authentic taste that reminds us of home-baked goodness.",
            rating: 4
        },
        {
            id: 4,
            name: "Meera Nair",
            role: "Teacher",
            text: "I regularly buy stationery for my classroom from Saraswathy Bakery. The quality is excellent, and the owner is always helpful in finding exactly what I need.",
            rating: 5
        },
        {
            id: 5,
            name: "Thomas Joseph",
            role: "Office Worker",
            text: "Their tea-time snacks are the highlight of my work breaks. I stop by almost every day for fresh baked goods, and the friendly atmosphere keeps me coming back.",
            rating: 5
        },
        {
            id: 6,
            name: "Lakshmi Krishnan",
            role: "Housewife",
            text: "Saraswathy Bakery has been my go-to place for all kitchen essentials. The quality of their groceries is consistently good, and I trust their products completely.",
            rating: 5
        }
    ];

    // Elements
    const testimonialsContainer = document.querySelector('.testimonials-container');
    const prevButton = document.querySelector('.testimonial-prev');
    const nextButton = document.querySelector('.testimonial-next');
    
    if (!testimonialsContainer || !prevButton || !nextButton) {
        return; // Exit if elements don't exist on the page
    }

    let currentSlide = 0;
    let isMobile = window.innerWidth < 768;
    let slidesPerView = isMobile ? 1 : 3;
    let maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesPerView) - 1);

    // Create testimonial HTML
    function createTestimonialHTML(testimonial) {
        return `
            <div class="testimonial-item">
                <div class="testimonial-card">
                    <div class="testimonial-stars">
                        ${createStarRating(testimonial.rating)}
                    </div>
                    <p class="testimonial-text">${testimonial.text}</p>
                    <div class="testimonial-author">
                        <p class="testimonial-name">${testimonial.name}</p>
                        <p class="testimonial-role">${testimonial.role}</p>
                    </div>
                </div>
            </div>
        `;
    }

    // Create star rating HTML
    function createStarRating(rating) {
        let stars = '';
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars += '<i class="fas fa-star"></i>';
            } else if (i - 0.5 <= rating) {
                stars += '<i class="fas fa-star-half-alt"></i>';
            } else {
                stars += '<i class="far fa-star"></i>';
            }
        }
        return stars;
    }

    // Initialize testimonials
    function initTestimonials() {
        testimonialsContainer.innerHTML = '';
        
        testimonials.forEach(testimonial => {
            testimonialsContainer.innerHTML += createTestimonialHTML(testimonial);
        });
        
        updateSlideState();
    }

    // Update slide position
    function updateSlidePosition() {
        const moveAmount = currentSlide * 100;
        testimonialsContainer.style.transform = `translateX(-${moveAmount}%)`;
    }

    // Update buttons state
    function updateButtonsState() {
        prevButton.disabled = currentSlide === 0;
        nextButton.disabled = currentSlide === maxSlide;
        
        if (prevButton.disabled) {
            prevButton.classList.add('disabled');
        } else {
            prevButton.classList.remove('disabled');
        }
        
        if (nextButton.disabled) {
            nextButton.classList.add('disabled');
        } else {
            nextButton.classList.remove('disabled');
        }
    }

    // Update slide state
    function updateSlideState() {
        updateSlidePosition();
        updateButtonsState();
    }

    // Previous slide
    prevButton.addEventListener('click', () => {
        if (currentSlide > 0) {
            currentSlide--;
            updateSlideState();
        }
    });

    // Next slide
    nextButton.addEventListener('click', () => {
        if (currentSlide < maxSlide) {
            currentSlide++;
            updateSlideState();
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        const wasMobile = isMobile;
        isMobile = window.innerWidth < 768;
        
        // If mobile state changed, reset the testimonials
        if (wasMobile !== isMobile) {
            slidesPerView = isMobile ? 1 : 3;
            maxSlide = Math.max(0, Math.ceil(testimonials.length / slidesPerView) - 1);
            
            // Adjust current slide if it's now out of bounds
            if (currentSlide > maxSlide) {
                currentSlide = maxSlide;
            }
            
            updateSlideState();
        }
    });

    // Initialize testimonials
    initTestimonials();
});
