import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day";
import { HoursLoad } from "../form/hours-load";
import { SchedulesShow } from "./show";

const selectedDate = document.getElementById("date");

export async function schedulesDays() {
  // Obtém a data do input
  const date = selectedDate.value;

  // Verifica se a data foi selecionada
  if (!date) {
    alert("Selecione uma data válida.");
    return;
  }

  // Busca os horários disponíveis na API
  const dailySchedules = await scheduleFetchByDay(date); // Passa `date` diretamente

  // Renderiza os agendamentos do dia
  SchedulesShow({ dailySchedules });

  // Renderiza as horas disponíveis
  HoursLoad({ date, dailySchedules });
}
