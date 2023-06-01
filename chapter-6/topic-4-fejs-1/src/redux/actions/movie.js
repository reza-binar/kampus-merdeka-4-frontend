import axios from "axios";
import { setMovies } from "../reducers/movie";
import { toast } from "react-toastify";

export const searchMovies =
  (query, page = 1) =>
  async (dispatch) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_MOVIE_API}/api/v1/search/movie`,
        {
          params: {
            query,
            page,
          },
        }
      );
      const { data } = response?.data;

      dispatch(setMovies(data));
    } catch (error) {
      if (axios.isAxiosError(error)) {
        toast.error(error?.response?.data?.message);
        return;
      }

      toast.error(error.message);
    }
  };
