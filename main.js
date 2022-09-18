import './demo.css'
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

const fileChanged = (e) =>{
  const el = e.target
  const files = el.files;
  let filesName = '';
  if(!files?.length) return;
  console.log(e,files[0]);
  if(files.length>0){
    el.setAttribute('title','')
  }
  //TODO: 改变按钮文案 ::after
  // file-clear

  if(el.webkitdirectory){
    const dirPath = files[0].webkitRelativePath;
    filesName = `./${dirPath.substr(0,dirPath.lastIndexOf('/')+1)} ${files.length} 个文件`
  }else{
    if(files.length == 1){
      filesName = files[0].name;
    }else{
      for(let i=0;i<files.length;i++){
        if(i ===0){
          filesName += `${files[i].name}`;
        }else{
          filesName += `, ${files[i].name}`;
        }
      }
    }
  }
  el.setAttribute('value',filesName)
  el.setAttribute('placeholder',filesName)
  el.style.setProperty('--input-color','inherit')
}

$('#file-upload2').onchange = fileChanged
$('#file-upload3').onchange = fileChanged
$('#file-upload4').onchange = fileChanged

