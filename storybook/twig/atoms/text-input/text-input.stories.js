import { storiesOf } from '@storybook/html';
import drupalAttribute from 'drupal-attribute';
import TextInput from './text-input.html.twig';

storiesOf('Atoms', module)
  .add('TextInput', () => {
    let attributes = {
      id: 'default-id',
      name: 'default-name',
      class: ['text-input'],
      placeholder: 'Enter value',
    };

    let variables = {
      attributes: new drupalAttribute(Object.entries(attributes)),
    };

    return TextInput(variables);
  });
