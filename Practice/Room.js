document.getElementById("costEstimatorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const checkInDate = document.getElementById("checkInDate").value;
  const numNights = parseInt(document.getElementById("numNights").value);
  const roomType = document.querySelector('input[name="roomType"]:checked').value;
  const numAdults = parseInt(document.getElementById("numAdults").value);
  const numChildren = parseInt(document.getElementById("numChildren").value);
  const discount = document.querySelector('input[name="discount"]:checked').value;

  const roomRate = getRoomRate(checkInDate, roomType);
  const originalRoomCost = roomRate * numNights;
  let discountAmount = 0;
  let discountedRoomCost = originalRoomCost;

  if (discount === "aaa") {
    discountAmount = originalRoomCost * 0.1; // 10% discount
    discountedRoomCost = originalRoomCost - discountAmount;
  } else if (discount === "military") {
    discountAmount = originalRoomCost * 0.2; // 20% discount
    discountedRoomCost = originalRoomCost - discountAmount;
  }

  const tax = discountedRoomCost * 0.12; // 12% tax
  const totalCost = discountedRoomCost + tax;

  const resultDiv = document.getElementById("resultDiv");
  resultDiv.innerHTML = `
    <h2>Estimated Stay Cost Summary</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Original Room Cost: $${originalRoomCost.toFixed(2)}</p>
    <p>Discount: $${discountAmount.toFixed(2)}</p>
    <p>Discounted Room Cost: $${discountedRoomCost.toFixed(2)}</p>
    <p>Tax: $${tax.toFixed(2)}</p>
    <p><strong>Total Cost of Stay: $${totalCost.toFixed(2)}</strong></p>
  `;
});

// Function to get room rate based on check-in date and room type (static data for demonstration)
function getRoomRate(checkInDate, roomType) {
  // Simplified logic, replace with actual dynamic data retrieval and logic
  return 150; // Default rate for demonstration
}