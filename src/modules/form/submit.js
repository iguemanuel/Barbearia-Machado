import dayjs from "dayjs";
import { scheduleNew } from "../../services/schedule-new.js";
import { schedulesDays } from "../schedules/load.js";

const form = document.querySelector("form");
const selectedDate = document.getElementById("date");
const inputToday = dayjs().format("YYYY-MM-DD");

selectedDate.value = inputToday;

selectedDate.min = inputToday;

form.onsubmit = async (event) => {
  event.preventDefault();

  try {
    // Recuperar o nome do cliente no momento da submissão
    const clientName = document.getElementById("client");

    if (!clientName.value.trim()) {
      throw new Error("Informe o nome do cliente");
    }

    const hourSelected = document.querySelector(".hour-selected");

    if (!hourSelected) {
      throw new Error("Selecione um horário");
    }

    const [hour] = hourSelected.textContent.split(":");

    const when = dayjs(selectedDate.value).add(hour, "hour");

    const id = new Date().getTime().toString();

    await scheduleNew({
      id,
      clientName: clientName.value.trim(),
      when,
    });

    await schedulesDays();

    // Limpar campo de nome corretamente
    clientName.value = "";
  } catch (error) {
    console.log(error);
  }
};
