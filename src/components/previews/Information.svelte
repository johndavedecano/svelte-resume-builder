<script>
  import { store as informationStore } from "./../../stores/information.store";

  $: name = $informationStore.item.name;
  $: email = $informationStore.item.email;
  $: mobileNumber = $informationStore.item.mobile_number;
  $: headline = $informationStore.item.headline;
  $: description = $informationStore.item.description;

  const lipsum = "";
</script>

<div class="d-flex flex-column">
  <div class="h3">
    {name}
  </div>
  <div class="text-muted small">
    {email}
  </div>
  <div class="text-muted small mb-4">
    {mobileNumber}
  </div>
  <div class="h4">{headline}</div>
  <div class="body">
    {description}
  </div>
</div>
