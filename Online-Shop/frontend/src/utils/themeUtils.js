import Cookies from "js-cookie";

export function setThemeCookies(value){
  Cookies.set('theme', value);
}

export function removeThemeCookies(){
  Cookies.remove('theme');
}

export function getThemeCookies(){
  return Cookies.get('theme');
}

export function addClass(value){
  document.getElementsByClassName('body')[0].classList.add(value);
}

export function removeClass(value){
  document.getElementsByClassName('body')[0].classList.remove(value);
}