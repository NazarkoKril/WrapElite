// form
"use strick";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  form.addEventListener("submit", form1Send);

  async function form1Send(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
      form.classList.add("_sending");

      let message = "Нова форма:\n";
      for (const [name, value] of formData) {
        message += `${name}: ${value}\n`;
      }

      const botToken = "6424263444:AAHWbeR00R1t8htc48DicXL1pcyvSWUr77w";
      const chatId = "677150734";

      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;

      try {
        let response = await fetch(apiUrl, { method: "GET" });

        if (response.ok) {
          form.reset();
          form.classList.remove("_sending");

          // Показуємо попап про успішне надсилання
          Swal.fire(
            "Successo!",
            "Le tue informazioni sono state inviate con successo!",
            "success"
          );
        } else {
          // alert("Error sending the message to the bot");
          form.classList.remove("_sending");
        }
      } catch (error) {
        console.error("Помилка при відправці запиту:", error);
        // alert("Помилка при відправці запиту");
        form.classList.remove("_sending");
      }
    } else {
      // alert("Заповніть обов'язкові поля");
    }
  }
  //     let response = await fetch("sendmail.php", {
  //       method: "POST",
  //       body: formData,
  //     });
  //     if (response.ok) {
  //       let result = await response.json();
  //       alert(result.message);
  //       form.reset();
  //       form.classList.remove("_sending");
  //     } else {
  //       alert("ERROR");
  //       form.classList.remove("_sending");
  //     }
  //   } else {
  //     alert("Fill in the required fields");
  //   }
  // }

  function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll("._req");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.classList.contains("_email")) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else {
        if (input.value === "") {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add("_error");
    input.classList.add("_error");
  }
  function formRemoveError(input) {
    input.parentElement.classList.remove("_error");
    input.classList.remove("_error");
  }
  function emailTest(input) {
    return !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(input.value);
  }
});

// swiper - review

const swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  initialSlide: 2,

  slidesPerView: 1,
  spaceBetween: 50,
  speed: 1500,
});

// swiper - serv

const swiperServ = new Swiper(".swiper-serv", {
  loop: false,

  // centeredSlides: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  slidesPerView: 3,
  spaceBetween: 110,
  speed: 1500,
  breakpoints: {
    1440: {
      spaceBetween: 110,
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 180,
    },

    1000: {
      slidesPerView: 2,
      spaceBetween: 205,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 100,
    },
  },
});

// pop up
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedbackForm");
  form.addEventListener("submit", formSend);

  async function formSend(e) {
    e.preventDefault();

    let error = formValidate(form);
    let formData = new FormData(form);
    if (error === 0) {
      form.classList.add("_sending");

      let message = "Новий коментарій:\n";
      for (const [name, value] of formData) {
        message += `${name}: ${value}\n`;
      }

      const botToken = "6424263444:AAHWbeR00R1t8htc48DicXL1pcyvSWUr77w";
      const chatId = "677150734";

      const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(
        message
      )}`;

      try {
        let response = await fetch(apiUrl, { method: "GET" });

        if (response.ok) {
          form.reset();
          form.classList.remove("_sending");

          // const successPopup = document.getElementById("successPopup");
          // successPopup.style.display = "block";

          // setTimeout(() => {
          //   successPopup.style.display = "none";
          // }, 9999999);
          Swal.fire({
            title: "Successo!",
            text: "La tua recensione è stata inviata con successo!",
            icon: "success",
          }).then((result) => {
            if (result.isConfirmed) {
              // Код для закриття вашого попап-вікна форми
              const popup = document.getElementById("popup");
              const body = document.body;
              popup.style.display = "none";
              body.style.overflow = "auto";
            }
          });
        } else {
          form.classList.remove("_sending");
        }
      } catch (error) {
        console.error("Error sending the request:", error);

        form.classList.remove("_sending");
      }
    } else {
    }
  }

  const popup = document.getElementById("popup");
  const openPopupButton = document.getElementById("openPopupButton");
  const closePopupButton = document.getElementById("closePopupButton");
  const body = document.body;
  document

    .getElementById("feedbackForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let errorCount = formValidate(this);

      if (errorCount === 0) {
        // alert("Форма відправлена успішно!");
        this.reset();
      }
    });

  function formValidate(form) {
    let error = 0;
    let formReq = form.querySelectorAll("._req1");

    for (let index = 0; index < formReq.length; index++) {
      const input = formReq[index];
      formRemoveError(input);

      if (input.value === "") {
        formAddError(input);
        error++;
      }
    }

    return error;
  }

  function formAddError(input) {
    input.classList.add("_error1");
  }

  function formRemoveError(input) {
    input.classList.remove("_error1");
  }

  openPopupButton.addEventListener("click", function () {
    popup.style.display = "block";
    body.style.overflow = "hidden";
  });

  closePopupButton.addEventListener("click", function () {
    popup.style.display = "none";
    body.style.overflow = "auto";
  });

  window.addEventListener("click", function (event) {
    if (event.target === popup) {
      popup.style.display = "none";
      body.style.overflow = "auto";
    }
  });
});

// modal image
const photos = document.querySelectorAll(".photo__image img");
const modal = document.querySelector(".modal-image");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.querySelector(".close-image");

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    modal.style.display = "block";
    modalImg.src = photo.src;
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
