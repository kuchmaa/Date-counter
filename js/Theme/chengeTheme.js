import { host } from "../main.js";

export const setTheme = ( newTheme ) => {
    const body = document.body;
    if (!body.theme && body.theme != newTheme) {
      document.body.setAttribute("theme", newTheme);
    }
    document.cookie = `theme=${ newTheme }; path=${ host }/`;
}