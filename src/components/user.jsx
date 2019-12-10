import React, { useEffect } from "react";
import { Container, Table } from "reactstrap";
import { mapDispatchToProps } from "../actions/user.action";
import { connect, useSelector } from "react-redux";
import Tbody from "./tbody";
const Users = props => {
  const getData = async key => {
    props.getUsersList(key, await localStorage.getItem("token"));
  };
  const { userList } = useSelector(state => {
    return state.userReducer;
  });

  useEffect(() => {
    getData(props.match.params.key);
  }, [props.match.params.key]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>User id</th>
            <th>User name</th>
            <th>Action</th>
          </tr>
        </thead>
        <Tbody list={userList} />
      </Table>
    </Container>
  );
};

export default connect(null, mapDispatchToProps)(Users);
