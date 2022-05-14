import react ,{useState,useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Categorycard = () => {
  const [categories, setCategories] = useState([]);

  async  function getCategories  () {
    try {
      const res = await axios.get("/api/categories");
      console.log(res.data)
      setCategories(res.data.categories);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
      getCategories();
  }, []);

  return (

    <div className="flex flex-row flex-wrap  gap-10 p-4 justify-center ">
      { categories.map((category) => {
      return(
        <Link to="">
        <div className=" border-2 hover:bottom-4 border-sky-500  shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
        <div>
          <img
            className="h-auto w-auto hover:opacity-50 "
            src={category.image}
          />
        </div>
       
        <p className="p-2 tracking-wide" >
          {category.categoryName}
        </p>
      </div>
      </Link>
      )
       
     
       } )}
    </div>
  );
};
export { Categorycard };
