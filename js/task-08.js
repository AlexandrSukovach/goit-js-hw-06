
const form = document.querySelector('.login-form');

form.setAttribute("id", "reset");
form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
   event.preventDefault();

   const formElements = event.currentTarget.elements;
   const Email = formElements.email.value;
   const Password = formElements.password.value;

   const formValue = {
      Email,
      Password,
   };
   if (Email === '' || Password === '') {
      alert('Please fill in the field');
   } else {
      console.log(formValue);
      document.getElementById("reset").reset();
   };
};