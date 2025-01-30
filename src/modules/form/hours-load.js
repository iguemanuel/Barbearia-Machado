import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours");

export function HoursLoad({ date, dailySchedules }) {
  hours.innerHTML = "";

  // Horários indisponíveis
  const unavailableHours = dailySchedules.map((schedules) =>
    dayjs(schedules.when).format("H:mm")
  );

  let lastAddedPeriod = null; // Para evitar duplicar títulos

  const opening = openingHours.map((hour) => {
    const [schedulesHour] = hour.split(":");

    const isHourPast = dayjs(date).add(schedulesHour, "hour").isBefore(dayjs());

    const available = !unavailableHours.includes(hour) && !isHourPast;

    return {
      hour,
      available,
    };
  });

  opening.forEach((hourObj) => {
    if (hourObj.hour === "9:00" && lastAddedPeriod !== "Manhã") {
      hourHeaderAdd("Manhã");
      lastAddedPeriod = "Manhã";
    } else if (hourObj.hour === "13:00" && lastAddedPeriod !== "Tarde") {
      hourHeaderAdd("Tarde");
      lastAddedPeriod = "Tarde";
    } else if (hourObj.hour === "18:00" && lastAddedPeriod !== "Noite") {
      hourHeaderAdd("Noite");
      lastAddedPeriod = "Noite";
    }

    // Adicionar horário
    const li = document.createElement("li");
    li.classList.add("hour");
    li.classList.add(hourObj.available ? "hour-available" : "hour-unavailable");
    li.textContent = hourObj.hour;

    hours.append(li);
  });

  hoursClick();
}

function hourHeaderAdd(title) {
  const header = document.createElement("li");
  header.classList.add("hour-period");
  header.textContent = title;

  // Adicionar antes dos horários
  hours.append(header);
}
