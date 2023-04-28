import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

function Dashboard() {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getMe = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await axios.get(
          `${process.env.REACT_APP_API}/v1/auth/me`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const data = response.data.data;

        setUser(data);
      } catch (error) {
        if (axios.isAxiosError(error)) {
          // If not valid token
          if (error.response.status === 401) {
            localStorage.removeItem("token");
            // Temporary solution
            return (window.location.href = "/");
          }

          toast.error(error.response.data.message);
          return;
        }
        toast.error(error.message);
      }
    };

    getMe();
  }, []);

  return (
    <Container className="p-4">
      <h1 className="text-center">Hi, {user?.name}!</h1>
      <h1 className="text-center">
        This page only can be accessed by user having login
      </h1>
    </Container>
  );
}

export default Dashboard;
