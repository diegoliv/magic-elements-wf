const createElement = async (el, parent) => {
  if (!el.structure || !el.structure.tag) {
    throw new Error('Element missing structure information.');
  }

  const element = webflow.createDOM(el.structure.tag)

  if (el.structure.props) {
    props.forEach((prop) => {
      element.setAttribute(prop.name, prop.value);
    })
  }

  if (el.structure.text) {
    const string = webflow.createString(el.structure.text);
    element.setChildren([string]);
  }

  if (el.structure.children) {
    el.structure.children.forEach(child => {
      createElement(child, element);
    })
  }

  if (parent.children && parent.configurable) {
    parent.setChildren([element]);
    
    await parent.save();
  }
}

export { createElement }