const getFilterVideos = (data, categories) => {
  if (categories === "All") {
    return data;
  }
  // return data.filter((item) => categories.includes(item.categories));
  return data = categories.length
  ? [
      ...data.filter((product) =>
        categories.includes(product.categories)
      ),
    ]
  : [...data];
};

export { getFilterVideos };