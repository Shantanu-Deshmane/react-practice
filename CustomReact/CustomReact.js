// Creating custom DOM element
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);

  domElement.textContent = reactElement.children;
  for (let prop in reactElement.props) {
    if (prop === "children") continue;
    if (prop === "href") {
      domElement.href = reactElement.props[prop];
    } else {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  };

  container.appendChild(domElement);
}

const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click here to visit google'
};
const mainContainer = document.getElementById("root");
customRender(reactElement, mainContainer);