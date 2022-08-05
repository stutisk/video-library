import axios from "axios";

const getCategories = async (dispatch) => {
  try {
    const res = await axios.get("/api/categories");
    dispatch({ type: "SUCCESS_CATEGORIES", payload: res.data.categories });
  } catch (error) {
    console.log(error);
  }
};

const getVideos = async (dispatch) => {
  try {
    const res = await axios.get("/api/videos");
    dispatch({ type: "SUCCESS_VIDEOS", payload: res.data.videos });
  } catch (error) {
    console.log(error);
  }
};

export { getCategories, getVideos };
