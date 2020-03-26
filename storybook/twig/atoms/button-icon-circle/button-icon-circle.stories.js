import ButtonIconCircle from './button-icon-circle.html.twig';
import markdown from './readme.md'

ButtonIconCircle.data = {
  parameters: {
    social_media: [
      {
        url: 'https://www.facebook.com/',
        type: 'facebook',
        label: 'Share to Facebook.',
        img_file: 'icons/FB.svg',
        img_alt: 'Facebook icon',
      },
      {
        url: 'https://twitter.com/',
        type: 'twitter',
        label: 'Share to Twitter.',
        img_file: 'icons/Twitter.svg',
        img_alt: 'Twitter icon',
      }
    ],
  },
  other: {
    notes: { markdown }
  },
};

export default ButtonIconCircle;
