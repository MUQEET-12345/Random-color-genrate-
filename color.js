function getColor() {
  const randomNumber = Math.floor(Math.random() *  16777215)
  const covert = '#' + randomNumber.toString(16)
  document.body.style.backgroundColor = covert ;
  document.getElementById('color-code').innerText = covert;
};
getColor()
document.getElementById('random-color').addEventListener('click',
  getColor

)