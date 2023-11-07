const countdownElement = document.getElementById('countdown');

function countdown() {
  const targetDate = new Date('December 31, 2023 23:59:59').getTime();
  
  const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = targetDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    countdownElement.innerHTML = `Countdown: ${days}d ${hours}h ${minutes}m ${seconds}s`;
    
    if (distance < 0) {
      clearInterval(interval);
      countdownElement.innerHTML = 'EXPIRED';
    }
  }, 1000);
}

countdown();
