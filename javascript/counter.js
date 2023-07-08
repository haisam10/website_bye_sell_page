
  function animateCounter(counterId, targetNumber, finalText) {
    var counter = document.getElementById(counterId);
    var currentNumber = parseInt(counter.innerHTML);

    if (currentNumber < targetNumber) {
      setTimeout(function () {
        counter.innerHTML = currentNumber + 1;
        animateCounter(counterId, targetNumber, finalText);
      }, 20); // Change the animation speed by adjusting the timeout value
    } else {
      counter.innerHTML = finalText;
    }
  }

  animateCounter("counter1", 6, "+6");
  animateCounter("counter2", 150, "150+");
  animateCounter("counter3", 98, "98+");