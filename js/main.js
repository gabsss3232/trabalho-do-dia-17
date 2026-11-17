// Fecha o menu mobile depois que um link é selecionado.
document.querySelectorAll(".navbar-nav .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const menu = document.querySelector("#menu");
    if (menu.classList.contains("show")) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});

// Evita que links de projeto ainda não configurados levem a uma página vazia.
document.querySelectorAll('.project-link[href="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    alert("Adicione aqui o link do repositório deste projeto no GitHub.");
  });
});
