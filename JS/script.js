
  const shareBtn = document.getElementById("shareBtn");
  const sharePopup = document.getElementById("sharePopup");

  shareBtn.addEventListener("click", () => {
    sharePopup.classList.toggle("hidden");
  });

  // Fechar se clicar fora
  window.addEventListener("click", (e) => {
    if (!shareBtn.contains(e.target) && !sharePopup.contains(e.target)) {
      sharePopup.classList.add("hidden");
    }
  });

