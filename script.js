document.querySelectorAll(".filters button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filters button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".gallery figure").forEach(fig => {
      fig.style.display = (filter === "all" || fig.dataset.cat === filter) ? "block" : "none";
    });
  });
});
