import { useData } from "../../Context/dataContext";

const Categories = () => {
  const {
    state: { categories },
    dispatch,
  } = useData();

  return (
    <div className="flex gap-8 text-slate-50 font-medium text-2xl">
      <button
        className="border-2  border-sky-500  shadow   px-6 py-1 rounded-full  focus:outline-none focus:ring "
        onClick={() =>
          dispatch({
            type: "SELECT_CATEGORY",
            payload: "All",
          })
        }
      >
        All
      </button>
      {categories.map((category) => {
        return (
          <button
            key={category._id}
            className="border-2  border-sky-500  shadow   px-6 py-1 rounded-full focus:outline-none focus:ring "
            onClick={() =>
              dispatch({
                type: "SELECT_CATEGORY",
                payload: category.categoryName,
              })
            }
          >
            {category.categoryName}
          </button>
        );
      })}
    </div>
  );
};

export { Categories };