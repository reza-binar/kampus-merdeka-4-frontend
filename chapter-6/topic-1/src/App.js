import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NoTokenAccess from "./components/NoTokenAccess";
import Home from "./pages/Home";
import Protected from "./components/Protected";
import Dashboard from "./pages/users/Dashboard";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import store from "./redux/store";
import PostDetails from "./pages/posts/PostDetails";
import UseSelector from "./pages/UseSelector";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
      >
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={"/posts/:id"} element={<PostDetails />} />
            <Route
              path="/login"
              element={
                <NoTokenAccess>
                  <Login />
                </NoTokenAccess>
              }
            />
            <Route
              path="/register"
              element={
                <NoTokenAccess>
                  <Register />
                </NoTokenAccess>
              }
            />
            <Route path="/useselector" element={<UseSelector />} />
            <Route
              path="/users/dashboard"
              element={
                <Protected>
                  <Dashboard />
                </Protected>
              }
            />
          </Routes>

          <ToastContainer theme="colored" />
        </BrowserRouter>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
