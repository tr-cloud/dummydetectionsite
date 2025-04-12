document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("fraudForm");
    const result = document.getElementById("result");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
  
        const amount = parseFloat(document.getElementById("amount").value);
        const location = document.getElementById("location").value.toLowerCase();
        const device = document.getElementById("device").value.toLowerCase();
  
        // Dummy check logic
        if (amount > 10000 || location !== "india" || device.includes("unknown")) {
          result.innerHTML = `<p style="color: red; font-weight: bold;">⚠️ Fraudulent Transaction Detected!</p>`;
        } else {
          result.innerHTML = `<p style="color: green; font-weight: bold;">✅ Transaction Looks Safe</p>`;
        }
      });
    }
  });
  