import apiClient from "../client";

export interface HelloResponse {
  name: string;
  email: string;
  age: number;
  address: string;
  phone: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  isActive: boolean;
  createdAt: string | Date;
  updatedAt: string | Date;
}

export default async function getHello() {
  const res = await apiClient.get<HelloResponse>("/hello");
  return res.data;
}
