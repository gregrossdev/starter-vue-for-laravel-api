import {defineStore} from "pinia";
import axios from "axios";
import {csrfCookie, fetchUser, forgotPassword, login, logout, register, resetPassword} from "../../http/auth-api.js";

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
        async setAccessToken() {
            await csrfCookie();
        },
        async getUser() {
            await this.setAccessToken();
            const data = await fetchUser();
            this.authUser = data.data;
        },
        async handleLogin(user) {
            this.authErrors = [];
            await this.setAccessToken();

            try {
                await login({
                    email: user.email,
                    password: user.password,
                });
                await this.router.push("/profile");
            }
            catch (error) {
                if (error.response.status === 422)
                    this.authErrors = error.response.data.errors;

            }
        },
        async handleRegister(user) {
            this.authErrors = [];
            await this.setAccessToken();
            try {
                await register({
                    name: user.name,
                    email: user.email,
                    password: user.password,
                    password_confirmation: user.password_confirmation,
                });
                await this.router.push("/profile");
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
            await this.router.push("/");
        },
        // async handleForgotPassword(email) {
        //     this.authErrors = [];
        //     await this.setAccessToken();
        //     try {
        //         const response = await forgotPassword({
        //             email: email,
        //         })
        //         this.authStatus = response.data.status;
        //     }
        //     catch (error) {
        //         if (error.response.status === 422) {
        //             this.authErrors = error.response.data.errors;
        //         }
        //     }
        // },
        // async handleResetPassword(resetData) {
        //     this.authErrors = [];
        //     try {
        //         const response = await resetPassword(resetData);
        //         this.authStatus = response.data.status;
        //     }
        //     catch (error) {
        //         if (error.response.status === 422) {
        //             this.authErrors = error.response.data.errors;
        //         }
        //     }
        // },
    },
});
