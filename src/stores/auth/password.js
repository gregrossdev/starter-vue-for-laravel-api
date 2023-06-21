import {defineStore} from "pinia";
import {forgotPassword, resetPassword} from "@/http/auth-api.js";
import {useAuthStore} from "@/stores/auth/auth.js";
const authStore = useAuthStore();

export const usePasswordStore = defineStore("password", {
    state: () => ({
        authErrors: [],
        authStatus: null,
    }),
    getters: {
        errors: (state) => state.authErrors,
        status: (state) => state.authStatus,
    },
    actions: {
        async handleForgotPassword(email) {
            this.authErrors = [];
            await authStore.setAccessToken();
            try {
                const response = await forgotPassword({
                    email: email,
                })
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
