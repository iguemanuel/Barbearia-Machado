import { api, endpoints } from './api-config';
import dayjs from "dayjs";

export async function scheduleFetchByDay(date) {
  try {
    const response = await fetch(`${api.baseURL}${endpoints.schedules}`);

    // Verifica se a resposta da API foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();

    // Filtra os agendamentos pela data
    const schedules = data.filter((schedule) =>
      dayjs(date).isSame(schedule.when, "day")
    );

    return schedules;
  } catch (error) {
    console.error(error);
    +alert("Erro ao buscar horários");
    return []; // Retorna um array vazio em caso de erro
  }
}
