const getFilterVideos = (videos, categories) => {
  if (categories === "All") {
    return videos;
  }
 
 else {
  let filteredData = categories.length?[...videos.filter((video) => categories.includes(video.categoryName))] : [...videos]
  return [...filteredData]
 }
  
 
};

export { getFilterVideos };