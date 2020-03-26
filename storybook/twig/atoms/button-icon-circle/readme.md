# Button Icon Circle

---

### Description
> The circle button with social icon.

### Variables
```javascript
let media = {
  url: 'https://www.facebook.com/',
  type: 'facebook',
  label: 'Share to Facebook.',
  img_file: 'icons/FB.svg',
  img_alt: 'Facebook icon',
}
```

### Markup
```html
<a href="{{ media.url }}" class="btn btn--inline btn--circle btn--icon btn--icon-{{ media.type }}" aria-label="{{ media.label }}">
  <img src="{{ media.img_file }}" alt="{{ media.img_alt }}">
</a>
```