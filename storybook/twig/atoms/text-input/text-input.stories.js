import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import drupalAttribute from 'drupal-attribute';
import TextInput from './text-input.html.twig';

storiesOf('Atoms', module)
  .addDecorator(withKnobs)
  .add('TextInput', () => {
    let attributes = {
      id: 'default-id',
      name: 'default-name',
      class: ['text-input'],
      placeholder: text('Placeholder', 'Enter value'),
    };

    let errorClass = boolean('Error', false);
    if (errorClass) {
      attributes.class.push('error');
      attributes.placeholder = text('Error message', 'Error');
    }

    let variables = {
      attributes: new drupalAttribute(Object.entries(attributes)),
    };

    return TextInput(variables);
  });
