const datasDisponiveis = ['2025-05-15', '2025-05-17', '2025-05-20', '2025-05-22'];
const campoData = document.getElementById('data');

campoData.addEventListener('change', () => {
  if (datasDisponiveis.includes(campoData.value)) {
    campoData.classList.add('disponivel');
    campoData.classList.remove('indisponivel');
  } else {
    campoData.classList.add('indisponivel');
    campoData.classList.remove('disponivel');
  }
});

document.getElementById("consulta-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const especialidade = document.getElementById("especialidade").options[document.getElementById("especialidade").selectedIndex].text;
  const mensagem = document.getElementById("mensagem").value;

  const dataInicio = new Date(data + "T09:00:00");
  const dataFim = new Date(data + "T10:00:00");

  const formatarData = d => d.toISOString().replace(/[-:]|\.\d{3}/g, "");

  const link = `https://www.google.com/calendar/render?action=TEMPLATE&text=Consulta com ${especialidade}&dates=${formatarData(dataInicio)}/${formatarData(dataFim)}&details=${encodeURIComponent(mensagem)}&location=Clínica AMANDA E ÍTALO ODONTOLOGIA ESPECIALIZADA&sf=true&output=xml`;

  const calendarLink = document.getElementById("google-calendar-link");
  calendarLink.href = link;
  calendarLink.style.display = "block";
  calendarLink.scrollIntoView({ behavior: "smooth" });

  // Exibir a mensagem de agendamento realizado
  const mensagemAgendamento = document.getElementById("mensagem-agendamento");
  mensagemAgendamento.style.display = "block";  // Torna a mensagem visível
});
