<script>
  import moment from "moment";
  import { store as characterReference } from "./../../stores/characterReference.store";
  $: items = $characterReference.items;
</script>

<div class="d-flex flex-column mt-4">
  <div class="h4 mb-3">Character Reference</div>
  <div class="d-flex flex-column">
    {#each items as item}
      <div class="d-flex flex-column mb-4">
        <div class="d-flex mb-2">
          <div class="flex-grow-1 fw-bold">
            {item.name} - <span class="text-muted">{item.contact}</span>
          </div>
        </div>
        <div class="body">
          {item.position} at {item.company}
        </div>
      </div>
    {:else}
      <div class="p-4 text-center text-muted border">
        <div class="body">No items available</div>
      </div>
    {/each}
  </div>
</div>
