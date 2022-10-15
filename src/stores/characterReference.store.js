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
    updateItem(item) {
      return update((v) => ({
        ...v,
        items: v.items.map((i) => {
          return i.id === item.id ? item : i;
        }),
      }));
    },
    addItem(item) {
      return update((v) => ({
        ...v,
        items: v.items.concat(item),
      }));
    },
    saveItems(items) {
      return update((v) => ({
        ...v,
        items,
      }));
    },
    deleteItem(id) {
      return update((v) => ({
        ...v,
        items: v.items.filter((i) => i.id !== id),
      }));
    },
  };
};

export const store = createStore();
