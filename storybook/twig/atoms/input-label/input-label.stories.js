import InputLabel from './input-label.html.twig';
import markdown from './readme.md'

InputLabel.data = {
  name: 'Input Label',
  parameters: {
    text: "First Name:",
  },
  other: {
    notes: { markdown }
  },
};

export default InputLabel;
