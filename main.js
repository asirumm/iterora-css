import './style.css'
import './admin.css'


function toggleOpenClose(param){
    const element = document.getElementById(param);
    if (element.classList.contains("active")){
        element.classList.remove("active");
    }else {
        element.classList.add("active");
    }
}
function closeParent(parent){
    const  element = document.getElementById(parent);
    element.style.display='none';
}
// expose to world
window.closeParent = closeParent;
window.toggleOpenClose = toggleOpenClose;

