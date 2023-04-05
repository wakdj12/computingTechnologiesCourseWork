// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

for (let i = 0; i < 4; i++) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };

  span[i].onclick = function () {
    modal[i].style.display = "none";
  };
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal[0]) {
    modal[0].style.display = "none";
  }
  if (event.target == modal[1]) {
    modal[1].style.display = "none";
  }
};

// function toTitleCase(str) {
//   str = str.split(" ");
//   for (var i = 0; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
//   }
//   return str.join(" ");
// }

// document.getElementsByClassName("country-p")[0].innerText = toTitleCase(
//   document.getElementsByClassName("country-p")[0].innerText
// );
// console.log(
//   toTitleCase(document.getElementsByClassName("country-p")[0].innerText)
// );
