import { scheduleCancel } from "../../services/shcedule-cancel"; // Corrigi o nome do arquivo
import { schedulesDays } from "./load";
import Swal from "sweetalert2";

const periods = document.querySelectorAll(".period");

periods.forEach((period) => {
  period.addEventListener("click", async (event) => {
    if (event.target.classList.contains("cancel-icon")) {
      const item = event.target.closest("li");

      // Obtém o ID do dataset (garante que seja uma string)
      const { id } = item.dataset;

      // Verifique se o ID existe e é uma string válida
      if (id && typeof id === "string") {
        // Aguarda a resposta do Swal
        const result = await Swal.fire({
          title: "Tem certeza que deseja cancelar o horario?",
          text: "Você não poderá reverter isso",
          icon: "question",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Sim, quero deletar!",
          cancelButtonText: "Cancelar",
        });

        // Agora a verificação funciona corretamente
        if (result.isConfirmed) {
          await scheduleCancel(id); // Cancela o agendamento
          await Swal.fire({
            title: "Deletado!",
            text: "Agendamento cancelado com sucesso",
            icon: "success",
            timer: 1500,
          });

          schedulesDays(); // Atualiza a lista de agendamentos
        }
      } else {
        console.error("ID não encontrado ou inválido:", id);
      }
    }
  });
});
