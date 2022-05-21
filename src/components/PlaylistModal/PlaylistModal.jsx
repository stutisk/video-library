import { usePlaylist } from "../../Context/PlaylistContext";
import { useRef } from "react";

const PlaylistModal = () => {
  const { setModal,createNewPlaylist } = usePlaylist();
  const title = useRef();
  const description = useRef();

  const NewPlaylist =() =>{
    createNewPlaylist({
      title: title.current.value,
      description: description.current.value,
    });

  }


  return (
    <div
      id="authentication-modal"
      tabindex="-1"
      aria-hidden="true"
      class=" overflow-y-auto overflow-x-hidden fixed  z-50  h-modal md:h-full"
    >
      <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
        <div class="relative bg-slate-900 border-2 border-sky-500 shadow shadow-sky-500 rounded px-3 pt-6 pb-8 mb-4 ">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
            data-modal-toggle="authentication-modal"
            onClick={()=> setModal(false)}
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class=" px-6 lg:px-8">
            <h3 class="mb-4  font-medium text-slate-50 text-xl">
              PLAYLISTS
            </h3>
            <form class="space-y-6" action="#">
              <div>
                <label
                  for="Title"
                  class="block mb-2 font-medium text-slate-50 text-xl dark:text-gray-300"
                >
                  Title
                </label>
                <input
                ref={title}
                  type="Title"
                  name="Title"
                  id="Title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Title"
                />
              </div>
              <div>
                <label
                  for="description"
                  class="block mb-2  font-medium text-slate-50 text-xl dark:text-gray-300"
                >
                  Description
                </label>
                <input
                  type="description"
                  name="description"
                  id="description"
                  ref={description}
                  placeholder="description"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                />
              </div>

              <button
                type="button"
                class="  inline-block px-6 py-2.5   text-slate-900 font-medium text-xl  bg-sky-500 rounded hover:bg-sky-600 "
              onClick={() => {
                NewPlaylist();
                setModal(false);
              }}
            
             
              >
                CREATE 
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export {PlaylistModal};