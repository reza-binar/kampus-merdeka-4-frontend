import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import axios from "axios";
import UserCard from "../components/UserCard";

function UserLists() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [requestPage, setRequestPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (totalPages > 0) {
      const itemsPages = [];
      for (let number = 1; number <= totalPages; number++) {
        itemsPages.push(
          <Pagination.Item
            key={number}
            active={number === Number(requestPage)}
            onClick={() => {
              navigate(`/user-lists?page=${number}`);
            }}
          >
            {number}
          </Pagination.Item>
        );
      }

      setItems(itemsPages);
    }
  }, [requestPage, totalPages, navigate]);

  useEffect(() => {
    const page = searchParams.get("page");
    if (page > 0) {
      setRequestPage(page);
    }
  }, [searchParams]);

  useEffect(() => {
    const getUserListsData = async (page, perPage) => {
      try {
        setIsLoading(true);

        const config = {
          method: "get",
          url: `https://reqres.in/api/users?page=${page}&per_page=${perPage}`,
        };

        const response = await axios.request(config);
        const { data, total_pages } = response.data;

        setUsers(data);
        setTotalPages(total_pages);
        setIsLoading(false);
      } catch (error) {
        alert(error);
        setIsLoading(false);
      }
    };

    getUserListsData(requestPage, 4);
  }, [requestPage]);

  return (
    <Container className="my-4">
      <Row className="text-center mb-2">
        <Col>
          <h2>User Lists</h2>
        </Col>
      </Row>
      <Row className="g-5">
        {isLoading ? (
          <h3 className="text-center">Loading...</h3>
        ) : users.length > 0 ? (
          users.map((user) => (
            <UserCard
              key={user.id}
              avatar={user.avatar}
              firstName={user.first_name}
              lastName={user.last_name}
              email={user.email}
            />
          ))
        ) : (
          <h3 className="text-center">Users are not found!</h3>
        )}
      </Row>
      <Row className="my-4">
        <Col>
          <div className="d-flex justify-content-center align-items-center">
            <Pagination>{items}</Pagination>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default UserLists;
