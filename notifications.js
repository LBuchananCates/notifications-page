// grab mark all as read button
const markAllAsReadBtn = document.querySelector(".mark-all-as-read");

// create event listener for mark all as read button
markAllAsReadBtn.addEventListener("click", function () {
  // grab divs with class of unread
  const unreadNotifs = document.querySelector(".unread");

  // turn unread divs background white
  unreadNotifs.style.backgroundColor = "white";

  // turn notifications from 3 to 0 DONE
  const currentNotifNum = document.querySelector(".notification-number");
  currentNotifNum.textContent = "0";

  // display none for red-dot
  const notificationDot = document.querySelector(".red-dot");
  notificationDot.style.display = "none"; // got this working for the first container, but with queryselectorall, doesn't work
});
