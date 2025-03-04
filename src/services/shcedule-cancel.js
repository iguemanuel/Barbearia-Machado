import { api, endpoints } from './api-config';
import axios from 'axios';

export async function scheduleCancel(id) {
  try {
    // A URL já está com o id como string
    const url = `${api.defaults.baseURL}api/collections/schedules/records/${id}`;
    console.log("Tentando deletar com URL:", url);

    const response = await axios.delete(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log('Agendamento deletado com sucesso:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar agendamento:', error.response?.data || error.message);
    throw error;
  }
}


