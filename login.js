// // Coffee Shop Login Page Interactive Features

// // Wait for DOM to load
// document.addEventListener('DOMContentLoaded', () => {
//   // Get form elements
//   const loginForm = document.querySelector('.login-form') as HTMLFormElement;
//   const emailInput = document.getElementById('email') as HTMLInputElement;
//   const passwordInput = document.getElementById('password') as HTMLInputElement;
//   const loginBtn = document.querySelector('.login-btn') as HTMLButtonElement;
//   const socialBtns = document.querySelectorAll('.social-btn');

//   // Form validation
//   function validateEmail(email: string): boolean {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   function validatePassword(password: string): boolean {
//     return password.length >= 6;
//   }

//   function showInputError(input: HTMLInputElement, message: string) {
//     // Remove existing error
//     const existingError = input.parentElement?.querySelector('.error-message');
//     if (existingError) {
//       existingError.remove();
//     }

//     // Add error styling
//     input.style.borderBottomColor = '#e74c3c';

//     // Create error message
//     const errorElement = document.createElement('div');
//     errorElement.className = 'error-message';
//     errorElement.textContent = message;
//     errorElement.style.cssText = `
//       color: #e74c3c;
//       font-size: 12px;
//       margin-top: 5px;
//       animation: shake 0.5s ease-in-out;
//     `;

//     input.parentElement?.appendChild(errorElement);
//   }

//   function clearInputError(input: HTMLInputElement) {
//     const errorElement = input.parentElement?.querySelector('.error-message');
//     if (errorElement) {
//       errorElement.remove();
//     }
//     input.style.borderBottomColor = '';
//   }

//   // Real-time validation
//   emailInput.addEventListener('blur', () => {
//     if (emailInput.value && !validateEmail(emailInput.value)) {
//       showInputError(emailInput, 'Please enter a valid email address');
//     } else {
//       clearInputError(emailInput);
//     }
//   });

//   passwordInput.addEventListener('blur', () => {
//     if (passwordInput.value && !validatePassword(passwordInput.value)) {
//       showInputError(passwordInput, 'Password must be at least 6 characters');
//     } else {
//       clearInputError(passwordInput);
//     }
//   });

//   // Clear errors on focus
//   emailInput.addEventListener('focus', () => clearInputError(emailInput));
//   passwordInput.addEventListener('focus', () => clearInputError(passwordInput));

//   // Form submission
//   loginForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = emailInput.value.trim();
//     const password = passwordInput.value;

//     // Clear previous errors
//     clearInputError(emailInput);
//     clearInputError(passwordInput);

//     let hasErrors = false;

//     // Validate email
//     if (!email) {
//       showInputError(emailInput, 'Email is required');
//       hasErrors = true;
//     } else if (!validateEmail(email)) {
//       showInputError(emailInput, 'Please enter a valid email address');
//       hasErrors = true;
//     }

//     // Validate password
//     if (!password) {
//       showInputError(passwordInput, 'Password is required');
//       hasErrors = true;
//     } else if (!validatePassword(password)) {
//       showInputError(passwordInput, 'Password must be at least 6 characters');
//       hasErrors = true;
//     }

//     if (!hasErrors) {
//       // Show loading state
//       showLoadingState();

//       // Simulate login process
//       setTimeout(() => {
//         showSuccessMessage();
//       }, 2000);
//     }
//   });

//   function showLoadingState() {
//     loginBtn.disabled = true;
//     loginBtn.innerHTML = `
//       <div class="loading-spinner"></div>
//       <span>Signing In...</span>
//     `;

//     // Add loading spinner styles
//     const style = document.createElement('style');
//     style.textContent = `
//       .loading-spinner {
//         width: 20px;
//         height: 20px;
//         border: 2px solid rgba(255, 255, 255, 0.3);
//         border-top: 2px solid white;
//         border-radius: 50%;
//         animation: spin 1s linear infinite;
//         margin-right: 10px;
//       }

//       @keyframes spin {
//         0% { transform: rotate(0deg); }
//         100% { transform: rotate(360deg); }
//       }
//     `;
//     document.head.appendChild(style);
//   }

//   function showSuccessMessage() {
//     loginBtn.innerHTML = `
//       <span>✓ Welcome to BrewCafe!</span>
//     `;
//     loginBtn.style.background = '#27ae60';

//     // Reset after 3 seconds
//     setTimeout(() => {
//       loginBtn.disabled = false;
//       loginBtn.innerHTML = '<span>Sign In</span><div class="btn-ripple"></div>';
//       loginBtn.style.background = '';
//     }, 3000);
//   }

