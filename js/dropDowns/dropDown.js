export default function dropDown( { button, menu } ) {
    if (menu.getAttribute("open") === null) {
        button.setAttribute("active", "")
        menu.setAttribute("open", "");
    } else {
        menu.removeAttribute("open");
        button.removeAttribute("active");
    }  
};
