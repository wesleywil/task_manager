import { writable } from "svelte/store";

export interface Utils {
  hideForm: boolean;
  projectId: number;
}

const initStore = () => {
  const initialCounter: Utils = {
    hideForm: true,
    projectId: 0,
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
    selectProjectId: (id: number) => {
      update((state) => ({
        ...state,
        projectId: id,
      }));
    },
  };
};

export const utils = initStore();
