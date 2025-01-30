import { apiConfig } from "./api-config";

export async function scheduleCancel({ id }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/schedules/${id}`, {
      method: "DELETE",
    });

    // Verifica se a requisição foi bem-sucedida
    if (!response.ok) {
      throw new Error(`Erro ao cancelar agendamento: ${response.statusText}`);
    }

    console.log("Agendamento cancelado com sucesso!");
  } catch (error) {
    console.error(error);
    alert("Erro ao cancelar o agendamento.");
  }
}
