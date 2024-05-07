import { host } from "../main.js";

export const setTheme = (newTheme) => {
  const body = document.body;
  if (!body.theme && body.theme != newTheme) {
    document.body.setAttribute("theme", newTheme);
  }
  document.cookie = `theme=${newTheme}; path=${host}/`;

  const bgColor = window.getComputedStyle(document.body).getPropertyValue("background-color");
  document.querySelector("[name=theme-color]").content = bgColor;
  document.querySelector("[name=apple-mobile-web-app-status-bar-style").content = bgColor;
};
