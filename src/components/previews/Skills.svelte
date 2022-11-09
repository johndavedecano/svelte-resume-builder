<script>
  import { store as skillStore } from "./../../stores/skills.store";

  $: skills = $skillStore.items;
</script>

<div class="d-flex flex-column mt-4">
  <div class="h4">Skills</div>
  {#if skills.length}
    <table class="table table-bordered">
      <thead>
        <tr>
          <td> Skill </td>
          <td> Rating </td>
        </tr>
      </thead>
      <tbody>
        {#each skills as skill}
          <tr>
            <td class="skillColumn">
              {skill.name}
            </td>
            <td>
              {skill.rating}
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <div class="p-4 text-center text-muted border">
      <div class="body">No skills available</div>
    </div>
  {/if}
</div>

<style scoped>
  .skillColumn {
    width: 95%;
  }
</style>
