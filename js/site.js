// Componentes compartilhados do portal HANDAYA.
// O caminho relativo permite publicar o projeto em um repositório de projeto no GitHub Pages.
const header = `
<header class="site-header">
  <div class="container nav-wrap">
    <a class="brand" href="index.html" aria-label="HANDAYA - página inicial">
      <span class="brand-mark">AH</span><span class="brand-name">HANDAYA<small>PORTAL ACADÊMICO</small></span>
    </a>
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false"><span></span><span></span><span></span></button>
    <nav class="main-nav" aria-label="Navegação principal">
      <a href="index.html">Início</a><a href="disciplinas.html">Disciplinas</a>
      <a href="publicacoes.html">Publicações</a><a href="computacao.html">Computação</a>
      <a href="recursos.html">Recursos</a><a href="sobre.html">Sobre</a>
    </nav>
  </div>
</header>`;

const footer = `
<footer class="site-footer"><div class="container footer-inner">
  <div><a class="footer-brand" href="index.html">HANDAYA</a><p>Matemática · Computação · Educação</p></div>
  <div class="footer-note">Portal acadêmico pessoal<br>© <span id="year"></span> HANDAYA</div>
</div></footer>`;

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("site-header").innerHTML = header;
  document.getElementById("site-footer").innerHTML = footer;
  document.getElementById("year").textContent = new Date().getFullYear();

  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("is-open", !expanded);
  });
});
