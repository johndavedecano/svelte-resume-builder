<script>
  import { store } from "./../store";
</script>

<div class="resume-toolbar d-flex align-items-center">
  <div class="flex-grow-1 fw-bold">{$store.filename}</div>
  <button class="btn btn-success me-2 btn-lg btn-sm">
    <i class="fa fa-comment" />
  </button>
  <button class="btn btn-primary btn-lg btn-sm me-2">
    <i class="fa fa-download" />
  </button>
</div>

<style>
  .resume-toolbar {
    height: 60px;
    width: 100%;
    border-bottom: solid 1px #ddd;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
