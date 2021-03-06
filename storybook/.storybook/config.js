// Add the web components polyfill to all stories.
import '@babel/polyfill';
import '@webcomponents/webcomponentsjs/webcomponents-bundle';

import { addDecorator, addParameters, configure } from '@storybook/html';
import { withA11y } from '@storybook/addon-a11y';

import Twig from 'twig';
import twigDrupal from 'twig-drupal-filters';

// Import styles
import '../styles.scss';

// Add the filters to Drupal.
twigDrupal(Twig);

// Automatically import all files ending in *.stories.js
const twig = require.context('../twig', true, /\.stories\.(js)$/);
function loadStories() {
  twig.keys().forEach(filename => twig(filename));
}

// Helps make UI components more accessible.
addDecorator(withA11y);
addParameters({
  a11y: {
    restoreScroll: true,
  }
});


const storyWrapper = story => `<section style="padding: 1rem;">${story()}</section>`;
addDecorator(storyWrapper);

configure(loadStories, module);
