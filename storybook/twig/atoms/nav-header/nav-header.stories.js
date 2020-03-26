import { storiesOf } from '@storybook/html';
import NavHeader from './nav-header.html.twig';
import markdown from './readme.md';

storiesOf('Atoms/Navigation', module)
  .add('Nav Header', () => {
    let attributes = {
      text: 'Navigation Header',
    };

    return NavHeader(attributes);
  }, {
    notes: { markdown }
  });
