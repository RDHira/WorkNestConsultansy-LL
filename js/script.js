    const closeBtn = document.getElementById("header-close");
    const headerBar = document.getElementById("header-bar");
    const navbar = document.getElementById("navbar");
    const main = document.getElementById("main-content");
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    closeBtn.addEventListener("click", () => {
      headerBar.style.display = "none"; // hide header bar
      navbar.classList.add("navbar-top"); // move navbar to top
      main.classList.remove("mt-[96px]");
      main.classList.add("mt-[64px]");
    });

    // mobile menu toggle
menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// main section
// hero section for slide
// const swiper = new Swiper('.swiper', {
//     loop: true,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
    //effect: 'fade', // smooth fade transition
  //});
   const swiper = new Swiper('.swiper', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 4000, disableOnInteraction: false },
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    observer: true,         // important: watch DOM changes (images loading)
    observeParents: true,   // important when parent size changes
    preloadImages: true,
    // optional: enable lazy loading if you want performance
    // lazy: { loadPrevNext: true },
  });

// navbar for dropdown
const menuToggle = document.getElementById('menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileServicesBtn = document.getElementById('mobileServicesBtn');
    const mobileServices = document.getElementById('mobileServices');
    const mobileMoreBtn = document.getElementById('mobileMoreBtn');
    const mobileMore = document.getElementById('mobileMore');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Toggle mobile dropdowns
    mobileServicesBtn.addEventListener('click', () => {
      mobileServices.classList.toggle('hidden');
    });
    mobileMoreBtn.addEventListener('click', () => {
      mobileMore.classList.toggle('hidden');
    });



  // Destination section
  // Modal Content
        const modalContent = {
            australia: '<h3 class="text-2xl font-semibold mb-4">Australia</h3><p class="text-gray-600 mb-4">Renowned for its high-quality education and strong graduate employment rates. Top universities include University of Sydney and Melbourne.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>World-class beaches</li><li>Innovative research</li><li>Post-study work visa</li></ul>',
            canada: '<h3 class="text-2xl font-semibold mb-4">Canada</h3><p class="text-gray-600 mb-4">Offers cooperative education and pathways to permanent residency. Key institutions: University of Toronto, UBC.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>Multicultural society</li><li>Affordable tuition</li><li>Beautiful landscapes</li></ul>',
            uk: '<h3 class="text-2xl font-semibold mb-4">United Kingdom</h3><p class="text-gray-600 mb-4">Home to historic universities with cutting-edge research. Oxford, Cambridge, and Imperial College lead the way.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>Rich history</li><li>Global networks</li><li>Short course durations</li></ul>',
            us: '<h3 class="text-2xl font-semibold mb-4">United States</h3><p class="text-gray-600 mb-4">Focuses on STEM fields and innovation. Harvard, MIT, and Stanford are top choices.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>Diverse campuses</li><li>Tech hubs</li><li>Scholarships available</li></ul>',
            nz: '<h3 class="text-2xl font-semibold mb-4">New Zealand</h3><p class="text-gray-600 mb-4">Emphasizes practical, hands-on learning. Universities like Auckland and Otago offer stunning environments.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>Adventure activities</li><li>Safe environment</li><li>Work rights for students</li></ul>',
            eu: '<h3 class="text-2xl font-semibold mb-4">Europe (EU)</h3><p class="text-gray-600 mb-4">Diverse options with scholarships across countries like Germany, France, and Netherlands.</p><ul class="list-disc list-inside text-gray-600 mb-4"><li>Cultural immersion</li><li>Low or no tuition fees</li><li>Travel opportunities</li></ul>'
        };

        function openModal(destination) {
            document.getElementById('modalContent').innerHTML = modalContent[destination];
            document.getElementById('destinationModal').classList.remove('hidden');
        }

        function closeModal() {
            document.getElementById('destinationModal').classList.add('hidden');
        }

        // Close on outside click
        document.getElementById('destinationModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-slide-up').forEach(el => {
            observer.observe(el);
            el.style.animationPlayState = 'paused';
        });


        // destination cards 
      function bookNow(country) {
    alert("List of all Universities in " + country + "!");
  }

//   for Footer
document.getElementById("year").textContent = new Date().getFullYear();


// Sign In / Sign Up
const signinTab = document.getElementById('signinTab');
    const signupTab = document.getElementById('signupTab');
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    const switchToSignup = document.getElementById('switchToSignup');
    const switchToSignin = document.getElementById('switchToSignin');

    // Toggle between forms
    function showSignin() {
      signinForm.classList.remove('hidden');
      signupForm.classList.add('hidden');
      signinTab.classList.add('border-b-2', 'border-green-600', 'text-green-600');
      signupTab.classList.remove('border-b-2', 'border-green-600', 'text-green-600');
    }

    function showSignup() {
      signupForm.classList.remove('hidden');
      signinForm.classList.add('hidden');
      signupTab.classList.add('border-b-2', 'border-orange-500', 'text-orange-600');
      signinTab.classList.remove('border-b-2', 'border-green-600', 'text-green-600');
    }

    signinTab.addEventListener('click', showSignin);
    signupTab.addEventListener('click', showSignup);
    switchToSignup.addEventListener('click', showSignup);
    switchToSignin.addEventListener('click', showSignin);

    // Password toggle
    const toggleSigninPassword = document.getElementById('toggleSigninPassword');
    const signinPassword = document.getElementById('signinPassword');
    toggleSigninPassword.addEventListener('click', () => {
      const type = signinPassword.type === 'password' ? 'text' : 'password';
      signinPassword.type = type;
      toggleSigninPassword.innerHTML = type === 'password'
        ? '<i class="fa-regular fa-eye"></i>'
        : '<i class="fa-regular fa-eye-slash"></i>';
    });