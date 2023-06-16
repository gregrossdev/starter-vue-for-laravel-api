import api from "./api";

export const register = (user) => api.post("/register", user);
export const login = (credentials) => api.post("/login", credentials);
export const forgotPassword = (email) => api.post("/forgot-password", email);
export const resetPassword = (resetData) => api.post("/reset-password", resetData);
export const logout = () => api.post("/logout");


export const getUser = () => api.get("/api/user");
export const csrfCookie = () => api.get("/sanctum/csrf-cookie");
