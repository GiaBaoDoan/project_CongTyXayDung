import { create } from "zustand";
import { Store } from "./types";
import { instance } from "./config";
export const store = create<Store>((set) => ({
  isOpen: false,
  isOpenMenu: (option: boolean) => set({ isOpen: option }),
}));

interface IUserState {
  user: any;
  loading: boolean;
  setUser: () => Promise<void>;
}

export const userState = create<IUserState>((set) => ({
  user: null,
  loading: true,
  setUser: async () => {
    const res = await instance.get("/account/");

    console.log("Fetch", res.data);
    if (res.data.code === 200) {
      set({ user: res.data.data });
    }
    set({ loading: false });
  },
}));
