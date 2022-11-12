<script>
  import { store } from "./../stores/section.store";
  import Information from "./previews/Information.svelte";
  import Educations from "./previews/Educations.svelte";
  import WorkHistory from "./previews/WorkHistory.svelte";
  import Skills from "./previews/Skills.svelte";
  import Certifications from "./previews/Certifications.svelte";
  import Awards from "./previews/Awards.svelte";
  import CharacterReference from "./previews/CharacterReference.svelte";

  const components = {
    1: Information,
    2: Educations,
    3: WorkHistory,
    4: Skills,
    5: Certifications,
    6: Awards,
    7: CharacterReference,
  };
</script>

<div class="resume-wrapper">
  <div class="resume-inner">
    {#each $store.sections as item (item.id)}
      {#if item.visible}
        <div class="section">
          <svelte:component this={components[item.id]} />
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
    max-width: 210mm;
  }
  .resume-inner {
    padding: 50px;
  }
</style>
