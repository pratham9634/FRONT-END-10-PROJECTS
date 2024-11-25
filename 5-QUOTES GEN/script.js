const quoteText = document.querySelector('.quote');
const authorText = document.querySelector('.author');

// Function to fetch and display a new quote
async function getQuote() {
    try {
        // Fetch quote from the API
        const response = await fetch('https://quotes-api-self.vercel.app/quote');
        const data = await response.json();
        const shareButton = document.querySelector('.btn');
        shareButton.style.transform = 'scale(1.1)';
        
        // Reset the scale after 200ms
        setTimeout(() => {
            shareButton.style.transform = 'scale(1)';
        }, 100);
        
        // Display the quote and author
        quoteText.textContent = `"${data.quote}"`;
        authorText.textContent = `- ${data.author}`;
    } catch (error) {
        quoteText.textContent = 'Oops! Something went wrong';
        authorText.textContent = 'Error fetching quote';
        console.error('Error:', error);
    }
}

// Function to share on Instagram
function shareOnInstagram() {
    // Add scale effect to the button
    const shareButton = document.querySelector('.btn2');
    shareButton.style.transform = 'scale(1.1)';
    
    // Reset the scale after 200ms
    setTimeout(() => {
        shareButton.style.transform = 'scale(1)';
    }, 10);

    const quote = quoteText.textContent;
    const author = authorText.textContent;
    const shareText = `${quote} ${author}`;
    
    // Create Instagram share URL
    const instagramUrl = `https://www.instagram.com/?caption=${encodeURIComponent(shareText)}`;
    
    // Open Instagram in new window
    window.open(instagramUrl, '_blank');
}

// Load a quote when the page loads
getQuote();

