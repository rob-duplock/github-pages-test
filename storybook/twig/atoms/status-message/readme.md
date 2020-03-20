# Status Message

---

### Description
> Various status message states.

### Variables
```php
$status = [
  'success',
  'warning',
  'error'
];
```

### Markup
```html
<p class="status-message status-message-{{ status }}">
  {{ message }}
</p>
```