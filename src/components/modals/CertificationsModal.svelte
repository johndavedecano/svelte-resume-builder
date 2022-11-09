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
    Table,
  } from "sveltestrap";

  import { store } from "./../../stores/certifications.store";

  import moment from "moment";

  const toggle = () => store.toggle(!$store.open);

  let open = false;

  let item = {
    name: "",
    company: "",
    issued_at: "",
    expires_at: "",
    description: "",
  };

  let error = "";

  const addNew = () => {
    open = true;
    item = {
      name: "",
      company: "",
      issued_at: "",
      expires_at: "",
      description: "",
    };
  };

  const saveItem = () => {
    if (item.name === "") {
      error = "name field is required";
      return;
    }
    if (item.company === "") {
      error = "company field is required";
      return;
    }

    if (item.issued_at === "") {
      error = "date from field is required";
      return;
    }

    if (item.expires_at === "") {
      error = "date to field is required";
      return;
    }

    if (item.description === "") {
      error = "description field is required";
      return;
    }

    if (item.id) {
      store.updateItem(item);
    } else {
      store.addItem({ ...item, id: new Date().getTime() });
    }

    // @ts-ignore
    Toastify({
      text: "Successfully saved",
    }).showToast();

    reset();
  };

  const reset = () => {
    item = {
      name: "",
      company: "",
      issued_at: "",
      expires_at: "",
      description: "",
    };
    open = false;
  };

  const close = () => (open = false);

  const deleteItem = (i) => () => {
    store.deleteItem(i.id);
    // @ts-ignore
    Toastify({
      text: "Successfully saved",
    }).showToast();
  };

  const editItem = (i) => () => {
    item = i;
    open = true;
  };
</script>

<Modal isOpen={open} toggle={close} size="lg">
  <ModalHeader toggle={close}>
    {item.id ? "Edit" : "Add New"}
  </ModalHeader>
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
        <Label>Company</Label>
        <Input type="text" name="company" bind:value={item.company} />
      </FormGroup>

      <div class="row">
        <div class="col-md-6">
          <FormGroup>
            <Label>Issue Date</Label>
            <Input type="date" name="issued_at" bind:value={item.issued_at} />
          </FormGroup>
        </div>
        <div class="col-md-6">
          <FormGroup>
            <Label>Expire Date</Label>
            <Input type="date" name="expires_at" bind:value={item.expires_at} />
          </FormGroup>
        </div>
      </div>

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
    <Button color="primary" on:click={saveItem}>Save</Button>
  </ModalFooter>
</Modal>

<Modal isOpen={$store.open} {toggle} size="lg">
  <ModalHeader {toggle}>
    {$store.name}
    <button class="btn btn-sm">
      <i class="fa fa-pencil" />
    </button>
  </ModalHeader>
  <ModalBody>
    <Table>
      <tbody>
        {#each $store.items as v}
          <tr>
            <td>
              <div class="fw-bold">
                {v.company} at {v.name}
              </div>
              <div class="text-muted">
                {moment(v.issued_at).format("LL")} - {moment(
                  v.expires_at
                ).format("LL")}
              </div>
            </td>
            <td class="text-end">
              <div class="d-flex justify-content-end">
                <Button
                  color="primary"
                  size="sm"
                  class="me-2"
                  on:click={editItem(v)}
                >
                  <i class="fa fa-pencil" />
                </Button>
                <Button color="danger" size="sm" on:click={deleteItem(v)}>
                  <i class="fa fa-trash" />
                </Button>
              </div>
            </td>
          </tr>
        {:else}
          <div
            class="border p-4 d-flex align-items-center justify-content-center"
          >
            <div class="h4">no items available</div>
          </div>
        {/each}
      </tbody>
    </Table>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={addNew}>
      Add New <i class="fa fa-plus" />
    </Button>
  </ModalFooter>
</Modal>
