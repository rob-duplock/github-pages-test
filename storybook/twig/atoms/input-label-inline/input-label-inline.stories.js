import InputLabelInline from './input-label-inline.html.twig';
import markdown from './readme.md'


InputLabelInline.data = {
  name: 'Input Label Inline',
  group: "Form Elements",
  parameters: {
    text: "Inline input label",
  },
  other: {
    notes: { markdown }
  },
};

export default InputLabelInline;
