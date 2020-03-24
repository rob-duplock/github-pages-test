import LinkBody from './link-body.html.twig';
import markdown from './readme.md';

LinkBody.data = {
  name: 'Link Body',
  group: "Links",
  parameters: {
    text: 'This is a link body atom',
  },
  other: {
    notes: { markdown }
  }
};

export default LinkBody;
