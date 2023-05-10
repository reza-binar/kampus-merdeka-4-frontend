import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMe } from "../redux/actions/authActions";

function Protected({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }

    // get user information
    dispatch(getMe(navigate, null, "/"));
  }, [navigate, dispatch, token]);

  return children;
}

export default Protected;
