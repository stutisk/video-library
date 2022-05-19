
const dataReducer = (state, action) => {
  switch (action.type) {
    case "SUCCESS_CATEGORIES":{
      return { ...state, categories:action.payload };
    }
    case "SUCCESS_VIDEOS":{
      return { ...state, videos:action.payload };
    }
    default:
      return state;
  }
};
export { dataReducer };
