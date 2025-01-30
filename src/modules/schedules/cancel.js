import { scheduleCancel } from "../../services/shcedule-cancel"; // Corrigi o nome do arquivo
import { schedulesDays } from "./load";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      // Obtém o ID do dataset e converte para número (se necessário)
      const { id } = item.dataset;

      if (id) {
        const confirm = window.confirm(
          "Deseja realmente cancelar o agendamento?"
        );

        if (confirm) {
          // Converte o ID para número (se o backend espera um número)
          const idNumber = Number(id);

          // Chama a função para cancelar o agendamento
          await scheduleCancel({ id: idNumber });

          // Atualiza a lista de agendamentos
          schedulesDays();
        }
      }
    }
  });
});
