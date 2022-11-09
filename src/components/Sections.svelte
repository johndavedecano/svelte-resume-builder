<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { store } from "./../stores/section.store";
  import { store as informationStore } from "./../stores/information.store";
  import { store as educationStore } from "./../stores/educations.store";
  import { store as workHistoryStore } from "./../stores/workHistory.store";
  import { store as skillsStore } from "./../stores/skills.store";
  import { store as certificationsStore } from "./../stores/certifications.store";
  import { store as awardsStore } from "./../stores/awards.store";
  import { store as characterReference } from "./../stores/characterReference.store";

  const FLIP_DURATION_MS = 300;

  const toggle = (id) => () => {
    const handlers = {
      1: informationStore.toggle,
      2: educationStore.toggle,
      3: workHistoryStore.toggle,
      4: skillsStore.toggle,
      5: certificationsStore.toggle,
      6: awardsStore.toggle,
      7: characterReference.toggle,
    };
    if (typeof handlers[id] === "function") handlers[id](true);
  };

  const handleDndConsider = (e) => store.setSections(e.detail.items);

  const handleDndFinalize = (e) => store.setSections(e.detail.items);

  const toggleVisible = (id) => {
    store.setSections(
      $store.sections.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            visible: !item.visible,
          };
        }
        return item;
      })
    );
  };
</script>

<div class="sections">
  <ul
    class="list-group list-group-flush"
    use:dndzone={{ items: $store.sections, flipDurationMs: FLIP_DURATION_MS }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each $store.sections as item (item.id)}
      <li
        animate:flip={{ duration: FLIP_DURATION_MS }}
        class="list-group-item p-3 d-flex align-items-center"
      >
        <div class="flex-grow-1">
          <i class="fa fa-align-justify me-2" />
          {item.name}
        </div>

        <button class="btn btn-sm" on:click={toggle(item.id)}>
          <i class="fa fa-cog" />
        </button>

        <button class="btn btn-sm" on:click={() => toggleVisible(item.id)}>
          <i
            class="fa"
            class:fa-times={item.visible}
            class:fa-check={!item.visible}
          />
        </button>
      </li>
    {/each}
  </ul>
</div>
