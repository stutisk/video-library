const getFilterVideos = (state, videos) => {
const { categoryBy } = state;

if(categoryBy !== "All"){
  return [...videos].filter((video) => video.category === categoryBy)
  
}
return [...videos]
 
};

export { getFilterVideos };
