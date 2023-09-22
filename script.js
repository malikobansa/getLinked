let counterElement = document.getElementById('counter');
let timeLeft = 3600; // 1 hour in seconds

function formatTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    let minutes = Math.floor(seconds / 60);
    seconds %= 60;

    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return `${hours}H ${minutes}M ${seconds}S`;
}

function startCounter() {
    setInterval(() => {
        if(timeLeft > 0) {
            timeLeft--;
            counterElement.innerText = formatTime(timeLeft);
        }
    }, 1000);
}

startCounter();



const items = document.querySelectorAll('.accordion button');

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach((item) => item.addEventListener('click', toggleAccordion));

