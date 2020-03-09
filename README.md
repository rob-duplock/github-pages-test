# Storybook

## Initial set up
`npm install`

## Run locally (with local dev server built in)
`npm run storybook`

## Build the story book for distribution
`npm run build-storybook`

## Adding components
### Example: Add an "atom"
* Add new folder `storybook/atoms/my-component`
* Add three new files
* -- my-component.html.twig
* -- my-component.scss
* -- my-component.stories.js
* Follow the existing content structure of other components
* Add your component to the `storybook/atoms/atoms.stories.js` file

## Explanation of the *.stories.js file

```javascript
// @file my-component/my-component.stories.js
//
// Import the the twig template so we can pass data / variables to it.
import MyComponent from './my-component.html.twig';

// Add data to the MyComponent object, so we can access in the template etc.
MyComponent.data = {
  // Parameters are passed into twig as {{ variables }}
  parameters: {
    text: 'Custom text defined in *.stories.js file',
  },
  other: {
    // Notes appear in the Storybook itself on the "notes" tab. These are optional.
    notes: 'Hello, world! I am a note.'
  },
  // Decorators are JS events that appear in the "actions" tab of the Storybook.
  decorators: 'click div.my-component',
};

export default MyComponent;
```

## Deploy the storybook
### Don't use this until our github pages repo is set up!
`npm run build-storybook`

`npm run deploy-storybook`
