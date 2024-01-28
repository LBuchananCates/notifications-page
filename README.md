# Frontend Mentor - Notifications page solution 

Click here to view the demo! https://hilarious-cendol-ffb34f.netlify.app

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [Special mentions](#proud-code-snippets)
  - [Continued development](#continued-development)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

<img width="646" alt="Screen Shot 2023-08-10 at 9 42 57 PM" src="https://github.com/LBuchananCates/notifications-page/assets/100169368/43e9ff78-a95a-465b-a08c-4cc0e90b09bb">

### Links

- Live Site URL: https://hilarious-cendol-ffb34f.netlify.app/

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### Special mentions

1. Improved skills with CSS interactive properties (`:hover` pseudo property)
```
css
.woman-playing-chess:hover {
  cursor: pointer;
  filter: drop-shadow(0 0 0.25rem hsl(219, 14%, 63%));
}

.notification-highlights:hover {
  color: hsl(219, 85%, 26%);
}

.notification-highlights:hover {
  color: hsl(219, 85%, 26%);
}

```
2. Using javascript to alter css properties (changing font color on click by giving html element 2 different class names)
```

const markAllAsReadBtn = document.querySelector(".mark-all-as-read");

markAllAsReadBtn.addEventListener("click", function () {
  const unreadNotifs = document.querySelectorAll("div.unread");
  for (notif of unreadNotifs) {
    // add and remove classes
    notif.classList.add("read");
    notif.classList.remove("unread");
  }
```

### Continued development

This was a relatively easy project in terms of using javascript, my biggest hurdle was ensuring I used the function correctly.


## Author

- Website - https://hilarious-cendol-ffb34f.netlify.app/
- Frontend Mentor - [@LBuchananCates](https://www.frontendmentor.io/profile/lbuchanancates)
