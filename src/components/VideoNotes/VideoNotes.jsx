import { useRef, useState } from "react";

const VideoNotes = () => {
  const notesdesciption = useRef();
  const [notes, setNotes] = useState([]);
  
  
  let AddedNotes = "";
  const clearInput = () => (notesdesciption.current.value = "");
  const addNotes = () => {
    AddedNotes = notesdesciption.current.value;
    AddedNotes !== "" ? setNotes([...notes, AddedNotes]) : setNotes([...notes]);
    clearInput();
  };

  return (
    <div>
      <h1>NOTES</h1>
      <div class="flex justify-center"></div>
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
              onKeyPress={(event) => {
                if (event.key === "Enter") {
                  addNotes();
                }
              }}
              ref={notesdesciption}
              placeholder="Description"
            ></textarea>
          </div>
        </div>
      </div>

      <div>
        {notes.slice(0).reverse()
        .map((item) => {
          return (
            <div
              className="
             w-full
             py-1.5
             text-base
             font-normal
             text-gray-50
             bg-slate-900 bg-clip-padding
             border border-solid border-gray-300
             rounded
             transition
             ease-in-out
             mt-2
             "
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { VideoNotes };
