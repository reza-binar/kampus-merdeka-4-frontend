import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../redux/actions/authActions";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe(navigate, null, null));
  }, [dispatch, navigate]);

  return (
    <Container className="p-4">
      <h1 className="text-center">
        Hi, {user?.name} with {user?.email}!
      </h1>
      <h1 className="text-center">
        This page only can be accessed by user having login
      </h1>
    </Container>
  );
}

export default Dashboard;
