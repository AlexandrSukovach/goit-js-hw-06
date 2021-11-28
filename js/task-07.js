const inputRange = document.querySelector('#font-size-control');
const inputRangeText = document.querySelector('#text');


inputRange.addEventListener('input', onInputChange);


function onInputChange(event) {
   let inputSize = event.currentTarget.value;
   inputRangeText.setAttribute("style", `font-size:${inputSize}px;`);
   // console.log(event.currentTarget.value);
};
