import StatusMessage from './status-message.html.twig';

StatusMessage.data = {
  parameters: {
    message_types: ['success', 'warning', 'error'],
    message: 'This is an alert.',
  },
};

export default StatusMessage;
