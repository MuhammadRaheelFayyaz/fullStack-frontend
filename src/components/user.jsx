import React, { useState, useEffect } from "react";
import { Container, Table } from "reactstrap";
import { mapStateToProps, mapDispatchToProps } from "../actions/user.action";
import { connect } from "react-redux";
import Tbody from "./tbody";
const Users = props => {
  let { userList } = props.user;
  const [data, setData] = useState([]);
  setData(userList);
  const getData = async () => {
    props.getUsersList(
      props.match.params.key,
      await localStorage.getItem("token")
    );
  };

  useEffect(async () => {
    await getData(props.match.params.key);
    console.log("userList,data :", userList, data);
  }, [props.location]);

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
        <Tbody list={data} />
      </Table>
    </Container>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
