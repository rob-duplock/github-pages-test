import ButtonIconInline from './button-icon-inline.html.twig';
import markdown from './readme.md'

ButtonIconInline.data = {
  parameters: {
    type: 'search',
  },
  other: {
    notes: { markdown }
  },
};

export default ButtonIconInline;
