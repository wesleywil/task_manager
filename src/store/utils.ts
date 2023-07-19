import { writable } from "svelte/store";

export interface Utils {
  hideForm: boolean;
  hideTaskForm:boolean;
  hideDeletePanel:boolean;
  projectId: number;
  taskId:number;
}

const initStore = () => {
  const initialCounter: Utils = {
    hideForm: true,
    hideTaskForm:true,
    hideDeletePanel:true,
    projectId: 0,
    taskId:0,
  };

  const { subscribe, set, update } = writable(initialCounter);

  return {
    subscribe,
    switchHideForm: () =>
      update(({ hideForm, ...rest }) => ({
        ...rest,
        projectId: 0,
        hideForm: !hideForm,
      })),
      switchTaskForm: () =>
      update(({ hideTaskForm, ...rest }) => ({
        ...rest,
        hideTaskForm: !hideTaskForm,
      })),
      switchHideDeletePanel: () =>
      update(({ hideDeletePanel, ...rest }) => ({
        ...rest,
        projectId: 0,
        hideDeletePanel: !hideDeletePanel,
      })),
    selectProjectId: (id: number) => {
      update((state) => ({
        ...state,
        projectId: id,
      }));
    },
    selectTaskId: (id: number) => {
      update((state) => ({
        ...state,
        taskId: id,
      }));
    },
  };
};

export const utils = initStore();
