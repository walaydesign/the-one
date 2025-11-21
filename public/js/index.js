AOS.init({ startEvent: "load" });
window.addEventListener("load", AOS.refresh);

$(".header_item").click(function () {
  let target = $(this).data("target");
  let headerHeight = $(".header").height();
  var top = $(target).offset().top - headerHeight;
  $("html, body").animate({ scrollTop: top }, parseInt(300));
});

$(".btn-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 300);
});

var swiperBeauty = new Swiper(".beauty_swiper", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#beauty-next",
    prevEl: "#beauty-prev",
  },
  speed: 800,
  pagination: {
    el: "#beauty-pagination",
    clickable: true,
  },
  effect: "fade",
  allowTouchMove: false,
  fadeEffect: {
    crossFade: true,
  },
});

var swiperGallery = new Swiper(".gallery_swiper", {
  slidesPerView: 1.3,
  speed: 800,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    992: {
      slidesPerView: 3.3,
    },
  },
});

var swiperTab1 = new Swiper(".swiper-tab-1", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#swiper-tab-1-next",
    prevEl: "#swiper-tab-1-prev",
  },
  speed: 800,
  pagination: {
    el: "#swiper-tab-1-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  on: {
    slideChangeTransitionEnd: function () {
      let index = $(".swiper-tab-1 .swiper-slide-active").index();
      $("#essence .swiper-tab_btns_item").removeClass("active");
      $("#essence .swiper-tab_btns_item").eq(index).addClass("active");
    },
  },
});

$("#essence .swiper-tab_btns_item").click(function () {
  $("#essence .swiper-tab_btns_item").removeClass("active");
  $(this).addClass("active");
  let li_index = $(this).parents(".row-item").index();
  swiperTab1.slideTo(li_index, 1000, true);
});

var swiperTab2 = new Swiper(".swiper-tab-2", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#swiper-tab-2-next",
    prevEl: "#swiper-tab-2-prev",
  },
  speed: 800,
  pagination: {
    el: "#swiper-tab-2-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  on: {
    slideChangeTransitionEnd: function () {
      let index = $(".swiper-tab-2 .swiper-slide-active").index();
      $("#swiper-tab-2 .swiper-tab_btns_item")
        .eq(index)
        .addClass("active")
        .siblings(".swiper-tab_btns_item")
        .removeClass("active");
    },
  },
});

$("#swiper-tab-2 .swiper-tab_btns_item").click(function () {
  $(this)
    .addClass("active")
    .siblings(".swiper-tab_btns_item")
    .removeClass("active");
  let li_index = $(this).index();
  swiperTab2.slideTo(li_index, 1000, true);
});

var swiperTab3Thumbnail = new Swiper(".swiper-tab-3-thumbnail", {
  slidesPerView: 3,
  spaceBetween: 8,
  speed: 800,
  allowTouchMove: false,
});

var swiperTab3 = new Swiper(".swiper-tab-3", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#swiper-tab-3-next",
    prevEl: "#swiper-tab-3-prev",
  },
  speed: 800,
  pagination: {
    el: "#swiper-tab-3-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  thumbs: {
    swiper: swiperTab3Thumbnail,
  },
});

var swiperTab4 = new Swiper(".swiper-tab-4", {
  slidesPerView: 1,
  navigation: {
    nextEl: "#swiper-tab-4-next",
    prevEl: "#swiper-tab-4-prev",
  },
  speed: 800,
  pagination: {
    el: "#swiper-tab-4-pagination",
    clickable: true,
  },
  allowTouchMove: false,
  on: {
    slideChangeTransitionEnd: function () {
      let index = $(".swiper-tab-4 .swiper-slide-active").index();
      $("#swiper-tab-4 .swiper-tab_btns_item")
        .eq(index)
        .addClass("active")
        .siblings(".swiper-tab_btns_item")
        .removeClass("active");
    },
  },
});

$("#swiper-tab-4 .swiper-tab_btns_item").click(function () {
  $(this)
    .addClass("active")
    .siblings(".swiper-tab_btns_item")
    .removeClass("active");
  let li_index = $(this).index();
  swiperTab4.slideTo(li_index, 1000, true);
});


function sendEmail() {
  Email.send({
    SecureToken: "8207c7d7-4a6c-4797-870d-d16ee71023ce",
    To: "zhulixdesign@gmail.com, zhuli705098@gmail.com, a3202443aa@yahoo.com.tw, dtweryd@gmail.com",
    From: "walayydesign@gmail.com",
    Subject: "航綻甜心預約賞屋",
    Body:
      "姓名:" +
      document.getElementById("name").value +
      "<br>電話:" +
      document.getElementById("phone").value +
      "<br>需求房型:" +
      document.getElementById("type").value +
      "<br>聯繫內容:" +
      document.getElementById("content").value,
  }).then((message) => alert("感謝您的來信！我們很快就會和您聯繫！"));
}

