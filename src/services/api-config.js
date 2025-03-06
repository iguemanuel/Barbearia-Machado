import axios from "axios";

const api = axios.create({
  baseURL: "https://barbearia-machado.sv1.igoremanuel.site/",
});

const endpoints = { 
  schedules: "api/collections/schedules/records"
};

export { api, endpoints };
