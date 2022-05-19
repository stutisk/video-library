import { useData } from "../../Context/dataContext";
const Categories = () => {
  const {
    state: { categories},
  } = useData();
  console.log(categories);
  return (
    <div className="flex gap-8 text-slate-50 font-medium text-2xl">
      {categories.map((category) => {
        return (
          <button
            className="border-2  border-sky-500  shadow   shadow-sky-500 px-6 py-1 rounded-full "      
          >
            {category.categoryName}
          </button>
        );
      })}
    </div>
  );
};

export { Categories };
