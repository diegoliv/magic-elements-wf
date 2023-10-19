const createElement = async (el, parent, save) => {
  const shouldSave = save || true; 
  if (!el.structure || !el.structure.tag) {
    throw new Error('Element missing structure information.');
  }

  const element = webflow.createDOM(el.structure.tag);

  if (parent.children && parent.configurable) {
    // get all existing children to avoid erasing content
    const children = parent.getChildren();
    parent.setChildren([...children, element]);    
  }

  if (el.structure.props) {
    el.structure.props.forEach((prop) => {
      element.setAttribute(prop.name, prop.value);
    })
  }

  if (el.structure.text) {
    const string = webflow.createString(el.structure.text);
    element.setChildren([string]);
  }

  if (el.structure.children) {
    el.structure.children.forEach(child => {
      createElement(child, element, false);
    })
  }

  await parent.save();
}

export { createElement }