import StatusIcon from './status-icon.html.twig';
import markdown from './readme.md'

StatusIcon.data = {
  name: 'Status Icon',
  parameters: {
    icons: ['info', 'check_circle'],
    icon_types: ['success', 'warning', 'error'],
  },
  other: {
    notes: { markdown }
  }
};

export default StatusIcon;
