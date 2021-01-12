import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { v4 as uuid } from "uuid";

import { connect } from "react-redux";
import { getUsers } from "../actions/userActions";

import PropTypes from "prop-types";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    const { users } = this.props.user;
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
          {users.map(({ name, id }) => (
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

UserList.propTypes = {
  getUsers: PropTypes.func.isRequired,
  users: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps, { getUsers })(UserList);
