import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

class UserList extends React.Component {
  state = {
    users: [
      { id: uuid(), name: "User 1", age: 37 },
      { id: uuid(), name: "User 2", age: 30 },
      { id: uuid(), name: "User 3", age: 21 },
      { id: uuid(), name: "User 4", age: 44 },
      { id: uuid(), name: "User 5", age: 80 },
    ],
  };

  render() {
    return (
      <Container>
        <Button
          color="dark"
          style={{ marginBotton: "2rem" }}
          onClick={() => {
            const name = prompt("Enter the Name");
            if (name) {
              this.setState((state) => {
                return {
                  users: [...state.users, { id: uuid(), name, age: 30 }],
                };
              });
            }
          }}
        >
          Add User
        </Button>

        <ListGroup>
          {this.state.users.map(({ name, id }) => (
            <ListGroupItem>
              <Button
                className="btn btn-danger btn-sm"
                onClick={() => {
                  this.setState((state) => {
                    return {
                      users: state.users.filter((usr) => usr.id !== id),
                    };
                  });
                }}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
          ))}
        </ListGroup>
      </Container>
    );
  }
}

export default UserList;
