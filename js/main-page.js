const selector = ".goCrazy";

const startAnimations = () => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element) => {
    const max = +element.dataset.max;
    const min = +element.dataset.min;
    const duration = +element.dataset.duration;
    const unit = element.dataset.unit;
    let counter = min;

    const interval = setInterval(() => {
      counter++;
      element.textContent = counter + unit;
      if (counter === max) {
        clearInterval(interval);
      }
    }, duration / (max - min));
  });
}

startAnimations(); 