import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
});

export const getComicByID = async (params: { id: string }) => {
  const { id } = params;
  const apiResp = await http.post(`/comic/${id}`);
  const data = apiResp.data;
  return data;
};
