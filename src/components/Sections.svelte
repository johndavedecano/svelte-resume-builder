<script>
  import { flip } from "svelte/animate";
  import { dndzone } from "svelte-dnd-action";
  import { store } from "./../stores/section.store";

  const flipDurationMs = 300;

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

        <button class="btn btn-sm">
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
