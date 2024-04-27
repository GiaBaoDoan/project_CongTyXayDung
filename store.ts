import {create} from 'zustand';
import { Store,UserStore, UserType} from './types';
export const store  = create<Store>(set => ({
    isOpen : false,
    user : {},
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


