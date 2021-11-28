
const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);

function onInputBlur() {
   if (input.value.length === parseInt(inputLength)) {
      this.classList.remove('invalid');
      this.classList.add('valid');
   } else {
      this.classList.remove('valid');
      this.classList.add('invalid');
   };
};



