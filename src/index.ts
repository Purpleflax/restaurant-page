import "./style.scss";

console.log('Hello World, updated!');

let a: number = 1;
document.addEventListener('click', () => {
  document.body.innerHTML = `Hello World, updated! ${a}`;
  a++;
});