---
title: 'Dark Mode Support'
date: 2020-12-13
layout: post
---

The main page of my web is supporting dark mode with system control. It will automatically change color mode according to the system without any manual trigger.

Just add a small clip below to main css file.

```css
@media (prefers-color-scheme: dark) {

}
```

For Example:
```css
/* light mode */
:root {
    --main-color: rgb(222, 222, 222);
    --main-deep-color: rgb(197, 167, 167);
    --main-pink-color: rgb(238, 229, 229);
}

/* dark mode */
@media (prefers-color-scheme: dark) {
    :root {
      --main-color: #000;
      --main-pink-color: rgb(34, 32, 32);
      --main-deep-color: #000;
    }
}
```
