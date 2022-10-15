<script>
  import {
    Modal,
    ModalBody,
    ModalFooter,
    ModalHeader,
    Button,
    Form,
    Input,
    Label,
    FormGroup,
    Alert,
  } from "sveltestrap";

  import { store } from "./../../stores/information.store";

  const toggle = () => store.toggle(!$store.open);

  let item = {
    name: "",
    mobile_number: "",
    email: "",
  };

  let error = "";

  const saveChanges = () => {
    if (item.name === "") {
      error = "name field is required";
      return;
    }
    if (item.mobile_number === "") {
      error = "mobile_number field is required";
      return;
    }

    if (item.email === "") {
      error = "email from field is required";
      return;
    }

    if (item.description === "") {
      error = "description field is required";
      return;
    }
  };
</script>

<Modal isOpen={$store.open} {toggle} size="lg">
  <ModalHeader {toggle}>Basic Information</ModalHeader>
  <ModalBody>
    {#if error}
      <Alert color="danger">
        <div>{error}</div>
      </Alert>
    {/if}
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name="name" bind:value={item.name} />
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input type="text" name="email" bind:value={item.email} />
      </FormGroup>
      <FormGroup>
        <Label>Mobile Number</Label>
        <Input
          type="text"
          name="mobile_number"
          bind:value={item.mobile_number}
        />
      </FormGroup>
      <FormGroup>
        <Label>Description</Label>
        <Input
          type="textarea"
          name="description"
          bind:value={item.description}
        />
      </FormGroup>
    </Form>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={saveChanges}>Save Changes</Button>
  </ModalFooter>
</Modal>
