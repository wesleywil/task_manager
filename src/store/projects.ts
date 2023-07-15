import { writable } from "svelte/store";
import type { Project } from "../utils/interfaces";

export interface ProjectState{
    Allprojects:Project[],
    projects:Project[],
}

const initStore = ()=>{
    const initialState:ProjectState = {
        Allprojects: [] as Project[],
        projects: [] as Project[],
    };

    const { subscribe, set, update } = writable(initialState);

    return{
        subscribe,
        setProjects:(payload:Project[])=> update(({Allprojects, ...rest})=>{
            return{
                ...rest,
                Allprojects:payload,
                projects:payload
            }
            
        }),
        filterProject: (payload: string) =>
        update(({ projects, ...rest }) => {
          const filter = rest.Allprojects.filter((project) =>
            project.name.toLowerCase().includes(payload.toLowerCase())
          );
          return {
            ...rest,
            projects:filter,
          };
        }),
        filterProject2:(payload:string)=>
        update(({projects, ...rest})=>{
            if(payload === undefined || payload === null || payload === ""){
                return {
                    ...rest,
                    projects:rest.Allprojects
                }
            }else{
                let filteredProjects = rest.Allprojects.filter((item)=>{
                    return item.name.toLowerCase().includes(payload.toLowerCase());
                });
                return{
                    ...rest,
                    projects:filteredProjects
                }
            }
        })
    }
};

export const projects = initStore();

