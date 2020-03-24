import LinkUnderlined from './link-underlined.html.twig';
import markdown from './readme.md';

LinkUnderlined.data = {
  name: 'Link Underlined',
  group: 'Links',
  parameters: {
    text: 'This is link-underlined',
  },
  other: {
    notes: { markdown }
  }
};

export default LinkUnderlined;
