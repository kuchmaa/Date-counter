import { Menus } from "../Elements.js";

export default function dropDown( { button, menu } ) {

    if (menu.getAttribute("open") === null) {
        for (let i = 0; i < document.getElementsByTagName("button").length; i++) {
            if (document.getElementsByTagName("button")[i].getAttribute("active") !== null) {
                document.getElementsByTagName("button")[i].removeAttribute("active")
            }
        }
        for (let i = 0; i < document.getElementsByClassName('dropdown').length; i++) {
            Menus.checkOpenAndRemove(
                document.getElementsByClassName("dropdown")[i]
            );
        }
        button.setAttribute("active", "");
        menu.setAttribute("open", "");
        pointerPos(menu, button);
    } else {
        button.removeAttribute("active");
        Menus.close(menu);
        window.onclick = null;
    }
};

function closeMenu(button, element) {
  button.removeAttribute("active");
  Menus.close(element);
  window.onclick = null;
}

var interval;
function pointerPos(menu, button) {
    button.addEventListener("mouseleave", function () {
        window.onclick = () => closeMenu(button, menu);
        menu.addEventListener("mouseleave", function () {  
          window.onclick = null;
          window.onclick = () => closeMenu(button, menu);
        });
        menu.addEventListener("mouseenter", function () {
          window.onclick = null;
          clearInterval(interval);
        });
    });
    button.addEventListener("mouseenter", function () {
      window.onclick = null;
      
    });
}