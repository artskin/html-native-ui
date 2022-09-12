import './style.css'
import './src/styles/index.styl'

function $(el){
  return document.querySelector(el)
}

const templ = $('#templ');
$('#app').appendChild(templ.content.cloneNode(true));

const btnShow = $('#showDialog');
btnShow.onclick = () =>{
  $('dialog').show()
}
const inputFn = (e) =>{
  e.target.setAttribute('value',e.target.value)
  e.target.style.setProperty('--value',`${e.target.value}%`);
}

$('#range01').oninput = inputFn
$('#range02').oninput = inputFn

