document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll(".btn");

  let currentInput = "";

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const value = e.target.getAttribute("data-value");

      if (value === "C") {
        currentInput = "";
        display.value = currentInput;
      } else if (value === "=") {
        try {
          // Hesaplamayı gerçekleştirmek için Function constructor'ı kullan
          const result = Function(`return ${currentInput}`)(); // Güvenli hesaplama
          display.value = result;
          currentInput = result.toString(); // Sonuç tekrar girdiye dönüşür
        } catch (error) {
          display.value = "Error"; // Hata durumunda mesaj göster
          currentInput = "";
        }
      } else {
        // Diğer değerleri ekle
        currentInput += value;
        display.value = currentInput;
      }
    });
  });
});
