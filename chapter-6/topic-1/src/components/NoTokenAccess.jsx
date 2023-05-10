import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

function NoTokenAccess({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMe(navigate, "/", null));
  }, [navigate, dispatch]);

  return children;
}

export default NoTokenAccess;
