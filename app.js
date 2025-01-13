var names = [];
var selectedName = "";
var nameInput = document.getElementById("name");
var messageContainer = document.querySelector(".message");
var spinnerContainer = document.querySelector(".spinner-container");
var winnerContainer = document.getElementById("winnerName");
// وقتی صفحه بارگذاری می‌شود، توابع زیر فراخوانی می‌شود.
document.addEventListener("DOMContentLoaded", function() {
  setSubmitButtonListener();
  setLotteryButtonListener();
});

function setSubmitButtonListener() {
  var submitButton = document.getElementById("submitButton");
  submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    var name = nameInput.value.trim();
    if (name) {
      names.push(name);
      nameInput.value = "";
      showMessage("i", "نام با موفقیت اضافه شد");
    } else {
      showMessage("e", "لطفاً نام خود را وارد کنید");
    }
  });
}

function setLotteryButtonListener() {
  var lotteryButton = document.getElementById("lotteryButton");
  lotteryButton.addEventListener("click", function(event) {
    event.preventDefault();
    if (names.length > 0) {
      startSpinner();
      setTimeout(function() {
        selectedName = names[Math.floor(Math.random() * names.length)];
        winnerContainer.textContent = selectedName;
        stopSpinner();
        showMessage("i", "برنده قرعه کشی: " +selectedName);
      }, 3000);
    } else {
      showMessage("e", "هیچ نامی برای قرعه کشی وجود ندارد.");
    }
  });
}function showMessage(type, text) {
  messageContainer.className = "message " + type;
  messageContainer.innerHTML = '<i class="fa fa-' + (type === "i" ? "info-circle" : "times-circle") + '"></i> ' + text;
  messageContainer.style.display = "block";
}

function startSpinner() {
  spinnerContainer.classList.add("active");
}

function stopSpinner() {
  spinnerContainer.classList.remove("active");
}