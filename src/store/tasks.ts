import { writable } from "svelte/store";
import type { Task } from "../utils/interfaces";
import { Task_Status } from "../utils/interfaces";

export interface TaskState{
    taskStatusSelected:Task_Status
}

const initStore = () =>{
    const initialState:TaskState = {
        taskStatusSelected:Task_Status.TO_DO,
    };

    const { subscribe, set, update } = writable(initialState);

    return{
        subscribe,
        setTaskStatus:(task_status:Task_Status)=>{
            update(({taskStatusSelected, ...rest})=>{
                return{
                    ...rest,
                    taskStatusSelected:task_status
                }
            })
        }
    }
}

export const tasks = initStore();