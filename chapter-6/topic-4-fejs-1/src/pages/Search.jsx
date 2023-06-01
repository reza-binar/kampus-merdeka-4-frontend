import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { searchMovies } from "../redux/actions/movie";

function Search() {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movie);

  useEffect(() => {
    if (query !== "") {
      const delayDebounceFn = setTimeout(() => {
        dispatch(searchMovies(query, 1));
        // Send Axios request here
      }, 1000);

      return () => clearTimeout(delayDebounceFn);
    }
  }, [dispatch, query]);

  return (
    <Container className="p-4">
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Search Movie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Search Movie..."
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              value={query}
            />
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>{movies?.length > 0 && JSON.stringify(movies)}</Col>
      </Row>
    </Container>
  );
}

export default Search;
