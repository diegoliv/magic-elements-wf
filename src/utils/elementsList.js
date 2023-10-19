// import audioThumb from "../Icons/audio.svg";
// import buttonThumb from "../Icons/button.svg";
// import codeThumb from "../Icons/code.svg";
// import domThumb from "../Icons/dom.svg";
// import hrThumb from "../Icons/hr.svg";
// import spanThumb from "../Icons/span.svg";
// import blockquoteThumb from "../Icons/blockquote.svg";
// import datalistThumb from "../Icons/datalist.svg";
// import detailsThumb from "../Icons/details.svg";

export default [
  {
    id: 'dom',
    title: 'The DOM Element',
    label: 'It can be anything you want.',
    description: "",
    mdn: '',
    structure: {
      tag: 'div',
    }
  },
  {
    id: 'button',
    title: 'Button',
    label: 'A native html button element.',
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
    label: 'Highlight code strings.',
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
    label: 'The most flexible html element.',
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
    label: 'A native audio player on your website.',
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
    label: 'An horizontal divider.',
    description: "The <hr> HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hr',
    structure: {
      tag: 'hr',
    }
  },
  {
    id: 'blockquote',
    title: 'Blockquote',
    label: 'For quotes, testimonials, etc.',
    description: "The <blockquote> HTML element indicates that the enclosed text is an extended quotation. Usually, this is rendered visually by indentation (see Notes for how to change it). A URL for the source of the quotation may be given using the cite attribute, while a text representation of the source can be given using the <cite> element.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote',
    structure: {
      tag: 'blockquote',
      children: [
        {
          structure: {
            tag: 'p',
            text: 'This is a blockquote.'
          }
        },
        {
          structure: {
            tag: 'footer',
            text: 'Quote author'
          }
        },
      ]
    }
  },
  {
    id: 'datalist',
    title: 'Datalist',
    label: 'A special input type with search and a dropdown of options.',
    description: "The <datalist> HTML element contains a set of <option> elements that represent the permissible or recommended options available to choose from within other controls.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/datalist',
    structure: {
      tag: 'div',
      children: [
        {
          structure: {
            tag: 'input',
            props: [
              {
                name: 'type',
                value: 'text'
              },
              {
                name: 'list',
                value: 'datalist'
              },
            ]
          }
        },
        {
          structure: {
            tag: 'datalist',
            props: [
              {
                name: 'id',
                value: 'datalist'
              }
            ],
            children: [
              {
                structure: {
                  tag: 'option',
                  props: [
                    {
                      name: 'value',
                      value: 'One'
                    },
                  ]
                } 
              },
              {
                structure: {
                  tag: 'option',
                  props: [
                    {
                      name: 'value',
                      value: 'Two'
                    },
                  ]
                } 
              },
              {
                structure: {
                  tag: 'option',
                  props: [
                    {
                      name: 'value',
                      value: 'Three'
                    },
                  ]
                } 
              }
            ]
          }
        },
      ]
    }
  },
  {
    id: 'details',
    title: 'Details + Summary',
    label: 'A native disclosure widget that can be toggled.',
    description: "The <details> HTML element creates a disclosure widget in which information is visible only when the widget is toggled into an \"open\" state. A summary or label must be provided using the <summary> element.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details',
    structure: {
      tag: 'details',
      props: [
        {
          name: 'open',
          value: 'true'
        }
      ],
      children: [
        {
          structure: {
            tag: 'summary',
            text: 'Webflow'
          }
        },
        {
          structure: {
            tag: 'p',
            text: 'The best no-code tool on the market.'
          }
        },
      ]
    }
  },
  {
    id: 'dl',
    title: 'Description List',
    label: 'Special list type to describe terms.',
    description: "The <dl> HTML element represents a description list. The element encloses a list of groups of terms (specified using the <dt> element) and descriptions (provided by <dd> elements). Common uses for this element are to implement a glossary or to display metadata (a list of key-value pairs).",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dl',
    structure: {
      tag: 'dl',
      children: [
        {
          structure: {
            tag: 'dt',
            text: 'HTML'
          }
        },
        {
          structure: {
            tag: 'dd',
            text: 'Hyper Text Markup Language'
          }
        },
        {
          structure: {
            tag: 'dt',
            text: 'CSS'
          }
        },
        {
          structure: {
            tag: 'dd',
            text: 'Cascading Style Sheet'
          }
        },
        {
          structure: {
            tag: 'dt',
            text: 'JS'
          }
        },
        {
          structure: {
            tag: 'dd',
            text: 'JavaScript'
          }
        },
      ]
    }
  },
  {
    id: 'hgroup',
    title: 'HGroup',
    label: 'An element to block headlines with extra context.',
    description: "The <hgroup> HTML element represents a heading and related content. It groups a single <h1>–<h6> element with one or more <p>.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/hgroup',
    structure: {
      tag: 'hgroup',
      children: [
        {
          structure: {
            tag: 'h1',
            text: 'Your headline'
          }
        },
        {
          structure: {
            tag: 'p',
            text: 'Your headline subtitle'
          }
        },
      ]
    }
  },
  {
    id: 'progress',
    title: 'Progress',
    label: 'A native html progress bar.',
    description: "The <progress> HTML element displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress',
    structure: {
      tag: 'progress',
      props: [
        {
          name: 'max',
          value: '100'
        },
        {
          name: 'value',
          value: '70'
        },
      ],
      text: '70%'
    }
  },
  {
    id: 'meter',
    title: 'Meter',
    label: 'Similar to a progress bar, but with support for min and max values.',
    description: "The <meter> HTML element represents either a scalar value within a known range or a fractional value.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meter',
    structure: {
      tag: 'meter',
      props: [
        {
          name: 'min',
          value: '0'
        },
        {
          name: 'max',
          value: '100'
        },
        {
          name: 'low',
          value: '33'
        },
        {
          name: 'high',
          value: '66'
        },
        {
          name: 'optimum',
          value: '80'
        },
        {
          name: 'value',
          value: '60'
        },
      ],
      text: 'at 60/100'
    }
  },
  {
    id: 'video',
    title: 'Video',
    label: 'A native html video element.',
    description: "The <video> HTML element embeds a media player which supports video playback into the document. You can use <video> for audio content as well, but the <audio> element may provide a more appropriate user experience.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video',
    structure: {
      tag: 'video',
      props: [
        {
          name: 'controls',
          value: 'true'
        },
        {
          name: 'width',
          value: '100%'
        },
        {
          name: 'src',
          value: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
        }
      ],
    }
  },
  {
    id: 'iframe',
    title: 'Iframe',
    label: 'Embed any other url inside your page.',
    description: "The <iframe> HTML element represents a nested browsing context, embedding another HTML page into the current one.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe',
    structure: {
      tag: 'iframe',
      props: [
        {
          name: 'src',
          value: 'https://webflow.com/marketplace'
        },
        {
          name: 'width',
          value: '100%'
        },
        {
          name: 'height',
          value: '480'
        },
      ],
    }
  },
  {
    id: 'canvas',
    title: 'Canvas',
    label: 'An element to render 2D or 3D graphics (using JavaScript).',
    description: "Use the HTML <canvas> element with either the canvas scripting API or the WebGL API to draw graphics and animations.",
    mdn: 'https://developer.mozilla.org/en-US/docs/Web/HTML/Element/canvas',
    structure: {
      tag: 'canvas',
      props: [
        {
          name: 'width',
          value: '640'
        },
        {
          name: 'height',
          value: '480'
        },
      ],
    }
  },
]