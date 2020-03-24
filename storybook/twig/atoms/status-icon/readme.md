# Status Icons

---

### Description
> Various icons to signify a status.

### Variables
```php
$status = [
  'success',
  'warning',
  'error'
];
$icon = [
  'info',
  'check'
];
```

### Markup
```html
<span class="icon-status icon-status-{{ status }}">
  <i class="material-icons">{{ icon }}</i>
</span>
```