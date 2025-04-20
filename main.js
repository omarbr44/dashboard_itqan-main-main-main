
// * Tab Selector in accounting-system for select content 
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".tab-button");
  const contents = document.querySelectorAll(".tab-content");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) =>
        btn.classList.remove("activeTapSelector")
      );
      contents.forEach((content) => content.classList.add("hidden"));
      const tabId = button.getAttribute("data-tab");
      document.getElementById(tabId).classList.remove("hidden");
      button.classList.add("activeTapSelector")
    });
  });
});
