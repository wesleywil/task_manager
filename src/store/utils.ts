import { writable } from "svelte/store";


export interface Utils{
    hideForm:boolean;
}

const initStore = ()=>{
    const initialCounter:Utils = {
        hideForm:true,
    }

    const { subscribe, set, update } = writable(initialCounter);

    return{
        subscribe,
        switchHideForm:()=>update(({hideForm, ...rest})=>({
            
            ...rest,
            hideForm:!hideForm
        })),
    }
};

export const utils = initStore();