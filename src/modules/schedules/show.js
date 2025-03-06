import dayjs from "dayjs";
import Swal from "sweetalert2";

const periodMorning = document.getElementById("period-morning");
const periodAfternoon = document.getElementById("period-afternoon");
const periodNight = document.getElementById("period-night");

export function SchedulesShow({ dailySchedules }) {
  try {
    // Limpa a lista de horários
    periodMorning.innerHTML = "";
    periodAfternoon.innerHTML = "";
    periodNight.innerHTML = "";

    // Verifica se dailySchedules é um array e não está vazio
    if (!Array.isArray(dailySchedules) || dailySchedules.length === 0) {
      Swal.fire({
        title: "Nenhum horário agendado",
        text: "Clique em um horário disponível para agendar",
        icon: "info",
        timer: 3000,
      })
      return;
    }

    // Renderiza por período
    dailySchedules.forEach((schedule) => {
      const item = document.createElement("li");
      const time = document.createElement("strong");
      const name = document.createElement("span");

      item.setAttribute("data-id", schedule.id);

      // Verifica se schedule.time (ou schedule.when) existe e está no formato correto
      const scheduleTime = schedule.time || schedule.when;
      if (!scheduleTime) {
        console.error("Horário do agendamento não encontrado:", schedule);
        return;
      }

      time.textContent = dayjs(scheduleTime).format("HH:mm");
      name.textContent = schedule.clientName || schedule.name; // Use o campo correto

      const cancelIcon = document.createElement("img");
      cancelIcon.classList.add("cancel-icon");
      cancelIcon.src = "./src/assets/cancel.svg"; // Caminho correto para o ícone
      cancelIcon.setAttribute("alt", "Cancelar agendamento");

      item.append(time, name, cancelIcon);

      const hour = dayjs(scheduleTime).hour();

      if (hour < 12) {
        periodMorning.append(item);
      } else if (hour < 18) {
        periodAfternoon.append(item);
      } else {
        periodNight.append(item);
      }
    });
  } catch (error) {
    console.error(error);
    Swal.fire({
      title: "Erro ao listar horários",
      text: "Tente novamente mais tarde",
      icon: "error",
      timer: 3000,
    })
  }
}
