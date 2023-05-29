import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import store from "./redux/store";
import PostDetails from "./pages/PostDetails";
import Header from "./components/Header";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Protected from "./components/Protected";
import Dashboard from "./pages/Dashboard";
import RedirectIfProtected from "./components/RedirectIfProtected";
import About from "./pages/About";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <BrowserRouter>
          <Header />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/register"
              element={
                <RedirectIfProtected>
                  <Register />
                </RedirectIfProtected>
              }
            />
            <Route
              path="/login"
              element={
                <RedirectIfProtected>
                  <Login />
                </RedirectIfProtected>
              }
            />

            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetails />} />

            <Route path="/about" element={<About />} />

            <Route
              path="/user/dashboard"
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
