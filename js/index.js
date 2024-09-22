const historyTab = document.getElementById("history-tab");
const donationTab = document.getElementById("donation-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );

  historyTab.classList.remove("text-gray-500");
  donationTab.classList.remove(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  donationTab.classList.add("text-gray-500");
});