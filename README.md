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
  * my-component.html.twig
  * my-component.scss
  * my-component.stories.js
* Follow the existing content structure of other components
* Add your component to the `storybook/atoms/atoms.stories.js` file
