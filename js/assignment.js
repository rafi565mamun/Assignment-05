
function handleDonation(donateAmountInputId, donationAmountId, donateBtnId) {
  const mainBalanceEl = document.getElementById("my-balance");
  const donationInputEl = document.getElementById(donateAmountInputId);
  const donationAmountEl = document.getElementById(donationAmountId);
  const donateBtn = document.getElementById(donateBtnId);
  
  // Modal elements
  const confirmationModal = document.getElementById("confirmationModal");
  const closeModalBtn = document.getElementById("closeModal");

  donateBtn.addEventListener("click", function () {
      //  current balance and donation amounts
      let currentBalance = parseFloat(mainBalanceEl.textContent);
      let donationAmount = parseFloat(donationAmountEl.textContent);
      let inputAmount = parseFloat(donationInputEl.value);

      // Validate the input amount
      if (isNaN(inputAmount) || inputAmount <= 0) {
          alert("Please enter a valid amount.");
          return;
      }

      if (inputAmount > currentBalance) {
          alert("You do not have enough balance to donate this amount.");
          return;
      }

      // Update the donation amount 
      donationAmount += inputAmount;
      currentBalance -= inputAmount;

      
      donationAmountEl.textContent = donationAmount.toFixed(2);
      mainBalanceEl.textContent = currentBalance.toFixed(2);

      donationInputEl.value = '';

      // Show the confirmation modal
      confirmationModal.classList.remove("hidden");
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener("click", function () {
      confirmationModal.classList.add("hidden");
  });
}

// Call the handleDonation function for each donation button
handleDonation("write-noakhali-donation-amount", "noakhali-donation-amount", "noakhali-donate-now-btn");
handleDonation("write-feni-donation-amount", "feni-donation-amount", "feni-donate-now-btn");
handleDonation("write-quota-donation-amount", "quota-donation-amount", "quota-donate-now-btn");
