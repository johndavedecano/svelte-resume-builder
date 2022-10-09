import { writable } from "svelte/store";

const createStore = () => {
  const initialState = {
    open: false,
    items: [],
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
  };
};

export const store = createStore();
