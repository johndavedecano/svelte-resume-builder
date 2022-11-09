<script>
  import moment from "moment";
  import { store as certifications } from "./../../stores/certifications.store";
  $: items = $certifications.items;
</script>

<div class="d-flex flex-column mt-4">
  <div class="h4 mb-3">Certifications</div>
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
            {moment(item.issued_at).format("L")} - {moment(
              item.expires_at
            ).format("L")}
          </div>
        </div>
        <div class="body">
          {item.description}
        </div>
      </div>
    {:else}
      <div class="p-4 text-center text-muted border">
        <div class="body">No certifications available</div>
      </div>
    {/each}
  </div>
</div>
