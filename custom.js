window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("back-to-top").style.display = "block";
  } else {
    document.getElementById("back-to-top").style.display = "none";
  }
}

document.getElementById("back-to-top").onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

var button = document.getElementById("my-button");
var list = document.getElementById("my-list");

button.onclick = function () {
  if (list.style.display === "none") {
    list.style.display = "block";
    button.innerHTML = "Hide List";
  } else {
    list.style.display = "none";
    button.innerHTML = "Show List";
  }
};

$(document).ready(function () {
  $(".customer-logos").slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
