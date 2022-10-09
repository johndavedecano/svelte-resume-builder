<script>
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
  } from "sveltestrap";

  import { store } from "../../stores/awards.store";

  const toggle = () => store.toggle(!$store.open);
</script>

<Modal isOpen={$store.open} {toggle} size="lg">
  <ModalHeader {toggle}>Awards</ModalHeader>
  <ModalBody>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={toggle}>Do Something</Button>
    <Button color="secondary" on:click={toggle}>Cancel</Button>
  </ModalFooter>
</Modal>
