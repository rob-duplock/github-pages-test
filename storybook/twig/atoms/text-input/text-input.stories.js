import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextInput from './text-input.html.twig';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('TextInput', () => {
    let attributes = {
      id: 'default-id',
      name: 'default-name',
      classes: ['text-input'],
      placeholder: text('Placeholder', 'Enter value'),
    };

    let errorClass = boolean('Error', false);
    if (errorClass) {
      attributes.classes.push('error');
      attributes.placeholder = text('Error message', 'Error');
    }

    return TextInput(attributes);
  });
