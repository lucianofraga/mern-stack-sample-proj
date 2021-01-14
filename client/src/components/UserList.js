import React from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";

import { connect } from "react-redux";
import { getUsers, deleteUser } from "../actions/userActions";

import PropTypes from "prop-types";

class UserList extends React.Component {
  componentDidMount() {
    this.props.getUsers();
  }

  onDeleteClick = (id) => {
    this.props.deleteUser(id);
  };

  render() {
    const { users } = this.props.user;
    return (
      <Container>
        <ListGroup>
          {users.map(({ name, id }, idx) => (
            <ListGroupItem key={idx}>
              <Button
                className="btn btn-danger btn-sm"
                onClick={this.onDeleteClick.bind(this, id)}
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
  user: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  user: state.users,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(UserList);
