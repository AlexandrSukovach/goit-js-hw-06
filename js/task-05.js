const refs = {
   inputName: document.querySelector('#name-input'),
   spanname: document.querySelector('#name-output'),
};

refs.inputName.addEventListener("input", (event) => {
   if (refs.inputName.value === '') {
      refs.spanname.innerHTML = 'Anonymous'
   } else {
      refs.spanname.textContent = event.currentTarget.value;
   };
});