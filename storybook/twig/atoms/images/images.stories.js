import Images from './images.html.twig';

Images.data = {
  parameters: {
    image_src: 'https://placekitten.com/480/320',
  },
  other: {
    notes: 'This image will break accessibility.',
  },
  decorators: 'click img.example',
};

export default Images;
