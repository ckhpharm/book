window.addEventListener('load', function() {
    // Hide the preloader once everything is loaded
    document.getElementById('preloader').style.display = 'none';
    showButton(); // Now we call showButton here to ensure it shows after loading
});

function showButton() {
    document.getElementById('titleContainer').style.opacity = 1; // Show the book title and author
    document.getElementById('openBookButton').style.display = 'block'; // Show the 'Open the Book' button
}

// document.addEventListener('DOMContentLoaded', function() {
//     const textElement = document.getElementById('typewriter-text');
//     const text = textElement.innerText;
//     textElement.innerText = ''; // Clear the text container

//     let index = 0; // Keeps track of the current letter position

//     function typeWriterEffect() {
//         if (index < text.length) {
//             textElement.innerText += text.charAt(index);
//             index++;
//             setTimeout(typeWriterEffect, 30); // Adjust timing as needed
//         }
//     }

//     typeWriterEffect(); // Kick off the effect
// });

document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('typewriter-text');
    // Store the innerHTML, then clear it to prevent premature display
    const htmlContent = container.innerHTML;
    container.innerHTML = ''; // Clear the container

    // Split the stored HTML content into paragraphs based on '</p>'
    const paragraphs = htmlContent.split('</p>').filter(p => p.trim() !== "").map(p => p + '</p>'); // Ensure each paragraph ends with '</p>'

    function typeWriterEffect(html, container) {
        // Convert HTML string to DOM nodes
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = html;
        const text = tempDiv.textContent || tempDiv.innerText || ""; // Extract text content
        let charIndex = 0; // Current character position

        function showNextChar() {
            if (charIndex < text.length) {
                container.textContent += text[charIndex++]; // Show next character
                setTimeout(showNextChar, 20); // Adjust timing as needed
            } else if (paragraphs.length > 0) {
                // Proceed to the next paragraph
                const nextParagraphHtml = paragraphs.shift();
                const nextParagraphDiv = document.createElement('div');
                nextParagraphDiv.innerHTML = nextParagraphHtml; // Set HTML content
                container.appendChild(nextParagraphDiv);
                const p = document.createElement('p');
                nextParagraphDiv.replaceWith(p); // Replace div with p for semantics
                typeWriterEffect(nextParagraphHtml, p); // Start typing next paragraph
            }
        }

        showNextChar(); // Start showing characters
    }

    if (paragraphs.length > 0) {
        const firstParagraphHtml = paragraphs.shift();
        const p = document.createElement('p');
        container.appendChild(p); // Add the first paragraph container
        typeWriterEffect(firstParagraphHtml, p); // Start typing first paragraph
    }
});


document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials (for demonstration only)
    const correctUsername = '0505';
    const correctPassword = '0606';

    if (username === correctUsername && password === correctPassword) {
        document.getElementById('loginMessage').innerText = 'Login successful!';
        // Here, you could redirect the user or show a different part of the application
        window.location.href = 'cover.html';
    } else {
        document.getElementById('loginMessage').innerText = 'Invalid credentials!';
    }
});
