import { create } from "zustand";
import { Store } from "./types";
export const store = create<Store>((set) => ({
  isOpen: false,
  isOpenMenu: (option: boolean) => set({ isOpen: option }),
}));

interface IUserState {
  user: any;
  setUser: (data: any) => void;
}

export const userState = create<IUserState>((set) => ({
  user: null,
  setUser: (data: any) => set({ user: data }),
}));
