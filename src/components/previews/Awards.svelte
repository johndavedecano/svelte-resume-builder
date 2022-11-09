<script>
    import moment from "moment";
    import { store as awards } from "./../../stores/awards.store";
    $: items = $awards.items;
  </script>
  
  <div class="d-flex flex-column mt-4">
    <div class="h4 mb-3">{$awards.name}</div>
    <div class="d-flex flex-column">
      {#each items as item}
        <div class="d-flex flex-column mb-4">
          <div class="d-flex mb-3">
            <div class="flex-grow-1 fw-bold">
              {item.name}
              <span class="text-muted">
                {item.company}
              </span>
            </div>
            <div class="fw-medium">
              {moment(item.date).format("L")}
            </div>
          </div>
          <div class="body">
            {item.description}
          </div>
        </div>
      {:else}
        <div class="p-4 text-center text-muted border">
          <div class="body">No awards available</div>
        </div>
      {/each}
    </div>
  </div>
  