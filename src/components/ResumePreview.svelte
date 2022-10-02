<script>
  import { store } from "./../stores/section.store";
</script>

<div class="resume-wrapper">
  <div class="resume-inner">
    {#each $store.sections as item (item.id)}
      {#if item.visible}
        <div class="section">
          <div class="h4">{item.name}</div>
        </div>
      {/if}
    {/each}
  </div>
</div>

<style>
  .resume-wrapper {
    background-color: white;
    min-height: 297mm;
    min-width: 210mm;
  }
  .resume-inner {
    padding: 50px;
  }
</style>
