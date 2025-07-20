import axios from 'axios';

const API_BASE = 'http://localhost:5000/api';

export const getUsers = () => axios.get(`${API_BASE}/users`);
export const addUser = (name: string) => axios.post(`${API_BASE}/users`, { name });
export const claimPoints = (userId: string) => axios.post(`${API_BASE}/claim`, { userId });
export const getLeaderboard = () => axios.get(`${API_BASE}/claim/leaderboard`);
export const getHistory = () => axios.get(`${API_BASE}/claim/history`);
