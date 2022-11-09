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

  import { store } from "./../../stores/workHistory.store";

  import moment from "moment";

  const toggle = () => store.toggle(!$store.open);

  let open = false;

  let item = {
    company: "",
    position: "",
    date_from: "",
    date_to: "",
    description: "",
  };

  let error = "";

  const addNew = () => {
    open = true;
    item = {
      company: "",
      position: "",
      date_from: "",
      date_to: "",
      description: "",
    };
  };

  const saveItem = () => {
    if (item.company === "") {
      error = "company field is required";
      return;
    }
    if (item.position === "") {
      error = "position field is required";
      return;
    }

    if (item.date_from === "") {
      error = "date from field is required";
      return;
    }

    if (item.date_to === "") {
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
      company: "",
      position: "",
      date_from: "",
      date_to: "",
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
        <Label>Company</Label>
        <Input type="text" name="company" bind:value={item.company} />
      </FormGroup>
      <FormGroup>
        <Label>Position</Label>
        <Input type="text" name="position" bind:value={item.position} />
      </FormGroup>

      <div class="row">
        <div class="col-md-6">
          <FormGroup>
            <Label>From Date</Label>
            <Input type="date" name="date_from" bind:value={item.date_from} />
          </FormGroup>
        </div>
        <div class="col-md-6">
          <FormGroup>
            <Label>To Date</Label>
            <Input type="date" name="date_to" bind:value={item.date_to} />
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
  <ModalHeader {toggle}>Work History</ModalHeader>
  <ModalBody>
    <Table>
      <tbody>
        {#each $store.items as v}
          <tr>
            <td>
              <div class="fw-bold">
                {v.position} at {v.company}
              </div>
              <div class="text-muted">
                {moment(v.date_from).format("LL")} - {moment(v.date_to).format(
                  "LL"
                )}
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
