import './style.css'
import './src/styles/index.styl'



const eles = document.getElementById('eles');
console.log(eles.content)
document.querySelector('#app').appendChild(eles.content.cloneNode(true));

const btnShow = document.getElementById('showDialog');
btnShow.onclick = () =>{
  document.querySelector('dialog').show()
}
const inputFn = (e) =>{
  e.target.setAttribute('value',e.target.value)
  e.target.style.setProperty('--value',`${e.target.value}%`);
}

document.querySelector('#range01').oninput = inputFn
document.querySelector('#range02').oninput = inputFn

