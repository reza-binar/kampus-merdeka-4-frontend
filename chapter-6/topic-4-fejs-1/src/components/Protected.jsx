import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProfile } from "../redux/actions/auth";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isLoggedIn, token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token && !isLoggedIn) {
      navigate("/login");
      return;
    }

    dispatch(getProfile());
  }, [dispatch, isLoggedIn, navigate, token]);

  return children;
}

export default Protected;
