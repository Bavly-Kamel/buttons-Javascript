// const refreshButton = document.getElementById("refreshPage");

// refreshButton.addEventListener("click", function () {
//   setTimeout(function () {
//     location.reload();
//   }, 125);
// });

//////////////////////////////
// const refreshButton = document.getElementById("refreshPage");

// refreshButton.addEventListener("mouseout", function () {
//   alert("Mouse left the button");
// });

/////////////////////////////

const dobleClick = document.getElementById("dobleClick");
const popupMessege = document.getElementById("popupMessage");
const refreshPage = document.getElementById("refreshPage");

dobleClick.addEventListener("dblclick", function () {
  popupMessege.style.display = "block";

  setTimeout(function () {
    popupMessege.style.display = "none";
  }, 5000);
});

refreshPage.addEventListener("click", function () {
  location.reload();
});
