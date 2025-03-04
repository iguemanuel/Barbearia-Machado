import { api, endpoints } from './api-config';
import dayjs from "dayjs";

export async function scheduleFetchByDay(date) {
  try {
    const response = await fetch(`${api.defaults.baseURL}${endpoints.schedules}`);

    // Verifica se a resposta foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.statusText}`);
    }

    const data = await response.json();

    // O PocketBase retorna os registros dentro de um objeto { items: [...] }
    const schedules = data.items.filter((schedule) =>
      dayjs(schedule.when).isSame(dayjs(date), "day")
    );

    return schedules;
  } catch (error) {
    console.error(error);
    alert("Erro ao buscar horários");
    return []; // Retorna um array vazio em caso de erro
  }
}
