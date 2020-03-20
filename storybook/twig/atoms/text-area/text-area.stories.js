import TextArea from './text-area.html.twig';
import markdown from './readme.md';

TextArea.data = {
  group: "Form Elements",
  parameters: {
    rows: 10,
    columns: 50,
    placeholder: 'Enter text',
    text: 'This is a text area.',
  },
  other: {
    notes: { markdown }
  }
};

export default TextArea;
