# [Codepen](https://codepen.io/davidgilbertson/pen/aBpJzO)
```html
<p class="phone-up">Phone up</p>
<p class="phone-only">Phone only</p>
<p class="tablet-portait-only">Tablet portrait only</p>
<p class="tablet-portrait-up">Tablet portrait up</p>
<p class="tablet-landscape-only">Tablet landscape only</p>
<p class="tablet-landscape-up">Tablet landscape up</p>
<p class="desktop-only">Desktop only</p>
<p class="desktop-up">Desktop up</p>
<p class="big-desktop-up">Big desktop up</p>
```

```css
@mixin for-phone-only {
  @media (max-width: 599px) { @content; }
}
@mixin for-tablet-portrait-up {
  @media (min-width: 600px) { @content; }
}
@mixin for-tablet-portait-only {
  @media (min-width: 600px) and (max-width: 899px) { @content; }
}
@mixin for-tablet-landscape-up {
  @media (min-width: 900px) { @content; }
}
@mixin for-tablet-landscape-only {
  @media (min-width: 900px) and (max-width: 1199px) { @content; }
}
@mixin for-desktop-up {
  @media (min-width: 1200px) { @content; }
}
@mixin for-desktop-only {
  @media (min-width: 1200px) and (max-width: 1799px) { @content; }
}
@mixin for-big-desktop-up {
  @media (min-width: 1800px) { @content; }
}

p {
  padding: 10px;
  background: #aaa;
  color: white;
}

.phone-up {
  background: purple;
}

.phone-only {
  @include for-phone-only { background: purple; }
}

.tablet-portait-only {
  @include for-tablet-portait-only { background: purple; }
}

.tablet-portrait-up {
  @include for-tablet-portrait-up { background: purple; }
}

.tablet-landscape-only {
  @include for-tablet-landscape-only { background: purple; }
}

.tablet-landscape-up {
  @include for-tablet-landscape-up { background: purple; }
}

.desktop-only {
  @include for-desktop-only { background: purple; }
}

.desktop-up {
  @include for-desktop-up { background: purple; }
}

.big-desktop-up {
  @include for-big-desktop-up { background: purple; }
}
```
