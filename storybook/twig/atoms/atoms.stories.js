import {storiesOf} from '@storybook/html';
import { withActions } from '@storybook/addon-actions';

// Import the stories.
import CheckboxInput from './checkbox-input/checkbox-input.stories';
import Typography from './typography/typography.stories';
import Images from './images/images.stories';
import StatusIcon from './status-icon/status-icon.stories';
import StatusMessage from './status-message/status-message.stories';
import InputLabel from './input-label/input-label.stories';
import InputLabelInline from './input-label-inline/input-label-inline.stories';
import TextArea from './text-area/text-area.stories';
import TextInputErrorMessage from './text-input-error-message/text-input-error-message.stories';
import RadioInput from './radio-input/radio-input.stories';
import ButtonIconInline from './button-icon-inline/button-icon-inline.stories';
import Divider from './divider/divider.stories';
import LinkBody from './link-body/link-body.stories'
import LinkMeta from './link-meta/link-meta.stories'
import LinkUnderlined from './link-underlined/link-underlined.stories'

// Add the story to our stories {} so we can loop over it.
let stories = {
  Typography,
  Images,
  StatusIcon,
  StatusMessage,
  InputLabel,
  InputLabelInline,
  CheckboxInput,
  RadioInput,
  TextArea,
  TextInputErrorMessage,
  ButtonIconInline,
  Divider,
  LinkBody,
  LinkMeta,
  LinkUnderlined,
};

// Loop over each story and add them to the story book.
Object.keys(stories).forEach((key) => {
  let story = stories[key];
  let StoryName = story.data.name || key;
  let StoryGroup = story.data.group ? `Atoms/${story.data.group}` : 'Atoms';

  storiesOf(StoryGroup, module)
    .addDecorator(withActions(story.data.decorators || 'none'))
    .add(StoryName, () => story(story.data.parameters || {}), story.data.other || {});
});

export { stories };
