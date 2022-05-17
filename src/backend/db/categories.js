import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Chill",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301557/chill_izhoq0.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Workout",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301558/Workout_srhapr.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Focus",
    image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301558/Focus_wxddfh.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Feel Good",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301558/feel_good_zjshk5.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Sleep",
    image:
      "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301557/sleep_t5atuk.jpg",
  },
  {
    _id: uuid(),
    categoryName: "Party",
    image:
    "https://res.cloudinary.com/dvbw8xujd/image/upload/c_scale,h_250/v1652301558/party_z6h0by.jpg",
  },
];
