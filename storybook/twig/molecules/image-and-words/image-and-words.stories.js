import ImagesAndWords from './image-and-words.html.twig';

ImagesAndWords.data = {
  parameters: {
    text: 'Custom text defined in *.stories.js file',
    image_src: 'https://placekitten.com/400/400',
  },
  other: {
    notes: "This is an example of combining \"atom\" components in a \"molecule\""
  },
  decorators: 'mouseover img.example',
};

export default ImagesAndWords;
