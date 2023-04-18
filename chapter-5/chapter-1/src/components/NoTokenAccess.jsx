import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NoTokenAccess({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      return navigate("/");
    }
  }, [navigate]);

  return children;
}

export default NoTokenAccess;
