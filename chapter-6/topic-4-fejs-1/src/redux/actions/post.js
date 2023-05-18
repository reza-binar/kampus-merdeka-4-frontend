import axios from "axios";
import { toast } from "react-toastify";
import { setPostDetails, setPosts } from "../reducers/post";

export const getPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/posts`
    );
    dispatch(setPosts(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};

export const getPostDetails = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_POSTS_API}/posts/${id}`
    );
    dispatch(setPostDetails(response.data));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.message);
      return;
    }
    toast.error(error?.message);
  }
};
