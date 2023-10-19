// import audioThumb from "../Icons/audio.svg";
// import buttonThumb from "../Icons/button.svg";
// import codeThumb from "../Icons/code.svg";
// import domThumb from "../Icons/dom.svg";
// import hrThumb from "../Icons/hr.svg";
// import spanThumb from "../Icons/span.svg";

export default [
  {
    id: 'dom',
    title: 'The DOM Element',
    label: 'It can be anything you want',
    description: "",
    mdn: '',
    structure: {
      tag: 'div',
    }
  },
  {
    id: 'button',
    title: 'Button',
    label: 'A native html button element',
    description: "The <button> HTML element is an interactive element activated by a user with a mouse, keyboard, finger, voice command, or other assistive technology. Once activated, it then performs an action, such as submitting a form or opening a dialog.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button',
    structure: {
      tag: 'button',
      children: [
        {
          structure: {
            tag: 'span',
            text: 'Button'
          }
        }
      ]
    }
  },
  {
    id: 'code',
    title: 'Code',
    label: 'Highlight code strings',
    description: "The <code> HTML element displays its contents styled in a fashion intended to indicate that the text is a short fragment of computer code. By default, the content text is displayed using the user agent's default monospace font.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code',
    structure: {
      tag: 'code',
      text: '<code />'
    }
  },
  {
    id: 'span',
    title: 'Span',
    label: 'The most flexible html element',
    description: "The <span> HTML element is a generic inline container for phrasing content, which does not inherently represent anything. It can be used to group elements for styling purposes (using the class or id attributes), or because they share attribute values, such as lang. It should be used only when no other semantic element is appropriate. <span> is very much like a <div> element, but <div> is a block-level element whereas a <span> is an inline-level element.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span',
    structure: {
      tag: 'span',
      text: 'This is a span'
    }
  },
  {
    id: 'audio',
    title: 'Audio',
    label: 'A native audio player on your website',
    description: "The <audio> HTML element is used to embed sound content in documents. It may contain one or more audio sources, represented using the src attribute or the <source> element: the browser will choose the most suitable one. It can also be the destination for streamed media, using a MediaStream.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/audio',
    structure: {
      tag: 'audio',
      props: [
        {
          name: 'controls',
          value: 'true'
        },
        {
          name: 'src',
          value: 'https://cdn.transistor.fm/file/transistor/m/shows/37029/c88eef87d6b580818fde7b498b1614d4.mp3'
        }
      ]
    }
  },
  {
    id: 'hr',
    title: 'Hr',
    label: 'An horizontal divider',
    description: "The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr',
    structure: {
      tag: 'hr',
    }
  },
]