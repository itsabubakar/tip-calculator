//getting my values from the dom

const billValue = document.querySelector("[data-bill]");
const percentages = document.querySelectorAll("[data-percentages]");
const people = document.querySelector("[data-people]");
const totalTip = document.querySelector("[data-total-tip]");
const form = document.querySelector("#form");
const custom = document.querySelector("[data-custom]");
const totalAmount = document.querySelector("[data-total-amount]");
const reset = document.querySelector("[data-reset]");
const buttons = document.querySelector(".buttons");
const moreButtons = buttons.getElementsByTagName("button");
const billOutput = document.querySelector(".bill-output");

//loops through the buttons

percentages.forEach((btn) => btn.addEventListener("click", calc));

function calc(e) {
  // checks if there is any item with the class list of active removing it if there is
  document.querySelector(".active")
    ? document.querySelector(".active").classList.remove("active")
    : "";

  // adds a class of active to the clicked btn
  this.classList.add("active");
  if (billValue.value == "" || billValue == 0) {
    billOutput.classList.add("danger");
    console.log("foo");
  } else {
    billOutput.classList.add("success");
  }

  //gets the values
  const numBill = Number(billValue.value);
  console.log({ numBill });
  const numPercentage = Number(e.originalTarget.value);
  console.log({ numPercentage });

  const result = (numPercentage / numBill) * 100;

  // passes the result to billsplit to calculate the billsplit
  billSplit(result);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  customCalc();
});

// form.addEventListener('mouseleave', (e)=> {
//   e.preventDefault();
//   customCalc();
// })

function customCalc() {
  const customNum = Number(custom.value);
  const numBill = Number(billValue.value);
  console.log({ customNum });

  const result = (customNum / numBill) * 100;
  billSplit(result);
  custom.value = null;
}

function billSplit(a) {
  const numBill = Number(billValue.value);
  const peopleNum = Number(people.value);
  const hide = document.querySelector(".hidden");

  const peopleOutput = document.querySelector(".people-output");
  console.log(peopleNum);
  if (peopleNum === 0) {
    hide.classList.add("danger-info");
    setTimeout(() => hide.classList.remove("danger-info"), 1500);
  } else {
    const billResult = (numBill / peopleNum + a / peopleNum).toFixed(2);
    const tipTotal = (a / peopleNum).toFixed(2);
    console.log(tipTotal);
    totalAmount.textContent = billResult;
    totalTip.textContent = tipTotal;

    //clearing the input values
    hide.classList.remove("danger-info");
  }
}

//resets my values

reset.addEventListener("click", function () {
  totalTip.textContent = "0.00";
  totalAmount.textContent = "0.00";
  billValue.value = null;
  people.value = null;
  this.classList.add("active");
  billOutput.classList.remove("success");
  document.querySelector(".active").classList.remove("active");
});

// removes the active class

reset.addEventListener("mouseleave", function () {
  this.classList.remove("active");
  billOutput.classList.remove("success");
  document.querySelector(".active").classList.remove("active");
});
