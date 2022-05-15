import {BiLike,MdWatchLater,MdOutlineFeaturedPlayList } from "../Icons/Icons"
const Videocards = () => {
  return (
    
      <div className="w-72 border-2 hover:bottom-4 border-sky-500  shadow hover:shadow-md  shadow-sky-500  hover:shadow-sky-600 rounded cursor-pointer ">
        <div>
          <img
            className="h-auto  "
            src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1652634336/Chill1_ehleua.webp"
          />
        </div>
        <div className="flex p-2 gap-3">
          <div>
            <img
              className="  rounded-full"
              src="https://res.cloudinary.com/dvbw8xujd/image/upload/v1652634336/Chill_creator_qapxan.jpg"
            />
          </div>
          <div>
            {" "}
            <p className=" tracking-wide text-base text-left">
              Sad Songs | Hindi | Loneliness 
            </p>
          </div>
          <div className="flex gap-2">
          <BiLike/>
          <MdWatchLater/>
          <MdOutlineFeaturedPlayList/>
          </div>
         
          
          
        </div>
        <div className="flex place-content-between tracking-wide text-base">
              <div>3M views</div>
              <div>june 17, 2000</div>
          </div>
        
      </div>

     

   
  );
};

export { Videocards };
