import axios from "axios";

const API_BASE = "http://127.0.0.1:8000/api";

export async function getFooter() {
  const response = await axios.get(`${API_BASE}/footers`);
  return response.data;
}
