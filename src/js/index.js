import "../sass/index.scss";
import "tailwindcss/tailwind.css";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import barba from "@barba/core";

const openedMobileNav = document.querySelector(".opened-mobile-nav");
const closedMobileNav = document.querySelector(".mobile-nav");
const openHamubrger = document.querySelector(".open-hamburger");
const closeHamubrger = document.querySelector(".close-hamburger");
const moonBtn = document.querySelectorAll(".moon-btn");
const moonSection = document.querySelector(".moon");
const marsBtn = document.querySelectorAll(".mars-btn");
const marsSection = document.querySelector(".mars");
const europaBtn = document.querySelectorAll(".europa-btn");
const europaSection = document.querySelector(".europa");
const titanBtn = document.querySelectorAll(".titan-btn");
const titanSection = document.querySelector(".titan");
const allSections = document.querySelectorAll(".section");
const allTechnologySections = document.querySelectorAll(".technology");
const firstbtn = document.querySelectorAll(".btn1");
const secondbtn = document.querySelectorAll(".btn2");
const thirdbtn = document.querySelectorAll(".btn3");
const section1 = document.querySelector(".technology1");
const section2 = document.querySelector(".technology2");
const section3 = document.querySelector(".technology3");

openHamubrger.addEventListener("click", () => {
  openedMobileNav.classList.remove("hidden");
  closedMobileNav.classList.add("hidden");
});
closeHamubrger.addEventListener("click", () => {
  openedMobileNav.classList.add("hidden");
  closedMobileNav.classList.remove("hidden");
});

moonBtn.forEach((moonbtn) => {
  moonbtn.addEventListener("click", (e) => {
    console.log("moon clicked");
    allSections.forEach((section) => {
      section.classList.remove("desktop:flex");
      section.classList.add("hidden");
    });
    moonSection.classList.add("desktop:flex");
    moonSection.classList.remove("hidden");
  });
});

marsBtn.forEach((marsbtn) => {
  marsbtn.addEventListener("click", (e) => {
    allSections.forEach((section) => {
      section.classList.remove("desktop:flex");
      section.classList.add("hidden");
    });
    marsSection.classList.add("desktop:flex");
    marsSection.classList.remove("hidden");
  });
});

europaBtn.forEach((europabtn) => {
  europabtn.addEventListener("click", (e) => {
    allSections.forEach((section) => {
      section.classList.remove("desktop:flex");
      section.classList.add("hidden");
    });

    europaSection.classList.add("desktop:flex");
    europaSection.classList.remove("hidden");
  });
});

titanBtn.forEach((titanbtn) => {
  titanbtn.addEventListener("click", (e) => {
    allSections.forEach((section) => {
      section.classList.remove("desktop:flex");
      section.classList.add("hidden");
    });
    titanSection.classList.add("desktop:flex");
    titanSection.classList.remove("hidden");
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

firstbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allTechnologySections.forEach((section) => {
      section.classList.remove("flex");
      section.classList.add("hidden");
    });
    section1.classList.add("flex");
    section1.classList.remove("hidden");
  });
});
secondbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allTechnologySections.forEach((section) => {
      section.classList.remove("flex");
      section.classList.add("hidden");
    });
    section2.classList.add("flex");
    section2.classList.remove("hidden");
  });
});
thirdbtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    allTechnologySections.forEach((section) => {
      section.classList.remove("flex");
      section.classList.add("hidden");
    });
    section3.classList.add("flex");
    section3.classList.remove("hidden");
  });
});
