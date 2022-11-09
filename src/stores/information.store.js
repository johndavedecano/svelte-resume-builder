import { writable } from "svelte/store";

const createStore = () => {
  const initialState = {
    open: false,
    item: {
      name: "John Dave Reyes",
      mobile_number: "+639204809823",
      email: "info@johnpaulreyes.me",
      headline: "Summary",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ac risus pretium, lobortis odio sit amet, malesuada arcu. Fusce ultrices tincidunt metus, vel imperdiet nisi. Vestibulum nec neque et eros ultricies gravida. ",
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
