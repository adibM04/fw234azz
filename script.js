const pages = document.querySelectorAll('.page');
let currentPage = 0; // To keep track of the current page

// Function to show the current page
function showPage(index) {
  pages.forEach((page, i) => {
    // Show the page if it's the current one
    if (i === index) {
      page.style.display = 'block';
    } else {
      page.style.display = 'none';
    }
  });
}

// Initial display of the first page
showPage(currentPage);

// Next button click event
document.getElementById('nextBtn').addEventListener('click', () => {
  if (currentPage < pages.length - 1) {
    currentPage++;
    showPage(currentPage);
  }
});

// Previous button click event
document.getElementById('prevBtn').addEventListener('click', () => {
  if (currentPage > 0) {
    currentPage--;
    showPage(currentPage);
  }
});

// Function to create flying love emojis
function createFlyingEmojis() {
  const emojiContainer = document.getElementById('emojiContainer');
  const emoji = document.createElement('div');
  emoji.innerText = '❤️'; // You can use other emojis like 💕, 💖, etc.
  emoji.classList.add('emoji');
  
  // Set random position for each emoji
  emoji.style.left = `${Math.random() * 100}vw`;
  
  // Append the emoji to the container
  emojiContainer.appendChild(emoji);
  
  // Remove the emoji after animation ends
  setTimeout(() => {
    emoji.remove();
  }, 5000); // 5 seconds (matches the animation duration)
}

// Generate flying emojis at a constant rate
setInterval(createFlyingEmojis, 1000); // Creates a new emoji every second
