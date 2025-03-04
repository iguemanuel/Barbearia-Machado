import { api, endpoints } from './api-config';
import Swal from 'sweetalert2';

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

    Swal.fire({
      title: "Horario agendado com sucesso!",
      icon: "success",
      timer: 1500
    });
  } catch (error) {
    console.error(error);
    alert("Erro ao agendar horário");
  }
}
