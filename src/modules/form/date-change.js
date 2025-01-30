import { schedulesDays } from "../schedules/load.js";

const selectedDate = document.getElementById("date");

selectedDate.onchange = () => schedulesDays();
