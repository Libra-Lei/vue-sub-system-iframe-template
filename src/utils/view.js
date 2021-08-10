export default {
  insertBody(elx, parent){
    let bodyx = parent ? parent : document.body
    bodyx.insertBefore(elx, bodyx.firstChild)
  },
  changePosition(elx,content,conditional){
    let topx = 0
    let leftx = 0
    let widthx = 0
    let scrollTopx = window.pageYOffset || document.documentElement.scrollTop;
    if(elx.getBoundingClientRect().top + 300 >= window.innerHeight) {
      setTimeout( ()=> {
        if(conditional){
          topx = (elx.getBoundingClientRect().top - content.clientHeight) + scrollTopx
        } else {
          topx = (elx.getBoundingClientRect().top - content.clientHeight + elx.clientHeight) + scrollTopx
        }
      }, 1);

    } else {
      topx = conditional?(elx.getBoundingClientRect().top + elx.clientHeight) + scrollTopx + 5:elx.getBoundingClientRect().top + scrollTopx
    }

    leftx = elx.getBoundingClientRect().left
    widthx = elx.offsetWidth

    let cords = {
      left: `${leftx}px`,
      top: `${topx}px`,
      width: `${widthx}px`
    }

    return cords
  }
}

export function removeBody(element, parent) {
  let bodyx = parent ? parent : document.body
  bodyx.removeChild(element);
}

/**
 * 在页面中插入下拉菜单
 * @param {Element} elx 
 * @param {Object} basePosition 
 * @param {Element} parent 
 */
export function menuInsertBody(elx, basePosition, parent){
  let bodyx = parent ? parent : document.body;
  bodyx.insertBefore(elx, bodyx.firstChild);
  elx.style.top = `${basePosition.bottom + 10}px`;
  elx.style.left = `${basePosition.left}px`;
}

/**
 * 动态引入远程js
 * @param {String} src 
 */
export function loadJs(src) {
  return new Promise((resolve,reject)=>{
    let script = document.createElement('script')
    script.type = "text/javascript"
    script.onload = ()=>{
      resolve()
    }
    script.onerror = ()=>{
      reject()
    }
    script.src= src
    document.getElementsByTagName('body')[0].appendChild(script)
  })
}
