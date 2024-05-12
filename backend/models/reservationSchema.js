import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [2, "First name must contain at least 2 characters!"],
    maxLength: [50, "First name cannot exceed 50 characters!"],
  },
  lastName: {
    type: String,
    required: true,
    minLength: [2, "First name must contain at least 2 characters."],
    maxLength: [30, "First name cannot exceed 30 characters."],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Please provide a valid email."],
  },
  phone: {
    type: String,
    required: true,
    minLength: [11, "Phone number must contain 11 digits."],
    maxLength: [11, "Phone number must contain 11 digits."],
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  service: {
    type: String,
    required: true,
  },
  person: {
    type: Number,
    required: true,
  },
});

export const Reservation = mongoose.model("Reservation", reservationSchema);
