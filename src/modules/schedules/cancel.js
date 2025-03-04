import { scheduleCancel } from "../../services/shcedule-cancel"; // Corrigi o nome do arquivo
import { schedulesDays } from "./load";
import swal

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      // Obtém o ID do dataset (garante que seja uma string)
      const { id } = item.dataset;

      // Verifique se o ID existe e é uma string válida
      if (id && typeof id === "string") {
        const confirm = window.confirm("Deseja realmente cancelar o agendamento?");

        if (confirm) {
          // Passa o ID diretamente para o método scheduleCancel
          await scheduleCancel(id);

          // Atualiza a lista de agendamentos
          schedulesDays();
        }
      } else {
        console.error("ID não encontrado ou inválido:", id);
      }
    }
  });
});

