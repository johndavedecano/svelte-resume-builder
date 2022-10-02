import { writable } from "svelte/store";

const createStore = () => {
  const initialState = {
    filename: "",
    name: "Louis Madrigal",
    email: "lipsum@gmail.com",
    phone: "+639204809825",
    headline: "",
    education: [],
    skills: [],
    workhistory: [],
  };

  const { subscribe, set, update } = writable({ ...initialState });

  return {
    set,
    subscribe,
    reset: () => set(initialState),
    update: (values) => {
      // @ts-ignore
      return update((v) => ({ ...v, ...values }));
    },
  };
};

export const store = createStore();
