import {create} from 'zustand';
import { Store,UserStore, UserType} from './types';
export const store  = create<Store>(set => ({
    isOpen : false,
    email : "",
    saveEmail : (email : string) => set({email}),
    isOpenMenu : (option : boolean) => set({isOpen : option })
}))                               
export const userStore = create<UserStore>(set => ({
    user : {
        name : "",
        id : "",
        verified : false,
        email : "",

    },
    setUser : (user : UserType) => set({user}),
}))       


