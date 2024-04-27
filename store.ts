import {create} from 'zustand';
import { Store } from './types';
export const store  = create<Store>(set => ({
    isOpen : false,
    isOpenMenu : (option : boolean) => set({isOpen : option })
}))                               