//   // Social login buttons
//   socialBtns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//       e.preventDefault();
//       const platform = btn.classList.contains('google') ? 'Google' : 'Facebook';

//       // Add click animation
//       btn.style.transform = 'scale(0.95)';
//       setTimeout(() => {
//         btn.style.transform = '';
//       }, 150);

//       // Show message
//       showNotification(`${platform} login coming soon!`, 'info');
//     });
//   });

//   // Notification system
//   function showNotification(message: string, type: 'success' | 'error' | 'info' = 'info') {
//     const notification = document.createElement('div');
//     notification.className = `notification notification-${type}`;
//     notification.textContent = message;

//     const colors = {
//       success: '#27ae60',
//       error: '#e74c3c',
//       info: '#3498db'
//     };

//     notification.style.cssText = `
//       position: fixed;
//       top: 20px;
//       right: 20px;
//       background: ${colors[type]};
//       color: white;
//       padding: 15px 20px;
//       border-radius: 10px;
//       box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
//       z-index: 1000;
//       animation: slideInRight 0.5s ease-out;
//       font-size: 14px;
//       font-weight: 500;
//     `;

//     document.body.appendChild(notification);

//     // Remove after 3 seconds
//     setTimeout(() => {
//       notification.style.animation = 'slideOutRight 0.5s ease-out';
//       setTimeout(() => {
//         document.body.removeChild(notification);
//       }, 500);
//     }, 3000);
//   }

//   // Add notification animations
//   const notificationStyles = document.createElement('style');
//   notificationStyles.textContent = `
//     @keyframes slideInRight {
//       from {
//         transform: translateX(100%);
//         opacity: 0;
//       }
//       to {
//         transform: translateX(0);
//         opacity: 1;
//       }
//     }

//     @keyframes slideOutRight {
//       from {
//         transform: translateX(0);
//         opacity: 1;
//       }
//       to {
//         transform: translateX(100%);
//         opacity: 0;
//       }
//     }

//     @keyframes shake {
//       0%, 100% { transform: translateX(0); }
//       10%, 30%, 50%, 70%, 90% { transform: translateX(-3px); }
//       20%, 40%, 60%, 80% { transform: translateX(3px); }
//     }
//   `;
//   document.head.appendChild(notificationStyles);

//   // Easter egg: Coffee cup click
//   const coffeeCup = document.querySelector('.coffee-cup');
//   coffeeCup?.addEventListener('click', () => {
//     // Add extra bounce animation
//     coffeeCup.style.animation = 'none';
//     setTimeout(() => {
//       coffeeCup.style.animation = 'bounce 0.5s ease-in-out 3, bounce 2s ease-in-out infinite 1.5s';
//     }, 10);

//     showNotification('☕ Thanks for the coffee love!', 'success');
//   });

//   // Keyboard shortcuts
//   document.addEventListener('keydown', (e) => {
//     // Enter key on any input focuses next or submits
//     if (e.key === 'Enter') {
//       if (document.activeElement === emailInput) {
//         passwordInput.focus();
//       } else if (document.activeElement === passwordInput) {
//         loginForm.dispatchEvent(new Event('submit'));
//       }
//     }
//   });

//   // Add floating particles effect
//   function createFloatingParticle() {
//     const particle = document.createElement('div');
//     particle.style.cssText = `
//       position: fixed;
//       width: 4px;
//       height: 4px;
//       background: rgba(139, 69, 19, 0.3);
//       border-radius: 50%;
//       pointer-events: none;
//       z-index: -1;
//       animation: floatUp 6s linear infinite;
//     `;

//     particle.style.left = Math.random() * 100 + '%';
//     particle.style.bottom = '-10px';

//     document.body.appendChild(particle);

//     setTimeout(() => {
//       document.body.removeChild(particle);
//     }, 6000);
//   }

//   // Create floating particles periodically
//   setInterval(createFloatingParticle, 3000);

//   // Add floating animation
//   const floatingStyles = document.createElement('style');
//   floatingStyles.textContent = `
//     @keyframes floatUp {
//       0% {
//         transform: translateY(0) rotate(0deg);
//         opacity: 0;
//       }
//       10% {
//         opacity: 1;
//       }
//       90% {
//         opacity: 1;
//       }
//       100% {
//         transform: translateY(-100vh) rotate(360deg);
//         opacity: 0;
//       }
//     }
//   `;
//   document.head.appendChild(floatingStyles);

//   console.log('☕ EvergreenCafe Login Page Loaded Successfully!');
// });
