const messages = [
    "Hi Treasure 💖",
    "I know things have been really heavy lately...",
    "Loss, illness, and even your laptop being taken—none of it is fair.",
    "I just want you to know... you're not alone.",
    "Even in silence, you're in my thoughts every single day.",
    "You're stronger than you know, and you’ve got someone cheering you on always.",
    "Sending love, comfort, and every gentle hug from a distance. 💙"
  ];
  
  let index = 0;
  const messageElement = document.getElementById("message");
  const nextBtn = document.getElementById("next-btn");
  
  function showMessage() {
    messageElement.style.opacity = 0;
    setTimeout(() => {
      messageElement.textContent = messages[index];
      messageElement.classList.remove("fade-in");
      void messageElement.offsetWidth; // Trigger reflow for animation
      messageElement.classList.add("fade-in");
      index++;
      if (index >= messages.length) {
        nextBtn.style.display = "none";
      }
    }, 300);
  }
  
  nextBtn.addEventListener("click", showMessage);
  
  // Play music on first interaction if autoplay is blocked
  document.addEventListener("DOMContentLoaded", () => {
    const bgMusic = document.getElementById("bg-music");
    bgMusic.play().catch(() => {
      nextBtn.addEventListener("click", () => {
        bgMusic.play();
      }, { once: true });
    });
  });
  
  // Initial message
  showMessage();  