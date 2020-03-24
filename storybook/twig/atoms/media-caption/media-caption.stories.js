import { storiesOf } from '@storybook/html';
import { withKnobs, text } from '@storybook/addon-knobs';
import Template from './media-caption.html.twig';
import Readme from './readme.md';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('Media Caption', () => {
    let attributes = {
      text: text('Caption Text', 'This is my media caption.'),
    };
    return Template(attributes);
  }, {
    notes: {Readme}
  });
