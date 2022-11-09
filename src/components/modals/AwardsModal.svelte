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

  import { store } from "./../../stores/awards.store";
  import moment from "moment";

  const toggle = () => store.toggle(!$store.open);

  let open = false;

  let item = {
    name: "",
    company: "",
    date: "",
    description: "",
  };

  let error = "";

  const addNew = () => {
    open = true;
    item = {
      name: "",
      company: "",
      date: "",
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
    if (item.date === "") {
      error = "date field is required";
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

    reset();

    // @ts-ignore
    Toastify({
      text: "Successfully saved",
    }).showToast();
  };

  const reset = () => {
    item = {
      name: "",
      company: "",
      date: "",
      description: "",
    };
    open = false;
  };

  const close = () => (open = false);

  const deleteItem = (i) => () => {
    store.deleteItem(i.id);
    // @ts-ignore
    Toastify({
      text: "Successfully deleted",
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
      <FormGroup>
        <Label>Date</Label>
        <Input type="date" name="date" bind:value={item.date} />
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
    <Button color="primary" on:click={saveItem}>Save</Button>
  </ModalFooter>
</Modal>

<Modal isOpen={$store.open} {toggle} size="lg">
  <ModalHeader {toggle}>Awards Received</ModalHeader>
  <ModalBody>
    <Table>
      <tbody>
        {#each $store.items as v}
          <tr>
            <td>
              <div class="fw-bold">
                {v.name}
              </div>
              <div class="text-muted">
                {v.company} - {moment(v.date).format("LL")}
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
