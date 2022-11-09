<script>
  import moment from "moment";
  import { store as educationStore } from "./../../stores/educations.store";
  $: items = $educationStore.items;
</script>

<div class="d-flex flex-column mt-4">
  <div class="h4 mb-3">Education</div>
  <div class="d-flex flex-column">
    {#each items as item}
      <div class="d-flex flex-column mb-4">
        <div class="d-flex mb-3">
          <div class="flex-grow-1 fw-bold">
            {item.school} -
            <span class="text-muted">
              {moment(item.date).format("L")}
            </span>
          </div>
          <div class="fw-medium">
            {item.course}
          </div>
        </div>
        <div class="body">
          {item.description}
        </div>
      </div>
    {:else}
      <div class="p-4 text-center text-muted border">
        <div class="body">No education available</div>
      </div>
    {/each}
  </div>
</div>
