import { writable } from "svelte/store";

const createStore = () => {
  const initialState = {
    sections: [
      {
        id: 1,
        name: "Information",
        visible: true,
      },
      {
        id: 2,
        name: "Education",
        visible: true,
      },
      {
        id: 3,
        name: "Work History",
        visible: true,
      },
      {
        id: 4,
        name: "Skills",
        visible: true,
      },
      {
        id: 5,
        name: "Certifications",
        visible: true,
      },
      {
        id: 6,
        name: "Awards",
        visible: true,
      },
      {
        id: 7,
        name: "Character References",
        visible: true,
      },
    ],
    active: null,
  };

  const { subscribe, set, update } = writable({ ...initialState });

  return {
    set,
    subscribe,
    reset: () => set(initialState),
    update,
    setSections(sections) {
      return update((v) => ({ ...v, sections }));
    },
    setActive(active) {
      return update((v) => ({ ...v, active }));
    },
  };
};

export const store = createStore();
