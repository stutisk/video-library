import React from "react";
import { useData } from "../../Context/dataContext";
import { Link } from "react-router-dom";

const Categorycard = () => {
  const {
    state: { categories },
    dispatch,
  } = useData();

  return (
    <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
      {categories.map((category) => {
        return (
          <Link to="videoList">
            <div className=" border-2 hover:bottom-4 border-sky-500  shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
              <div>
                <img
                  className="h-auto w-auto hover:opacity-50 "
                  src={category.image}
                  alt={category.categoryName}
                  onClick={() =>
                    dispatch({
                      type: "SELECT_CATEGORY",
                      payload: category.categoryName,
                    })
                  }
                />
              </div>

              <p className="p-2 tracking-wide">{category.categoryName}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};
export { Categorycard };
