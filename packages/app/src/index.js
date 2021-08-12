import Button from '@shared-components/button'

function app() {
  const element = document.createElement('div');

  element.innerHTML = Button('Estou no App')

  return element;
}

document.body.appendChild(app());