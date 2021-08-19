var initialRef = document.querySelector("#initial-price");
var stonksRef = document.querySelector("#stonks");
var finalRef = document.querySelector("#final-price");
var button = document.querySelector("#button-check");
var message = document.querySelector("#message");

function checkStonks() {
  var initial = Number(initialRef.value);
  var stonks = Number(stonksRef.value);
  var final = Number(finalRef.value);
  var finalAmount = final * stonks;
  var initialAmoutn = initial * stonks;

  if (finalAmount > initialAmoutn) {
    var profit = finalAmount - initialAmoutn;
    var profitPercentage = (profit / initialAmoutn) * 100;
    message.style.color = "green";
    message.innerText =
      "Yay!!! profit is " +
      profit +
      "  and profit percentage is " +
      profitPercentage +
      "%";
  } else if (initialAmoutn > finalAmount) {
    var loss = initialAmoutn - finalAmount;
    var lossPercentage = (loss / initialAmoutn) * 100;
    message.style.color = "red";
    message.innerText =
      "Sorry, loss is " +
      loss +
      "  and loss percentage is " +
      lossPercentage +
      "%";
  } else {
    message.innerText = "You gain nothing you lose nothing";
  }
}

button.addEventListener("click", checkStonks);
