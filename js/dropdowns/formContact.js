document.addEventListener("DOMContentLoaded", () => {
  const allDivSelects = document.querySelectorAll(".divSelect");

  allDivSelects.forEach((divSelect) => {
    const styleInput = divSelect.querySelector(".styleInput");
    const menu = divSelect.querySelector(".menuSelect");
    const input = styleInput.querySelector("input");

    styleInput.addEventListener("click", (e) => {
      e.stopPropagation();
      document.querySelectorAll(".menuSelect.show").forEach((m) => {
        if (m !== menu) m.classList.remove("show");
      });
      menu.classList.toggle("show");
    });

    menu.querySelectorAll("span").forEach((span) => {
      span.addEventListener("click", () => {
        input.value = span.textContent;
        menu.classList.remove("show");
      });
    });
  });

  window.addEventListener("click", () => {
    document.querySelectorAll(".menuSelect.show").forEach((menu) => {
      menu.classList.remove("show");
    });
  });
});
///////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector(".styleInputDate input");
  const fp = flatpickr(input, {
    dateFormat: "Y-m-d",
    allowInput: false,
  });

  const styleInputDate = document.querySelector(".styleInputDate");
  styleInputDate.addEventListener("click", () => {
    fp.open();
  });
});
///////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", () => {
  const triggers = document.querySelectorAll(".styleInput, .styleInputDate");

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      document
        .querySelectorAll(".menuSelect, .menuSelectDate")
        .forEach((menu) => {
          if (this.nextElementSibling !== menu) {
            menu.classList.remove("active");
            menu.classList.remove("show");
          }
        });
      const relatedMenu = this.nextElementSibling;
      if (
        relatedMenu &&
        (relatedMenu.classList.contains("menuSelect") ||
          relatedMenu.classList.contains("menuSelectDate"))
      ) {
        relatedMenu.classList.toggle("active");
        menu.classList.remove("show");
      }
    });
  });

  document.addEventListener("click", () => {
    document
      .querySelectorAll(".menuSelect, .menuSelectDate")
      .forEach((menu) => {
        menu.classList.remove("active");
        menu.classList.remove("show");
      });
  });
});
///////////////////////////////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  const boxUpload = document.querySelector(".boxUpload");
  const fileInput = document.getElementById("fileInput");
  const fileInfo = document.getElementById("fileInfo");

  boxUpload.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", () => {
    const files = fileInput.files;
    const maxFiles = 1;
    const maxSizeMB = 2;

    fileInfo.innerHTML = "";

    if (files.length > maxFiles) {
      alert(`Only ${maxFiles} file(s) allowed.`);
      fileInput.value = "";
      return;
    }

    const file = files[0];
    if (file.size > maxSizeMB * 1024 * 1024) {
      alert(`File size must not exceed ${maxSizeMB} MB.`);
      fileInput.value = "";
      return;
    }

    const nameEl = document.createElement("p");
    nameEl.textContent = `Selected file: ${file.name}`;
    nameEl.style.fontWeight = "600";
    fileInfo.appendChild(nameEl);

    if (file.type.startsWith("image/")) {
      const imgPreview = document.createElement("img");
      imgPreview.src = URL.createObjectURL(file);
      fileInfo.appendChild(imgPreview);
    }
  });
});
