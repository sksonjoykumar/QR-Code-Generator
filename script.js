// selected all html id
const inputText = document.getElementById("text-input");
const imageQR = document.getElementById("qr-image");
const generatedBtn = document.getElementById("generate-btn");
const text = document.getElementById("text");

// window.onload function
window.onload = function () {
  mainFun();
};

// mainFun function
function mainFun() {
  function generateQR() {
    if (inputText.value === "") {
      inputText.classList.add("error");
      setTimeout(() => {
        inputText.classList.remove("error");
        alert("Please type something!");
      }, 1000);
    } else {
      imageQR.src =
        " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
        inputText.value;
      imageQR.style.display = "block";
      text.innerHTML = `Name: ${inputText.value}`;
      text.style.display = "block";
      inputText.value = "";
    }
  }
  //   generatedBtn addEventListener
  generatedBtn.addEventListener("click", generateQR);
}
