// src/api/user.ts
import api from './axios';

export async function getUsers() {
  const response = await api.get('/users');
  return response.data;
}

export async function createUser(userData: { name: string }) {
  const response = await api.post('/users', userData);
  return response.data;
}
