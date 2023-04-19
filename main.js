//import '/demo.css?inline'
import './src/styles/index.less'

function $(el){
  return document.querySelector(el)
}
function $all(el){
  return document.querySelectorAll(el)
}
const inputFn = (e) =>{
  e.target.setAttribute('value',e.target.value)
  e.target.style.setProperty('--value',`${e.target.value}%`);
}
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

const inputSelect = (e) =>{
  const el = e.target;
  //console.log(el.list.children)
  el.setAttribute('value',e.target.value);
  
  
}


document.onreadystatechange = (ev) =>{
  if(document.readyState ==='complete'){
    $('#app').appendChild($('#templ').content.cloneNode(true));

    $('#showDialog').onclick = () =>{
      $('dialog').show()
    }

    $('#range01').oninput = inputFn
    $('#range02').oninput = inputFn

    $('#file-upload2').onchange = fileChanged
    $('#file-upload3').onchange = fileChanged
    $('#file-upload4').onchange = fileChanged
    $('#user').onclick=(e)=>{
      console.log(e);
      console.log(e.target.validity)
    }
    $('#submit').onclick = () =>{
      $('form').classList.add('validate');
      const validStyle = window.getComputedStyle($('form'),':valid')
      console.log(validStyle.getPropertyValue('content'))
    }
    console.log($all('form input'))
    $all('form input').forEach(input=>{
      input.onblur=(ev)=>{
        console.log(ev.target)
        ev.target.classList.add('valid')
      }
    })
    $('#reset').onclick = ()=>{
      $all('form input').forEach(input=>{
        input.classList.remove('valid');
      })
    }
    $('#ice-choice').oninput = inputSelect;
    $('#ice-choice').nextSibling.onclick = (e) =>{
      if(e.target.classList.contains('clear')){
        $('#ice-choice').value = ''
        $('#ice-choice').setAttribute('value','');
      }
    }
  }
}

