import React from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/userActions";
import { v4 as uuid } from "uuid";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
} from "reactstrap";

class UserModal extends React.Component {
  state = {
    isOpen: false,
    name: "",
  };

  toggle = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  };

  onChange = (e) => {
    this.setState(() => ({ [e.target.name]: e.target.value }));
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      id: uuid(),
      name: this.state.name,
    };

    // Adding the user via addUser action
    this.props.addUser(newUser);

    // Closing the Modal
    this.toggle();
  };

  render() {
    return (
      <div>
        <Button
          color="dark"
          style={{ marginTop: "2rem" }}
          onClick={this.toggle}
        >
          Add User
        </Button>

        <Modal isOpen={this.state.isOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}> Add to Users</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <Label for="name">User Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="Add a new User"
                onChange={this.onChange}
              />

              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add User
              </Button>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps, { addUser })(UserModal);
