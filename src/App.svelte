<script>
  import AwardsModal from "./components/modals/AwardsModal.svelte";
  import CertificationsModal from "./components/modals/CertificationsModal.svelte";
  import CharacterReferenceModal from "./components/modals/CharacterReferenceModal.svelte";
  import EducationModal from "./components/modals/EducationModal.svelte";
  import InformationModal from "./components/modals/InformationModal.svelte";
  import SkillsModal from "./components/modals/SkillsModal.svelte";
  import WorkHistoryModal from "./components/modals/WorkHistoryModal.svelte";
  import ResumePreview from "./components/ResumePreview.svelte";
  import ResumeToolbar from "./components/ResumeToolbar.svelte";
  import Sections from "./components/Sections.svelte";
</script>

<div class="resume-builder">
  <div class="resume-settings">
    <div class="resume-toolbar align-items-center d-flex">
      <h5 class="mb-0">Resume Mentor</h5>
    </div>
    <div class="d-flex flex-column">
      <Sections />
    </div>
  </div>
  <div class="resume-preview">
    <ResumeToolbar />
    <div class="resume-container">
      <div class="resume-holder">
        <ResumePreview />
      </div>
    </div>
  </div>
  <AwardsModal />
  <CertificationsModal />
  <CharacterReferenceModal />
  <EducationModal />
  <InformationModal />
  <SkillsModal />
  <WorkHistoryModal />
</div>

<style>
  .resume-builder {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
    position: relative;
    align-items: stretch;
    position: relative;
    overflow: hidden;
  }
  .resume-settings {
    min-width: 500px;
    border-right: solid 1px #ddd;
  }
  .resume-preview {
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    overflow: auto;
  }
  .resume-toolbar {
    height: 60px;
    width: 100%;
    border-bottom: solid 1px #ddd;
    display: flex;
    align-items: center;
    padding-left: 15px;
    padding-right: 15px;
  }
  .resume-container {
    height: calc(100vh - 60px);
    max-height: calc(100vh - 60px);
    background-color: #f2f2f2;
    overflow: auto;
  }
  .resume-holder {
    width: 100%;
    min-height: 100%;
    padding: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f2f2f2;
  }
</style>
