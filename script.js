// *******************NAVBAR*************************
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function (e) {
  console.log(window.pageYOffset);
  const scrollTop = window.scrollY;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0px";
  }
  lastScrollTop = scrollTop;
});

// *****************************TYPED***************************

var typed3 = new Typed(".typed", {
  strings: [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
    "Error nulla facilis porro reiciendis, pariatur ipsam quo dolores cum at eius nesciunt eos molestiae nisi expedita necessitatibus rerum consequatur perspiciatis dolorem enim? Officiis quibusdam nisi expedita aliquam omnis accusamus aliquid autem!",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  smartBackspace: true, // this is a default
  loop: false,
});

// ********************************Compteur************************
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;
  if (compteur == 0 && $(window).scrollTop() > top) {
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});
AOS.init();
