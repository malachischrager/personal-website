// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typing animation effect
document.addEventListener('DOMContentLoaded', function() {
    const bioText = "I'm passionate about a variety of topics within the realm of programming and finance. When I'm not coding or working on new projects, you'll likely find me watching college football or basketball, hitting the slopes, or in the pool playing water polo. I enjoy connecting with like minded people and am always open to conversations about literally anything";
    const bioParagraph = document.getElementById('bio-paragraph');
    const typingSpeed = 30; // milliseconds per character
    let charIndex = 0;

    function typeText() {
        if (charIndex < bioText.length) {
            // Clear the paragraph and add text up to the current character index
            bioParagraph.textContent = bioText.substring(0, charIndex + 1);
            charIndex++;
            setTimeout(typeText, typingSpeed);
        } else {
            // Remove typing cursor from h1 after bio is fully typed
            document.querySelector('.typing-effect').classList.remove('typing-effect');
            
            // Show video after typing is complete
            setTimeout(() => {
                document.querySelector('.video-container').style.opacity = '1';
            }, 500);
        }
    }

    // Start typing animation
    setTimeout(typeText, 1000);
    
    // Initially hide the video container
    document.querySelector('.video-container').style.opacity = '0';
    document.querySelector('.video-container').style.transition = 'opacity 1s ease';
});
