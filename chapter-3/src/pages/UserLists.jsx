import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import UserCard from "../components/UserCard";

function UserLists() {
  let [searchParams] = useSearchParams();

  const [users, setUsers] = useState([]);
  const [requestPage, setRequestPage] = useState([1]);

  useEffect(() => {
    const page = searchParams.get("page");
    setRequestPage(page);
  }, [searchParams]);

  useEffect(() => {
    const getUserListsData = async (page, perPage) => {
      try {
        const config = {
          method: "get",
          url: `https://reqres.in/api/users?page=${page}&per_page=${perPage}`,
        };

        const response = await axios.request(config);
        const { data } = response.data;

        setUsers(data);
      } catch (error) {
        alert(error);
      }
    };

    getUserListsData(requestPage, 8);
  }, [requestPage]);

  return (
    <Container className="my-4">
      <Row className="text-center mb-2">
        <Col>
          <h2>User Lists</h2>
        </Col>
      </Row>
      <Row className="g-5">
        {users.length > 0 ? (
          users.map((user) => (
            <UserCard
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
            />
          ))
        ) : (
          <h3 className="text-center">Loading...</h3>
        )}
      </Row>
    </Container>
  );
}

export default UserLists;
