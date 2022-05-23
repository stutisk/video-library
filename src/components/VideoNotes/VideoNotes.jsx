import { BsBookmark} from "../../components/Icons/Icons";
const VideoNotes = () => {
  return (
    <div>
      <h1>NOTES</h1>
      <div class="flex justify-center">
        <div class="mt-3 w-96">
          <input
            type="text"
            class="
              w-full
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-slate-900 bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-slate-50 focus:bg-slate-900 focus:border-sky-500 focus:outline-none
      "
            id="exampleText0"
            placeholder="Title"
          />
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <div class="mt-1 w-96 ">
            <textarea
              class="      
        w-full
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-slate-900 bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-slate-50 focus:bg-slate-900 focus:border-sky-500 focus:outline-none
      "
              placeholder="Description"
            ></textarea>
          </div>
        </div>
      </div>

      <button className=" flex px-4 gap-2 py-1.5 shadow shadow-sky-500">
        SAVE
        <span className="mt-2">
          <BsBookmark size={20} />
        </span>
      </button>
    </div>
  );
};
export { VideoNotes };
