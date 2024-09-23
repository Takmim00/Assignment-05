const balanceEl = document.getElementById("balance");
const currentDonationEl = document.getElementById("current-amount");
const donateAmountEl = document.getElementById("donate-amount");
const donateBtn = document.getElementById("donate-btn");
const historyEl = document.getElementById("history-section");
const currentDonationEl1 = document.getElementById("current-amount1");
const donateAmountEl1 = document.getElementById("donate-amount1");
const donateBtn1 = document.getElementById("donate-btn1");
const currentDonationEl2 = document.getElementById("current-amount1");
const donateAmountEl2 = document.getElementById("donate-amount1");
const donateBtn2 = document.getElementById("donate-btn1");
//time and date
function getFormattedDateTime() {
  const now = new Date();
  return now.toLocaleString("en-GB", {
    timeZone: "Asia/Dhaka",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
}

// 1st card
donateBtn.addEventListener("click", function () {
  const balance = parseFloat(balanceEl.innerText);
  const currentAmount = parseFloat(currentDonationEl.innerText);
  const donateAmount = parseFloat(donateAmountEl.value);

  if (donateAmount < 0 || isNaN(donateAmount)) {
    return alert("Please enter a valid donation amount");
  }

  const newBalance = balance - donateAmount;
  balanceEl.innerText = newBalance;

  const newDonation = currentAmount + donateAmount;
  currentDonationEl.innerText = newDonation;

  const dateTime = getFormattedDateTime();
  const historyList = document.createElement("li");
  historyList.className = "card card-side shadow p-4 items-center";
  historyList.innerText = `${newDonation} Taka is Donated for famine-2024 at Feni, Bangladesh
      Date :${dateTime} GMT +0600 (Bangladesh Standard Time)
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

  if (donateAmount1 < 0 || isNaN(donateAmount1)) {
    return alert("Please enter a valid donation amount");
  }

  const newBalance1 = balance - donateAmount1;
  balanceEl.innerText = newBalance1;

  const newDonation1 = currentAmount1 + donateAmount1;
  currentDonationEl1.innerText = newDonation1;

  const dateTime = getFormattedDateTime();
  const historyList = document.createElement("li");
  historyList.className = "card card-side shadow p-4 items-center";
  historyList.innerText = `${newDonation1} Taka is Donated for Flood Relief in Feni,Bangladesh
      Date :${dateTime} GMT +0600 (Bangladesh Standard Time)
  `;

  const historyContainer = document.getElementById("history-section");
  historyContainer.insertBefore(historyList, historyContainer.firstChild);

  donateAmountEl1.value = "";
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
  historyTab.classList.remove(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});
