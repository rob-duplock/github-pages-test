import StatusMessage from './status-message.html.twig';
import markdown from './readme.md'

StatusMessage.data = {
  parameters: {
    message_types: ['success', 'warning', 'error'],
    message: 'This is an alert.',
  },
  other: {
    notes: { markdown }
  }
};

export default StatusMessage;
