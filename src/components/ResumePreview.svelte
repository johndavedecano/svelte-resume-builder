<script>
  import { store } from "./../stores/section.store";
  import Information from "./previews/Information.svelte";
  import Awards from "./previews/Awards.svelte";
  import Certifications from "./previews/Certifications.svelte";
  import CharacterReference from "./previews/CharacterReference.svelte";
  import Educations from "./previews/Educations.svelte";
  import Skills from "./previews/Skills.svelte";
  import WorkHistory from "./previews/WorkHistory.svelte";

  const components = {
    Awards: Awards,
    Certifications: Certifications,
    "Character References": CharacterReference,
    Education: Educations,
    Information: Information,
    Skills: Skills,
    "Work History": WorkHistory,
  };
</script>

<div class="resume-wrapper">
  <div class="resume-inner">
    {#each $store.sections as item (item.id)}
      {#if item.visible}
        <div class="section">
          <svelte:component this={components[item.name]} />
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
