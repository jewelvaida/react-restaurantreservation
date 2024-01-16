import ErrorHandler from "../error/error.js";
import { Reservation } from "../models/reservationSchema.js";

export const sendReservation = async (req, res, next) => {
  const { firstName, lastName, email, phone, date, time, branch, person } =
    req.body;
  if (
    !firstName ||
    !lastName ||
    !email ||
    !phone ||
    !date ||
    !time ||
    !branch ||
    !person
  ) {
    return next(
      new ErrorHandler("Please completely fill out the reservation form.", 400)
    );
  }

  try {
    await Reservation.create({
      firstName,
      lastName,
      email,
      phone,
      date,
      time,
      branch,
      person,
    });
    res.status(200).json({
      success: true,
      message:
        "Reservation sent succesfully! Please wait for an SMS or email from the team at your selected branch for confirmation",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      return next(new ErrorHandler(validationErrors.join(","), 400));
    }
    return next(error);
  }
};
