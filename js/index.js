"use strick";

// swiper
const swiperServ = new Swiper(".swiper__serv", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 35,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 70,
    },
    750: {
      slidesPerView: 2,
      spaceBetween: 35,
    },
    1080: {
      slidesPerView: 3,
      spaceBetween: 35,
    },
  },
});

// swiper
const swiperPort = new Swiper(".swiper__port", {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 50,
  freeMode: true,
  direction: "horizontal",
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  mousewheel: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
      freeMode: false,
      loop: true,
    },
    800: {
      slidesPerView: 2,
      spaceBetween: 5,
      freeMode: true,
      loop: false,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1150: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

// swiper
const swiperRev = new Swiper(".swiper__rev", {
  loop: false,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "custom",
    renderCustom: function (swiper, current, total) {
      const activeIndex = current - 1;
      const prevIndex = activeIndex - 1;
      const nextIndex = activeIndex + 1;
      const safePrevIndex = Math.max(0, prevIndex);
      const safeNextIndex = Math.min(total - 1, nextIndex);

      return `<ul class="swiper-pagination">
        <li class="swiper-pagination-bullet${
          safePrevIndex === current - 1
            ? " swiper-pagination-bullet-active"
            : ""
        }">${safePrevIndex + 1}</li>
        <li class="swiper-pagination-bullet${
          activeIndex === current - 1 ? " swiper-pagination-bullet-active" : ""
        }">${activeIndex + 1}</li>
        <li class="swiper-pagination-bullet${
          safeNextIndex === current - 1
            ? " swiper-pagination-bullet-active"
            : ""
        }">${safeNextIndex + 1}</li>
      </ul>`;
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  initialSlide: 1,
});
// show img portfolio
document.addEventListener("DOMContentLoaded", function () {
  const showMoreBtn = document.getElementById("showMore");
  const hideMoreBtn = document.getElementById("hideMore");
  const hiddenImages = document.getElementById("hiddenImages");
  let scrollPosition = 0;

  // Перевірка існування елемента showMoreBtn
  if (showMoreBtn) {
    showMoreBtn.addEventListener("click", function () {
      scrollPosition = window.scrollY;
      showHiddenImages();
    });
  }

  if (hideMoreBtn) {
    hideMoreBtn.addEventListener("click", hideHiddenImages);
  }

  function showHiddenImages() {
    hiddenImages.style.display = "grid";
    if (showMoreBtn) showMoreBtn.style.display = "none";
    if (hideMoreBtn) hideMoreBtn.style.display = "inline-block";
  }

  function hideHiddenImages(event) {
    event.preventDefault();
    hiddenImages.style.display = "none";
    if (showMoreBtn) showMoreBtn.style.display = "inline-block";
    if (hideMoreBtn) hideMoreBtn.style.display = "none";
    window.scrollTo({ top: scrollPosition, behavior: "smooth" });
  }
});

// form
const botToken = "6424263444:AAHWbeR00R1t8htc48DicXL1pcyvSWUr77w";
const chatId = "6577904551";

function validateAndSendMessage(
  form,
  nameInput,
  emailInput,
  phoneInput,
  messageInput
) {
  // Validate Name
  if (!nameInput.value || /\d/.test(nameInput.value)) {
    nameInput.classList.add("error");
    shakeElement(nameInput);
    return;
  } else {
    nameInput.classList.remove("error");
  }

  // Validate Email
  if (!emailInput.value || !isValidEmail(emailInput.value)) {
    emailInput.classList.add("error");
    shakeElement(emailInput);
    return;
  } else {
    emailInput.classList.remove("error");
  }

  // Validate Phone
  if (!phoneInput.value || !isValidPhoneNumber(phoneInput.value)) {
    phoneInput.classList.add("error");
    shakeElement(phoneInput);
    return;
  } else {
    phoneInput.classList.remove("error");
  }

  // Construct message to send to Telegram
  const message = `
    Нова форма:
    Name: ${nameInput.value}
    Email: ${emailInput.value}
    Phone: ${phoneInput.value}
    Message: ${messageInput.value}
     `;

  // Send message to Telegram
  // Send message to Telegram
  sendMessageToTelegram(message)
    .then(() => {
      // Redirect to thanks.html on successful submission
      window.location.href = "thanks.html";
    })
    .catch((error) => {
      console.error("There was a problem sending the message:", error);
      // Optionally handle error case here
    });
}

document.addEventListener("DOMContentLoaded", function () {
  // Отримуємо першу форму та її елементи
  const form1 = document.getElementById("form1");
  const nameInput1 = document.getElementById("form1Name");
  const emailInput1 = document.getElementById("form1Email");
  const phoneInput1 = document.getElementById("phone1");
  const messageInput1 = document.getElementById("form1Message");

  // Додаємо обробник події для першої форми
  if (form1) {
    form1.addEventListener("submit", function (event) {
      event.preventDefault(); // Забороняємо відправку форми
      validateAndSendMessage(
        form1,
        nameInput1,
        emailInput1,
        phoneInput1,
        messageInput1
      );
    });
  }

  // Отримуємо другу форму та її елементи
  const form2 = document.getElementById("form2");
  const nameInput2 = document.getElementById("form2Name");
  const emailInput2 = document.getElementById("form2Email");
  const phoneInput2 = document.getElementById("phone2");
  const messageInput2 = document.getElementById("form2Message");

  // Додаємо обробник події для другої форми
  if (form2) {
    form2.addEventListener("submit", function (event) {
      event.preventDefault(); // Забороняємо відправку форми
      validateAndSendMessage(
        form2,
        nameInput2,
        emailInput2,
        phoneInput2,
        messageInput2
      );
    });
  }
});

// Function to validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Function to validate Italian phone number format
function isValidPhoneNumber(phone) {
  return /^\+39-\d{3}-\d{3}-\d{4}$/.test(phone);
}

// Function to shake an element
function shakeElement(element) {
  element.animate(
    [
      { transform: "translateX(-5px)" },
      { transform: "translateX(5px)" },
      { transform: "translateX(-5px)" },
      { transform: "translateX(5px)" },
      { transform: "translateX(0)" },
    ],
    {
      duration: 500,
    }
  );
}

// Function to send message to Telegram
function sendMessageToTelegram(message) {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
    message
  )}`;

  fetch(apiUrl, { method: "POST" })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Message sent successfully:", data);
      // Redirect to thanks.html on successful submission
      window.location.href = "thanks.html";
    })
    .catch((error) => {
      console.error("There was a problem sending the message:", error);
      // Optionally handle error case here
    });
}

// // form 3

// Function to send message to Telegram
function sendMessageToTelegram(message) {
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;
  const formData = new FormData();
  formData.append("chat_id", chatId);
  formData.append("text", message);

  return fetch(apiUrl, {
    method: "POST",
    body: formData,
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form3");
  const nameInput = document.getElementById("form3Name");
  const emailInput = document.getElementById("form3Email");
  const subjectInput = document.getElementById("subject");

  // Перевірка існування елемента form
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      // Remove error class before validation
      nameInput.classList.remove("error");
      emailInput.classList.remove("error");
      subjectInput.classList.remove("error");

      // Validation
      let isValid = true;

      if (!/^[a-zA-Z]+$/.test(nameInput.value)) {
        nameInput.classList.add("error");
        isValid = false;
      } else {
        nameInput.classList.remove("error"); // Remove error class if validation passes
      }

      if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
        emailInput.classList.add("error");
        isValid = false;
      } else {
        emailInput.classList.remove("error"); // Remove error class if validation passes
      }

      if (subjectInput.value.trim() === "") {
        subjectInput.classList.add("error");
        isValid = false;
      } else {
        subjectInput.classList.remove("error"); // Remove error class if validation passes
      }

      // If all inputs are valid, send data to Telegram
      if (isValid) {
        const message = `Name: ${nameInput.value}\nEmail: ${
          emailInput.value
        }\nSubject: ${subjectInput.value}\nMessage: ${
          document.getElementById("message").value
        }`;

        // Send message to Telegram
        sendMessageToTelegram(message)
          .then((response) => {
            if (!response.ok) {
              throw new Error("There was a problem sending the message.");
            }
            console.log("Message sent successfully.");
            // Redirect to thanks.html on successful submission
            window.location.href = "thanks.html";
          })
          .catch((error) => {
            console.error("There was a problem sending the message:", error);
            // Optionally handle error case here
          });
      }
    });
  }
});

let menuBtn1 = document.querySelector(".menu-btn1");
let menu1 = document.querySelector(".menu1");
let body1 = document.body;

let anchorLinks1 = document.querySelectorAll(".menu__items1 a");

anchorLinks1.forEach(function (anchor) {
  anchor.addEventListener("click", function () {
    menuBtn1.classList.remove("active");
    menu1.classList.remove("active");
    body1.style.overflow = "auto";
    let targetId = this.getAttribute("href").substring(1);
    let targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
});

menuBtn1.addEventListener("click", function () {
  menuBtn1.classList.toggle("active");
  menu1.classList.toggle("active");

  if (menu1.classList.contains("active")) {
    body1.style.overflow = "hidden";
  } else {
    body1.style.overflow = "auto";
  }
});
