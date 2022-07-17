import './style.css'
import './src/styles/index.styl'



const eles = document.getElementById('eles');
console.log(eles.content)
document.querySelector('#app').appendChild(eles.content.cloneNode(true));

const btnShow = document.getElementById('showDialog');
btnShow.onclick = () =>{
  document.querySelector('dialog').show()
}