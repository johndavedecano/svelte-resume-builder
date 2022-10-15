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

  import { store } from "./../../stores/skills.store";

  const toggle = () => store.toggle(!$store.open);

  let open = false;

  let item = {
    name: "",
    rating: 0,
  };

  let error = "";

  const addNew = () => {
    open = true;
    item = {
      name: "",
      rating: 0,
    };
  };

  const saveItem = () => {
    if (item.name === "") {
      error = "name field is required";
      return;
    }

    // @ts-ignore
    if (!item.rating) {
      error = "rating field is required";
      return;
    }

    if (item.id) {
      store.updateItem(item);
    } else {
      store.addItem({ ...item, id: new Date().getTime() });
    }

    reset();
  };

  const reset = () => {
    item = {
      name: "",
      rating: 0,
    };
    open = false;
  };

  const close = () => (open = false);

  const deleteItem = (i) => () => store.deleteItem(i.id);

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
        <Label>Rating</Label>
        <Input type="select" name="rating" bind:value={item.rating}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </Input>
      </FormGroup>
    </Form>
  </ModalBody>
  <ModalFooter>
    <Button color="primary" on:click={saveItem}>Save</Button>
  </ModalFooter>
</Modal>

<Modal isOpen={$store.open} {toggle} size="lg">
  <ModalHeader {toggle}>Skills</ModalHeader>
  <ModalBody>
    <Table>
      <tbody>
        {#each $store.items as v}
          <tr>
            <td>
              <div class="fw-bold">
                {v.name} - <span class="text-muted">{v.rating}</span>
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
