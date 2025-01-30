import { apiConfig } from "./api-config";

export async function scheduleNew({ id, clientName, when }) {
  try {
    //faz a requisicao para enviar os dados do agendamento para a API
    await fetch(`${apiConfig.baseURL}/schedules`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        clientName,
        when,
      }),
    });

    alert("Horário agendado com sucesso");
  } catch (error) {
    console.error(error);
    alert("Erro ao agendar horário");
  }
}
