# Colour Palette

---

### Description
> Core colour palette

### SCSS Colour Map
```scss
$colour-palette-core: (
  // Base colors.
  primary-dark:           #1F5788,
  primary-light:          #2A6998,
  primary-tint:           #F1F6F9,
  secondary-dark:         #867E70,
  secondary-light:        #F8F3F2,
  secondary-tint:         #FBF8F7,
  brand-grey-1:           #30302F,
  brand-grey-2:           #40403F,
  grey-tint-25:           #CFCFCF,
  accent:                 #43838C,
  white:                  #ffffff,
  // Gradient colors.
  gradient-overlay-start: #204560,
  gradient-overlay-end:   #2A6998,
  // Stroke colors.
  grey-stroke:            #E6EAED,
  // System colors.
  success:                #206C49,
  warning:                #FF7900,
  danger:                 #AF272F,
  success-tint:           #EFF5F2,
  warning-tint:           #FFF5ED,
  danger-tint:            #F9F0F0,
  // Shadow colors.
  shadow:                 #867E70,
  // Auxiliary colors.
  auxiliary-blue:         #DCEAF5,
  auxiliary-green:        #ECF2E6,
);
```
### SCSS Colour Functions
```scss
@function color($color-name, $map: $colour-palette-core) {
  @return map-get($map, $color-name);
}
```

### Example Usage
```scss
.example {
  color: color(primary-light);
  border: 1px solid color(brand-grey-2);
}
```