// grab mark all as read button DONE
const markAllAsReadBtn = document.querySelector(".mark-all-as-read");

// create event listener for mark all as read button
markAllAsReadBtn.addEventListener("click", function () {
  // grab divs with class of unread [works only for ONE container]
  const unreadNotifs = document.querySelectorAll("div.unread");
  for (notif of unreadNotifs) {
    // add and remove classes
    notif.classList.add("read");
    notif.classList.remove("unread");
  }

  // display none for red-dot
  const notificationDot = document.querySelectorAll(".red-dot");
  for (const notif of notificationDot) {
    notif.classList.remove("red-dot");
    notif.style.display = "none";
  }

  // turn notifications from 3 to 0 DONE
  const currentNotifNum = document.querySelector(".notification-number");
  currentNotifNum.textContent = "0";
});
