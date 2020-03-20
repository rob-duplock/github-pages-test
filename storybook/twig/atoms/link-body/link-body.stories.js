import LinkBody from './link-body.html.twig';
import markdown from './readme.md';

LinkBody.data = {
  name: 'Link Body',
  parameters: {
    text: 'This is link-body',
  },
  other: {
    notes: { markdown }
  }
};

export default LinkBody;
