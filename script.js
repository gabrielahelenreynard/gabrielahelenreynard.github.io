const WHATSAPP_NUMBER = "5512982741774";
const DEFAULT_TEXT = "Olá! Gostaria de agendar uma consulta.";

// Atualiza automaticamente o ano no rodapé.
document.getElementById("current-year").textContent = new Date().getFullYear();

// Monta e abre uma mensagem personalizada no WhatsApp sem backend.
const form = document.getElementById("whatsapp-form");
if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();

    if (!nome || !telefone || !mensagem) {
      form.reportValidity();
      return;
    }

    const text = `${DEFAULT_TEXT}\n\nNome: ${nome}\nTelefone: ${telefone}\nMensagem: ${mensagem}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank", "noopener,noreferrer");
  });
}
