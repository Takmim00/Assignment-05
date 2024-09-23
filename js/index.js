





// donationTab and historyTab functionality
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
  document.getElementById("donation-section").classList.add("hidden");
  document.getElementById("history-list").classList.remove("hidden");
});
donationTab.addEventListener("click", function () {
  donationTab.classList.add(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  historyTab.classList.remove(
    "text-black",
    "bg-[#B4F461]",
    "border-[#1111114D]"
  );
  document.getElementById("donation-section").classList.remove("hidden");
  document.getElementById("history-list").classList.add("hidden");
});