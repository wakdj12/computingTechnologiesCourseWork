// Get the modal
var modal = document.getElementsByClassName("modal");

// Get the button that opens the modal
var btn = document.getElementsByClassName("btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close");

for (let i = 0; i < 4; i++) {
  btn[i].onclick = function () {
    modal[i].style.display = "block";
  };

  span[i].onclick = function () {
    modal[i].style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
    if (event.target == modal[i]) {
      modal[i].style.display = "none";
    }
  };
}

/*
 https://ipdata.co/blog/how-to-get-the-ip-address-in-javascript/
*/
function json(url) {
  return fetch(url).then((res) => res.json());
}

let apiKey = "627c6d76f95b0ee0e7cef70893447a56f28f3859021e4cab28a183ac";
json(`https://api.ipdata.co?api-key=${apiKey}`).then((data) => {
  console.log(data.ip);
  console.log(data.city);
  console.log(data.country_code);
  console.log(data.latitude, data.longitude);
});

json(`https://api.ipdata.co/27.126.160.0/threat?api-key=${apiKey}`).then(
  (data) => {
    console.log(data.blocklists);
  }
);

width = window.innerWidth;
height = window.innerHeight;
console.log(width, height);

var x = document.querySelectorAll(".inline-d");

x.forEach((e) => {
  e.addEventListener("click", function () {
    console.log(e.childNodes[1].className);
    console.log(e.childNodes[1].textContent);
    w = e.childNodes[1];

    // document.querySelector(w).classList.toggle("expand");
    s = getComputedStyle(w);
    console.log();
    if (s.display === "none") {
      w.style.display = "inline";
    } else if (s.display === "inline") {
      w.style.display = "none";
    }
    //w.style.display = "none";

    // var y = document.querySelectorAll(".defintion");
    // y.forEach((z) => {
    //   z.classList.toggle("expand");
    // });
  });
});
//});

console.log(x);
console.log();
