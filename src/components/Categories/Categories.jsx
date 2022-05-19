import { useData } from "../../Context/dataContext";
const Categories = () => {
  const {
    state: { categories},dispatch
  } = useData();

  console.log(categories);
  return (
    <div className="flex gap-8 text-slate-50 font-medium text-2xl">
       <button
            className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-1 rounded-full "      
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
          <button key={category._id}
            className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-1 rounded-full "      
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
