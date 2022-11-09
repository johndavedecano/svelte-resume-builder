<script>
  import moment from "moment";
  import { store as workHistory } from "./../../stores/workHistory.store";
  $: items = $workHistory.items;
</script>

<div class="d-flex flex-column mt-4">
  <div class="h4 mb-3">Work History</div>
  <div class="d-flex flex-column">
    {#each items as item}
      <div class="d-flex flex-column mb-4">
        <div class="d-flex mb-3">
          <div class="flex-grow-1 fw-bold">
            {item.position} at
            <span class="text-muted">
              {item.company}
            </span>
          </div>
          <div class="fw-medium">
            {moment(item.date_from).format("L")} - {moment(item.date_to).format(
              "L"
            )}
          </div>
        </div>
        <div class="body">
          {item.description}
        </div>
      </div>
    {:else}
      <div class="p-4 text-center text-muted border">
        <div class="body">No work history available</div>
      </div>
    {/each}
  </div>
</div>
