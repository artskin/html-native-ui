const s=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};s();document.querySelector("#app").innerHTML=`
  <h1>HTML-Native-UI!</h1>
  <a href="https://github.com/artskin/html-native-ui" target="_blank">Github</a>
  
<hr>
button:
<button>\u786E\u5B9A</button>
<input type="button" value="\u786E\u5B9A">
<button data-type="primary">\u786E\u5B9A</button>
size:18>
<button data-type="warning" style="--size:18px">\u786E\u5B9A</button>
disabled>
<button data-type="danger" disabled style="--size:22px">\u786E\u5B9A</button>
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
<footer>
<hr>
\xA9\uFE0F\u963F\u6C90
</footer>
`;
