import {storiesOf} from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

// Import the stories.
import ImagesAndWords from './image-and-words/image-and-words.stories';
import StatusIconExample from './status-icon-example/status-icon-example.stories';

// Add the story to our stories {} so we can loop over it.
let stories = {
  ImagesAndWords,
  StatusIconExample,
};

// Loop over each story and add them to the story book.
Object.keys(stories).forEach((key) => {
  storiesOf('Molecules', module)
    .addDecorator(withActions(stories[key].data.decorators || 'none'))
    .add(key, () => stories[key](stories[key].data.parameters || {}), stories[key].data.other || {});
});

export { stories };
