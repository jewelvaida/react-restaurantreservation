import mongoose from "mongoose";

export const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "RestaurantReservation",
    })
    .then(() => {
      console.log("Database Connection: SUCCESS");
    })
    .catch((err) => {
      console.log("Database Connection: ERROR OCCURED ${err}");
    });
};
