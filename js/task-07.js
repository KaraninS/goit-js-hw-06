const fontSizeControlRef = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

fontSizeControlRef.addEventListener('input',(event) =>{
  const size = event.currentTarget.value;

  text.style.fontSize  = `${size}px`;
});
