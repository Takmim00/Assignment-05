const balanceEl = document.getElementById("balance");
const historyEl = document.getElementById("history-section");
const currentDonationEl = document.getElementById("current-amount");
const donateAmountEl = document.getElementById("donate-amount");
const donateBtn = document.getElementById("donate-btn");
const currentDonationEl1 = document.getElementById("current-amount1");
const donateAmountEl1 = document.getElementById("donate-amount1");
const donateBtn1 = document.getElementById("donate-btn1");
const currentDonationEl2 = document.getElementById("current-amount2");
const donateAmountEl2 = document.getElementById("donate-amount2");
const donateBtn2 = document.getElementById("donate-btn2");
const footerEl = document.getElementById("footer");

// Date and timezone
function getFormateTimeDate() {
  const now = new Date();
  return now.toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
}

// 1st card
donateBtn.addEventListener("click", function () {
  const balance = parseFloat(balanceEl.innerText);
  const currentAmount = parseFloat(currentDonationEl.innerText);
  const donateAmount = parseFloat(donateAmountEl.value);

  if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount >= balance) {
    return alert("Please enter a valid donation amount");
  } else {
    my_modal.showModal();
  }

  const newBalance = balance - donateAmount;
  balanceEl.innerText = newBalance;

  const newDonation = currentAmount + donateAmount;
  currentDonationEl.innerText = newDonation;

  const dateTime = getFormateTimeDate();
  const historyList = document.createElement("li");
  historyList.className = "card card-side shadow p-4 items-center";
  historyList.innerText = `${donateAmount} Taka is Donated for famine-2024 at Noakhali, Bangladesh
      Date : ${dateTime} GMT +0600 (Bangladesh Standard Time)
  `;

  const historyContainer = document.getElementById("history-section");
  historyContainer.insertBefore(historyList, historyContainer.firstChild);

  donateAmountEl.value = "";
});
//2nd card
donateBtn1.addEventListener("click", function () {
  const balance = parseFloat(balanceEl.innerText);
  const currentAmount1 = parseFloat(currentDonationEl1.innerText);
  const donateAmount1 = parseFloat(donateAmountEl1.value);

  if (isNaN(donateAmount1) || donateAmount1 <= 0 || donateAmount1 >= balance) {
    return alert("Please enter a valid donation amount");
  } else {
    my_modal.showModal();
  }

  const newBalance1 = balance - donateAmount1;
  balanceEl.innerText = newBalance1;

  const newDonation1 = currentAmount1 + donateAmount1;
  currentDonationEl1.innerText = newDonation1;

  const dateTime = getFormateTimeDate();
  const historyList = document.createElement("li");
  historyList.className = "card card-side shadow p-4 items-center";
  historyList.innerText = `${donateAmount1} Taka is Donated for Flood Relief in Feni,Bangladesh
      Date : ${dateTime} GMT +0600 (Bangladesh Standard Time)
  `;

  const historyContainer = document.getElementById("history-section");
  historyContainer.insertBefore(historyList, historyContainer.firstChild);

  donateAmountEl1.value = "";
});
//3rd card
donateBtn2.addEventListener("click", function () {
  const balance = parseFloat(balanceEl.innerText);
  const currentAmount2 = parseFloat(currentDonationEl2.innerText);
  const donateAmount2 = parseFloat(donateAmountEl2.value);

  if (isNaN(donateAmount2) || donateAmount2 <= 0 || donateAmount2 >= balance) {
    return alert("Please enter a valid donation amount");
  } else {
    my_modal.showModal();
  }

  const newBalance2 = balance - donateAmount2;
  balanceEl.innerText = newBalance2;

  const newDonation2 = currentAmount2 + donateAmount2;
  currentDonationEl2.innerText = newDonation2;

  const dateTime = getFormateTimeDate();
  const historyList = document.createElement("div");
  historyList.className = "card card-side shadow p-4 items-center";
  historyList.innerText = `${donateAmount2} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
      Date : ${dateTime} GMT +0600 (Bangladesh Standard Time)
  `;

  const historyContainer = document.getElementById("history-section");
  historyContainer.insertBefore(historyList, historyContainer.firstChild);

  donateAmountEl2.value = "";
});

// donationTab and historyTab functionality
const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add("text-black", "bg-[#B4F461]", "border-[#1111114D]");

  historyTab.classList.remove("text-gray-500");
  donationTab.classList.remove(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  donationTab.classList.add("text-gray-500");
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});
donationTab.addEventListener("click", function () {
  donationTab.classList.add("text-black", "bg-[#B4F461]", "border-[#1111114D]");
  historyTab.classList.add("text-gray-500");
  historyTab.classList.remove(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  donationTab.classList.remove("text-gray-500");
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");

});
