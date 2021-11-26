
let counterValue = 0;

const refs = {
   decrementBtn: document.querySelector('[data-action="decrement"]'),
   incrementBtn: document.querySelector('[data-action="increment"]'),
   spanElement: document.querySelector('#value'),
};

const counter = {
   increment() {
      counterValue += 1;
   },
   decrement() {
      counterValue -= 1;
   },
};

refs.decrementBtn.addEventListener('click', function () {
   counter.decrement();
   refs.spanElement.textContent = counterValue;
});

refs.incrementBtn.addEventListener('click', function () {
   counter.increment();
   refs.spanElement.textContent = counterValue;
});

