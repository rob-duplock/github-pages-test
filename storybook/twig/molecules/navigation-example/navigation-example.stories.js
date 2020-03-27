import { storiesOf } from '@storybook/html';
import {withKnobs, boolean} from '@storybook/addon-knobs';
import NavigationExample from './navigation-example.html.twig';

storiesOf('Molecules', module)
  .addDecorator(withKnobs)
  .add('Navigation Example', () => {
    let attributes = {
      header_active: boolean('Header active', false) ? 'active' : '',
    };

    return NavigationExample(attributes);
  });
