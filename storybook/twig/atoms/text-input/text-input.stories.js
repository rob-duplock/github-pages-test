import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import TextInput from './text-input.html.twig';

storiesOf('Atoms/Form Elements', module)
  .addDecorator(withKnobs)
  .add('Text Input', () => {
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
