var initialRef = document.querySelector("#initial-price");
var stonksRef = document.querySelector("#stonks");
var finalRef = document.querySelector("#final-price");
var button = document.querySelector("#button-check");
var message = document.querySelector("#message");

function checkStonks() {
  var initial = Number(initialRef.value);
  var stonks = Number(stonksRef.value);
  var final = Number(finalRef.value);

  if (final > initial) {
    var profit = (final - initial) * stonks;
    var profitPercentage = (profit / initial) * 100;
    message.style.color = "green";
    message.innerText =
      "yes profit is " +
      profit +
      "  and profit percentage is " +
      profitPercentage +
      "%";
  } else if (initial > final) {
    var loss = (initial - final) * stonks;
    var lossPercentage = (loss / initial) * 100;
    message.style.color = "red";
    message.innerText =
      "no loss is " + loss + "  and loss percentage is " + lossPercentage + "%";
  } else {
    message.innerText = "You gain nothing you lose nothing";
  }
}

button.addEventListener("click", checkStonks);
