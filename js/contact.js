/**
 * Saraswathy Bakery - Contact Form JavaScript File
 * Author: Replit Expert
 * Version: 1.0
 */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    // Get input fields
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
    
    // Get error message elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const messageError = document.getElementById('messageError');
    
    if (!contactForm) {
        return; // Exit if elements don't exist on this page
    }

    // Validation patterns
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phonePattern = /^\d{10,}$/;

    // Validate form
    function validateForm() {
        let isValid = true;
        
        // Reset error messages
        resetErrors();
        
        // Validate name
        if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
            nameError.textContent = 'Please enter your name (minimum 2 characters)';
            nameError.style.display = 'block';
            isValid = false;
        }
        
        // Validate email
        if (!emailInput.value.trim() || !emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
            isValid = false;
        }
        
        // Validate phone
        if (!phoneInput.value.trim() || !phonePattern.test(phoneInput.value.trim())) {
            phoneError.textContent = 'Please enter a valid phone number (minimum 10 digits)';
            phoneError.style.display = 'block';
            isValid = false;
        }
        
        // Validate message
        if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
            messageError.textContent = 'Please enter your message (minimum 10 characters)';
            messageError.style.display = 'block';
            isValid = false;
        }
        
        return isValid;
    }

    // Reset error messages
    function resetErrors() {
        nameError.style.display = 'none';
        emailError.style.display = 'none';
        phoneError.style.display = 'none';
        messageError.style.display = 'none';
    }

    // Reset form
    function resetForm() {
        contactForm.reset();
        resetErrors();
    }

    // Show form success message
    function showSuccessMessage() {
        formSuccess.style.display = 'block';
        
        // Hide the success message after 5 seconds
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (validateForm()) {
            // In a real application, you would send the form data to a server here
            console.log('Form submitted successfully!');
            console.log('Name:', nameInput.value);
            console.log('Email:', emailInput.value);
            console.log('Phone:', phoneInput.value);
            console.log('Message:', messageInput.value);
            
            // Simulate successful form submission
            resetForm();
            showSuccessMessage();
        }
    });

    // Real-time validation for inputs
    nameInput.addEventListener('blur', function() {
        if (!this.value.trim() || this.value.trim().length < 2) {
            nameError.textContent = 'Please enter your name (minimum 2 characters)';
            nameError.style.display = 'block';
        } else {
            nameError.style.display = 'none';
        }
    });
    
    emailInput.addEventListener('blur', function() {
        if (!this.value.trim() || !emailPattern.test(this.value.trim())) {
            emailError.textContent = 'Please enter a valid email address';
            emailError.style.display = 'block';
        } else {
            emailError.style.display = 'none';
        }
    });
    
    phoneInput.addEventListener('blur', function() {
        if (!this.value.trim() || !phonePattern.test(this.value.trim())) {
            phoneError.textContent = 'Please enter a valid phone number (minimum 10 digits)';
            phoneError.style.display = 'block';
        } else {
            phoneError.style.display = 'none';
        }
    });
    
    messageInput.addEventListener('blur', function() {
        if (!this.value.trim() || this.value.trim().length < 10) {
            messageError.textContent = 'Please enter your message (minimum 10 characters)';
            messageError.style.display = 'block';
        } else {
            messageError.style.display = 'none';
        }
    });
});