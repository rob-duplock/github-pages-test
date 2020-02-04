import {storiesOf} from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

// Import the stories.
import Typography from './typography/typography.stories';
import Images from './images/images.stories';

// Add the story to our stories {} so we can loop over it.
let stories = {
  'Typography': Typography,
  'Images':     Images,
};

// Loop over each story and add them to the story book.
Object.keys(stories).forEach((key) => {
  storiesOf('Atoms', module)
    .addDecorator(withActions(stories[key].data.decorators || 'none'))
    .add(key, () => stories[key](stories[key].data.parameters || {}), stories[key].data.other || {});
});
