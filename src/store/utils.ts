import { writable } from "svelte/store";

export interface Utils {
  hideForm: boolean;
  hideDeletePanel:boolean;
  projectId: number;
}

const initStore = () => {
  const initialCounter: Utils = {
    hideForm: true,
    hideDeletePanel:true,
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
  };
};

export const utils = initStore();
