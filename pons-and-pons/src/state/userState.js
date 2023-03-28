import { create } from 'zustand';
import { persist } from 'zustand/middleware';

let store = set => ({
    userState: { email: '', token: '', fullName: '' },

    setEmail: (email) => set(state => ({ userState: { ...state.userState, email: email } })),
    setToken: (token) => set(state => ({ userState: { ...state.userState, token: token } })),
    setFullName: (fullName) => set(state => ({userState: {...state.userState, fullName: fullName}})),
    resetUserState: () => set({ userState: { email: '', token: '' } })
});

store = persist(store, { name: 'user' });
export const useUserStore = create(store);