<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { store } from "./../stores/section.store";
  import { store as awardsStore } from "./../stores/awards.store";
  import { store as certificationsStore } from "./../stores/certifications.store";
  import { store as characterReference } from "./../stores/characterReference.store";
  import { store as educationStore } from "./../stores/educations.store";
  import { store as informationStore } from "./../stores/information.store";
  import { store as skillsStore } from "./../stores/skills.store";
  import { store as workHistoryStore } from "./../stores/workHistory.store";

  const flipDurationMs = 300;

  const toggle = (name) => () => {
    const handlers = {
      Awards: awardsStore.toggle,
      Certifications: certificationsStore.toggle,
      "Character References": characterReference.toggle,
      Education: educationStore.toggle,
      Information: informationStore.toggle,
      Skills: skillsStore.toggle,
      "Work History": workHistoryStore.toggle,
    };
    if (typeof handlers[name] === "function") handlers[name](true);
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
    use:dndzone={{ items: $store.sections, flipDurationMs }}
    on:consider={handleDndConsider}
    on:finalize={handleDndFinalize}
  >
    {#each $store.sections as item (item.id)}
      <li
        animate:flip={{ duration: flipDurationMs }}
        class="list-group-item p-3 d-flex align-items-center"
      >
        <div class="flex-grow-1">
          <i class="fa fa-align-justify me-2" />
          {item.name}
        </div>

        <button class="btn btn-sm" on:click={toggle(item.name)}>
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
