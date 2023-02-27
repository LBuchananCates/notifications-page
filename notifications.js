// grab mark all as read button DONE
const markAllAsReadBtn = document.querySelector(".mark-all-as-read");

// create event listener for mark all as read button
markAllAsReadBtn.addEventListener("click", function () {
  // grab divs with class of unread [works only for ONE container]
  const unreadNotifs = document.querySelector("div.unread");

  // turn unread divs background white WORKA ON ONE
  unreadNotifs.classList.add("read");
  unreadNotifs.classList.remove("unread");

  // turn notifications from 3 to 0 DONE
  const currentNotifNum = document.querySelector(".notification-number");
  currentNotifNum.textContent = "0";

  // display none for red-dot
  const notificationDot = document.querySelector(".red-dot");
  notificationDot.style.display = "none"; // got this working for the first container, but with queryselectorall, doesn't work
});
