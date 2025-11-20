import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// GET FOOTER
export const getFooter = () => api.get("/footers");

// GET HEADER
export const getHeader = () => api.get("/headers");
