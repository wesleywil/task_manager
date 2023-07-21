import { writable } from "svelte/store";

export interface Utils {
  hideForm: boolean;
  hideTaskForm: boolean;
  hideCategoryForm: boolean;
  hideTagMenu:boolean;
  hideDeletePanel: boolean;
  hideDeleteTaskPanel: boolean;
  projectId: number;
  taskId: number;
}

const initStore = () => {
  const initialCounter: Utils = {
    hideForm: true,
    hideTaskForm: true,
    hideCategoryForm: true,
    hideTagMenu:true,
    hideDeletePanel: true,
    hideDeleteTaskPanel: true,
    projectId: 0,
    taskId: 0,
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
      switchCategoryForm: () =>
      update(({ hideCategoryForm, ...rest }) => ({
        ...rest,
        hideCategoryForm: !hideCategoryForm,
      })),
      switchTagMenu: () =>
      update(({ hideTagMenu, ...rest }) => ({
        ...rest,
        hideTagMenu: !hideTagMenu,
      })),
    switchHideDeletePanel: () =>
      update(({ hideDeletePanel, ...rest }) => ({
        ...rest,
        projectId: 0,
        hideDeletePanel: !hideDeletePanel,
      })),
    switchHideDeleteTaskPanel: () =>
      update(({ hideDeleteTaskPanel, ...rest }) => ({
        ...rest,
        taskId: 0,
        hideDeleteTaskPanel: !hideDeleteTaskPanel,
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
