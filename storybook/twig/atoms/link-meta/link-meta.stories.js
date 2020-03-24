import LinkMeta from './link-meta.html.twig';
import markdown from './readme.md';

LinkMeta.data = {
  name: "Link Meta",
  group: "Links",
  parameters: {
    text: 'This is a Link Meta Atom',
  },
  other: {
    notes: { markdown }
  },
};

export default LinkMeta;
