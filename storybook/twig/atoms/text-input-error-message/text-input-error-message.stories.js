import TextInputErrorMessage from './text-input-error-message.html.twig';
import markdown from './readme.md';

TextInputErrorMessage.data = {
  parameters: {
    error_message: 'This is a warning message',
  },
  other: {
    notes: { markdown }
  }
};

export default TextInputErrorMessage;
