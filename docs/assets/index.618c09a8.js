const p=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}};p();document.querySelector("#app").innerHTML=`
  <h1>HTML-Native-UI!</h1>
  <p>NativeUI\uFF0C\u5145\u5206\u5229\u7528html5\u7684\u539F\u751F\u5C5E\u6027\u548C\u65B9\u6CD5</p>
  <a href="https://github.com/artskin/html-native-ui" target="_blank">Github</a>
  
<hr>
button:
<button>\u786E\u5B9A</button>
<input type="button" value="\u786E\u5B9A">
<br>
Type:
<button data-type="primary">\u4E3B\u9898</button>
<button data-type="warning">\u8B66\u544A</button>
<button data-type="danger">\u5371\u9669</button>
<br>
Size:
<button data-type="primary">\u4E3B\u9898</button>
<button data-type="primary" style="--size:18px">\u786E\u5B9A</button>
<button data-type="primary" style="--size:22px">\u786E\u5B9A</button>
<br>
Disabled:
<button data-type="primary" disabled>\u786E\u5B9A</button>
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
<input type="text" placeholder="\u8BF7\u8F93\u5165">
<input type="text" placeholder="\u8BF7\u8F93\u5165" style="--size:18px">
<input type="text" placeholder="\u8BF7\u8F93\u5165" disabled style="--size:18px">
<hr>
number:
<input type="number" placeholder="\u8BF7\u8F93\u5165">
<hr>
number:
<input type="date" placeholder="\u8BF7\u8F93\u5165">
<hr>
dialog:
<button id="showDialog">\u6253\u5F00</button>
<dialog>
  <p>Greetings, one and all!</p>
  <form method="dialog">
    <button>\u5173\u95ED</button>
  </form>
</dialog>

<footer>
<hr>
\xA9\uFE0F\u963F\u6C90
</footer>
`;const l=document.getElementById("showDialog");l.onclick=()=>{document.querySelector("dialog").show()};
