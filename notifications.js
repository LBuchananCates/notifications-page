// create event listener for mark all as read
const markAllAsReadBtn = document.querySelector(".mark-all-as-read");
markAllAsReadBtn.addEventListener("click", function () {
  const notifContainer = document.getElementsByClassName(
    "notification-container"
  );
  notifContainer[0].style.backgroundColor = "white";
});

// notification number starts at 3, resets to 0 when click button

// if notification-container bg color = light blue, when click button remove background color
