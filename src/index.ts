import * as _ from "lodash"; 

function component(text: string) {
  const element = document.createElement('h1');
  element.textContent = text;
  return element;
}

document.body.prepend(component('Проект собран на Webpack'));
document.body.append(component('eee'));


