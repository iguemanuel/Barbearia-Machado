import { api, endpoints } from './api-config';

export async function scheduleNew({ clientName, when }) {
  try {
    const response = await fetch(`${api.defaults.baseURL}${endpoints.schedules}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        clientName,
        when,
      }),
    });

    if (!response.ok) {
      throw new Error("Erro ao criar o agendamento");
    }

    alert("Horário agendado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao agendar horário");
  }
}
