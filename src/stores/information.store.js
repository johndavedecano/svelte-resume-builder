import { writable } from "svelte/store";

const createStore = () => {
  const initialState = {
    open: false,
    item: {
      name: "",
      mobile_number: "",
      email: "",
      description: "",
    },
  };

  const { subscribe, set, update } = writable({ ...initialState });

  return {
    set,
    subscribe,
    reset: () => set(initialState),
    update,
    toggle(open = false) {
      return update((v) => ({ ...v, open }));
    },
    saveChanges(item) {
      return update((v) => ({
        ...v,
        item,
      }));
    },
  };
};

export const store = createStore();
