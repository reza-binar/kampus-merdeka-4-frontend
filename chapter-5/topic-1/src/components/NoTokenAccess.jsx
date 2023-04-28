import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function NoTokenAccess({ children }) {
  const navigate = useNavigate();

  useEffect(() => {
    const getMe = async (token) => {
      try {
        await axios.get(`${process.env.REACT_APP_API}/v1/auth/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        window.location.href = "/";
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            return;
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    const token = localStorage.getItem("token");

    if (token) {
      getMe(token);
    }
  }, [navigate]);

  return children;
}

export default NoTokenAccess;
