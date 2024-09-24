
function handleDonation(donateAmountInputId, donationAmountId, donateBtnId, location, cause) {
  const mainBalanceEl = document.getElementById("my-balance");
  const donationInputEl = document.getElementById(donateAmountInputId);
  const donationAmountEl = document.getElementById(donationAmountId);
  const donateBtn = document.getElementById(donateBtnId);
  
  // Modal elements
  const confirmationModal = document.getElementById("confirmationModal");
  const closeModalBtn = document.getElementById("closeModal");
  const historyList = document.getElementById("history-list");
  
  // Sections
  const allCardSection = document.getElementById("all-card");
  const historySection = document.querySelector(".collapse");

  donateBtn.addEventListener("click", function () {
      // Hide history section and show the all-card section
      historySection.style.display = "none";
      allCardSection.style.display = "block";

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

      // Get current date and time
      const transactionDate = new Date().toLocaleDateString();
      const transactionTime = new Date().toLocaleTimeString();

      // Create a new div for the transaction history
      const historyDiv = document.createElement('div');
      historyDiv.classList.add('border', 'p-4', 'rounded', 'my-2', 'bg-white');

      // Add transaction details inside the div
      historyDiv.innerHTML = `
        <h3 class="font-bold">${inputAmount} Taka Donated for ${cause} at ${location}, Bangladesh</h3>
        <p>Date: ${transactionDate}</p>
        <p>Time: ${transactionTime}</p>
      `;

      // Append the new history div to the history list
      historyList.appendChild(historyDiv);

      // Show the confirmation modal
      confirmationModal.classList.remove("hidden");
  });

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener("click", function () {
      confirmationModal.classList.add("hidden");
  });
}

// Call the handleDonation function for each donation button
handleDonation("write-noakhali-donation-amount", "noakhali-donation-amount", "noakhali-donate-now-btn", "Noakhali", "famine-2024");
handleDonation("write-feni-donation-amount", "feni-donation-amount", "feni-donate-now-btn", "Feni", "flood-2024");
handleDonation("write-quota-donation-amount", "quota-donation-amount", "quota-donate-now-btn", "Quota Movement", "Aid for Injured");

// Functionality to show the history when the history button is clicked
document.getElementById("history-btn").addEventListener("click", function () {
    // Hide the 'all-card' section
    document.getElementById("all-card").style.display = "none";

    // Show the history section
    document.querySelector(".collapse").style.display = "block";
});

// Functionality to show the donation cards when the donation button is clicked
document.getElementById("donation-btn").addEventListener("click", function () {
    // Show the 'all-card' section
    document.getElementById("all-card").style.display = "block";

    // Hide the history section
    document.querySelector(".collapse").style.display = "none";
});


//  Button Model Design

const historyTab =document.getElementById('history-btn')
const donationTab =document.getElementById('donation-btn')
historyTab.addEventListener('click', function(){
   historyTab.classList.add(
      'btn' ,
      'px-10', 
       'h-10',
      'font-bold',
      'rounded-md',
      'bg-[#B4F461]',
      
      
    );
   historyTab.classList.remove("text-gray-500")
    donationTab.classList.remove(
      'btn' ,
      'font-bold',
      'rounded-md',
      'px-10', 
      'h-10',
      'bg-[#B4F461]',
      'text-black-500'
    );
    donationTab.classList.add('text-gray-500');

    document.getElementById('all-card').classList.add("hidden");
    
    
    
    donationTab.addEventListener('click', function(){
      donationTab.classList.add(
        'btn' ,
        'font-bold',
        'rounded-md',
        'bg-[#B4F461]',
        'px-10', 
        'h-10',
      );

      historyTab.classList.remove(
        'btn' ,
        'font-bold',
        'rounded-md',
        'bg-[#B4F461]',
        'px-10', 
        'h-10',
      )
    })

  });