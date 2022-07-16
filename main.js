import './style.css'
import './src/styles/index.styl'

document.querySelector('#app').innerHTML = `
  <h1>HTML-Native-UI!</h1>
  <p>NativeUI，充分利用html5的原生属性和方法</p>
  <a href="https://github.com/artskin/html-native-ui" target="_blank">Github</a>
  
<hr>
button:
<button>确定</button>
<input type="button" value="确定">
<br>
Type:
<button data-type="primary">主题</button>
<button data-type="warning">警告</button>
<button data-type="danger">危险</button>
<br>
Size:
<button data-type="primary">主题</button>
<button data-type="primary" style="--size:18px">确定</button>
<button data-type="primary" style="--size:22px">确定</button>
<br>
Disabled:
<button data-type="primary" disabled>确定</button>
<hr>
checkbox:
<input type="checkbox">
<input type="checkbox" checked style="--size:18px">
<input type="checkbox" style="--size:22px">
<input type="checkbox" disabled style="--size:30px">
<hr>
switch:
<input role="switch" type="checkbox">
<input role="switch" type="checkbox" checked style="--size:18px">
<input role="switch" type="checkbox" style="--size:22px">
<input role="switch" type="checkbox" disabled style="--size:30px">
<hr>

radio:
<input name="sl" type="radio">
<input name="sl" type="radio" style="--size:18px">
<input name="sl" type="radio" checked data-type="tick" style="--size:22px">
<input name="sl" type="radio" disabled data-type="tick" style="--size:30px">
<hr>

text:
<input type="text" placeholder="请输入">
<input type="text" placeholder="请输入" style="--size:18px">
<input type="text" placeholder="请输入" disabled style="--size:18px">
<hr>
number:
<input type="number" placeholder="请输入">
<hr>
number:
<input type="date" placeholder="请输入">
<hr>
dialog:
<button id="showDialog">打开</button>
<dialog>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>关闭</button>
  </form>
</dialog>

<footer>
<hr>
©️阿沐
</footer>
`
const btnShow = document.getElementById('showDialog');
btnShow.onclick = () =>{
  document.querySelector('dialog').show()
}