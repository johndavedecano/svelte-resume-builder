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

  import { store } from "./../../stores/educations.store";
  import moment from "moment";

  const toggle = () => store.toggle(!$store.open);

  let open = false;

  let item = {
    school: "",
    course: "",
    date: "",
    description: "",
  };

  let error = "";

  const addNew = () => {
    open = true;
    item = {
      school: "",
      course: "",
      date: "",
      description: "",
    };
  };

  const saveItem = () => {
    if (item.school === "") {
      error = "school field is required";
      return;
    }
    if (item.course === "") {
      error = "course field is required";
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

    // @ts-ignore
    Toastify({
      text: "Successfully saved",
    }).showToast();

    reset();
  };

  const reset = () => {
    item = {
      school: "",
      course: "",
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
        <Label>School</Label>
        <Input type="text" name="school" bind:value={item.school} />
      </FormGroup>
      <FormGroup>
        <Label>Course</Label>
        <Input type="text" name="course" bind:value={item.course} />
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
                {v.school}
              </div>
              <div class="text-muted">
                {v.course} - {moment(v.date).format("LL")}
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
