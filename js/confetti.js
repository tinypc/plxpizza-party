function createConfetti() {
  const confettiCount = 200; // Adjust the number of confetti particles
  const confettiContainer = document.querySelector('.confetti-container');
  const containerWidth = confettiContainer.offsetWidth;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.backgroundImage = `url('images/favicon-16x16.png')`;

    const rotate = Math.random() * 360; // Random rotation angle
    const randomLeft = Math.random(); // Random value between 0 and 1 for left position
    const animationDuration = Math.random() * 1 + 1; // Random duration between 1 and 2 seconds

    confetti.style.animation = `confetti-fall ${animationDuration}s linear forwards`; // Random animation duration
    confetti.style.transform = `rotate(${rotate}deg)`;
    confetti.style.setProperty('--random-left', randomLeft); // Set a custom CSS variable for random left position

    // Set the left position of the confetti particle to a random point within the container
    const randomX = Math.random() * containerWidth;
    confetti.style.left = `${randomX}px`;

    confettiContainer.appendChild(confetti);
  }

  // Stop the confetti after a certain duration (adjust the value in milliseconds as desired)
  const confettiDuration = 5000; // 5000 milliseconds = 5 seconds
  setTimeout(() => {
    const confettiParticles = document.querySelectorAll('.confetti-particle');
    confettiParticles.forEach((particle) => {
      particle.style.animation = 'none'; // Remove the animation to stop confetti
    });
  }, confettiDuration);
}

// Attach the click event listener to the container
const confettiContainer = document.querySelector('.confetti-container');
confettiContainer.addEventListener('click', createConfetti);
