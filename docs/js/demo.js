(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function o(l){return document.querySelector(l)}function a(l){return document.querySelectorAll(l)}const u=l=>{l.target.setAttribute("value",l.target.value),l.target.style.setProperty("--value",`${l.target.value}%`)},s=l=>{const t=l.target,n=t.files;let i="";if(!!(n!=null&&n.length)){if(console.log(l,n[0]),n.length>0&&t.setAttribute("title",""),t.webkitdirectory){const e=n[0].webkitRelativePath;i=`./${e.substr(0,e.lastIndexOf("/")+1)} ${n.length} \u4E2A\u6587\u4EF6`}else if(n.length==1)i=n[0].name;else for(let e=0;e<n.length;e++)e===0?i+=`${n[e].name}`:i+=`, ${n[e].name}`;t.setAttribute("value",i),t.setAttribute("placeholder",i),t.style.setProperty("--input-color","inherit")}},d=l=>{l.target.setAttribute("value",l.target.value)};document.onreadystatechange=l=>{document.readyState==="complete"&&(o("#app").appendChild(o("#templ").content.cloneNode(!0)),o("#showDialog").onclick=()=>{o("dialog").show()},o("#range01").oninput=u,o("#range02").oninput=u,o("#file-upload2").onchange=s,o("#file-upload3").onchange=s,o("#file-upload4").onchange=s,o("#user").onclick=t=>{console.log(t),console.log(t.target.validity)},o("#submit").onclick=()=>{o("form").classList.add("validate");const t=window.getComputedStyle(o("form"),":valid");console.log(t.getPropertyValue("content"))},console.log(a("form input")),a("form input").forEach(t=>{t.onblur=n=>{console.log(n.target),n.target.classList.add("valid")}}),o("#reset").onclick=()=>{a("form input").forEach(t=>{t.classList.remove("valid")})},o("#ice-choice").oninput=d,o("#ice-choice").nextSibling.onclick=t=>{t.target.classList.contains("clear")&&(o("#ice-choice").value="",o("#ice-choice").setAttribute("value",""))})};