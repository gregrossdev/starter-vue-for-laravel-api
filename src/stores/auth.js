import { defineStore } from "pinia";
import axios from "axios";
import { csrfCookie, forgotPassword, resetPassword, login, register, logout, getUser } from "../http/auth-api";

export const useAuthStore = defineStore("auth", {
    state: () => ({
        authUser: null,
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        user: (state) => state.authUser,
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async getToken() {
            await csrfCookie();
        },
        async fetchUser() {
            await this.getToken();
            const data = await getUser();
            this.authUser = data.data;
        },
        async handleLogin(credentials) {
            this.authErrors = [];
            await this.getToken();
            try {
                await login({
                    email: credentials.email,
                    password: credentials.password,
                });
                // await axios.post("/login", {
                //     email: data.email,
                //     password: data.password,
                // });
                this.router.push("/");
            }
            catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleRegister(user) {
            this.authErrors = [];
            await this.getToken();
            try {
                await register({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation,
                });
                // await axios.post("/register", {
                //     name: data.name,
                //     email: data.email,
                //     password: data.password,
                //     password_confirmation: data.password_confirmation,
                // });
                this.router.push("/");
            }
            catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleLogout() {
            await logout();
            this.authUser = null;
        },
        async handleForgotPassword(email) {
            this.authErrors = [];
            this.getToken();
            try {
                const response = await forgotPassword({
                    email: email,
                });
                // const response = await axios.post("/forgot-password", {
                //     email: email,
                // });
                this.authStatus = response.data.status;
            }
            catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
        async handleResetPassword(resetData) {
            this.authErrors = [];
            try {
                const response = await resetPassword(resetData);
                // const response = await axios.post("/reset-password", resetData);
                this.authStatus = response.data.status;
            }
            catch (error) {
                if (error.response.status === 422) {
                    this.authErrors = error.response.data.errors;
                }
            }
        },
    },
});
