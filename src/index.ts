// import * as _ from "lodash"; 
import {between} from "./between"

function component(text: string) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));
document.body.append(component('eee'));

// between('fucking', 'cki');
