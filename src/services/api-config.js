import axios from "axios";

const api = axios.create({
  baseURL: "http://barbearia-machado.sv1.igoremanuel.site/",
});

const endpoints = { 
  schedules: "/api/collections/schedules/records"
}

export default { api, endpoints };
