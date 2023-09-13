import env from "dotenv";
import axios, { AxiosInstance } from "axios";

env.config();

const API: AxiosInstance = axios.create({ baseURL: process.env.BASE_URL });

export const fetchCafesByLocation = (searchQuery: { location: string }) =>
  API.get(`/cafe/${searchQuery.location}`);
