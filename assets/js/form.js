export function initBudgetForm() {
  const form = document.getElementById("budget-form");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();

    const phone = document.getElementById("phone").value.trim();

    const email = document.getElementById("email").value.trim();

    const service = document.getElementById("service").value;

    const quantity = document.getElementById("quantity").value;

    const location = document.getElementById("location").value.trim();

    const message = document.getElementById("message").value.trim();

    // VALIDAÇÕES

    if (name.length < 3) {
      alert("Digite um nome válido.");

      return;
    }

    if (phone.length < 10) {
      alert("Digite um telefone válido.");

      return;
    }

    if (!email.includes("@")) {
      alert("Digite um e-mail válido.");

      return;
    }

    if (!service) {
      alert("Selecione um serviço.");

      return;
    }

    // TEXTO WHATSAPP

    const text = `
*NOVO ORÇAMENTO - CLIMATECH*

👤 Nome: ${name}

📞 Telefone: ${phone}

📧 E-mail: ${email}

🛠️ Serviço: ${service}

❄️ Quantidade: ${quantity}

📍 Localização: ${location}

📝 Descrição:
${message}
`;

    // BOTÃO LOADING

    const button = form.querySelector("button");

    button.innerText = "Enviando...";

    button.disabled = true;

    const whatsappNumber = "5565992832422";

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      window.open(url, "_blank");

      button.innerText = "Solicitar orçamento";

      button.disabled = false;

      form.reset();
    }, 1000);
  });
}
