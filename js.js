
    // 7. Current Date & Time
    function updateDateTime() {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
        document.getElementById('currentDateTime').textContent = now.toLocaleDateString('en-US', options);
    }
    setInterval(updateDateTime, 1000);
    updateDateTime();

    const startCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                if (count < target) {
                    counter.innerText = Math.ceil(count + inc);
                    setTimeout(updateCount, 10);
                } else {
                    counter.innerText = target;
                }
            };
            updateCount();
        });
    };
// key statetic section
    document.addEventListener("DOMContentLoaded", () => {
        const counters = document.querySelectorAll('.counter');
        const speed = 200; // The lower the slower

        const runCounter = () => {
            counters.forEach(counter => {
                const updateCount = () => {
                    const target = +counter.getAttribute('data-target');
                    const count = +counter.innerText;

                    // Lower animation speed for smaller numbers
                    const inc = target / speed;

                    if (count < target) {
                        counter.innerText = Math.ceil(count + inc);
                        setTimeout(updateCount, 15);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCount();
            });
        };

        // Simple Intersection Observer to start counting when visible
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                runCounter();
                observer.disconnect(); // Run only once
            }
        }, { threshold: 0.5 });

        observer.observe(document.querySelector('.counter').parentElement);
    });

    // Intersection Observer to trigger counters when visible
    const observer = new IntersectionObserver((entries) => {
        if(entries[0].isIntersecting) startCounters();
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.bg-primary'));


    // Admission
    
    // 3. Confirmation popup window when submit form
    document.getElementById('admissionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const confirmAction = confirm("Are you sure you want to submit your admission application?");
        if (confirmAction) {
            alert("Thank you! Your application has been submitted successfully.");
            this.reset();
        }
    });



    // contact
    
    // Simple Alert for Contact Form
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you! Your message has been sent. We will contact you soon.");
        this.reset();
    });



    // Login
    
    // 3. Confirmation popup window when submit the login form
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        let loginType = document.querySelector('input[name="loginType"]:checked').id === "studentLogin" ? "Student" : "Teacher";
        
        const confirmLogin = confirm("Are you sure you want to log in as a " + loginType + "?");
        
        if (confirmLogin) {
            alert("Login Successful! Redirecting to " + loginType + " Dashboard...");
            // Redirect logic would go here
            window.location.href = "index.html";
        }
    });