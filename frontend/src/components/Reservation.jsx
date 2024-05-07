import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  // Assuming you have a form reference named 'form'
  const form = e.target;

  emailjs
    .sendForm("service_1u29fgx", "template_38uk4lt", e.target,"7IL-F15EJcBa0qDwo")
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  e.target.reset();
};

const Reservation = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [phone, setPhone] = useState("");
  const [branch, setBranch] = useState("");
  const [person, setPerson] = useState("");
  const branches = [
    "BF Resort",
    "BF Homes",
    "Sct. Borromeo",
    "South, Las Pinas",
  ];
  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/reservation/send",
        {
          firstName,
          lastName,
          email,
          phone,
          date,
          time,
          branch,
          person,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setFirstName("");
      setLastName("");
      setPhone("");
      setEmail("");
      setTime("");
      setDate("");
      setBranch("");
      setPerson("");
      navigate("/success");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  // Log the values to the console
  console.log("User Input Values:", {
    firstName,
    lastName,
    email,
    phone,
    date,
    time,
    branch,
    person,
  });

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner image">
          <img src="/steak.jpeg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={sendEmail}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  placeholder="Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  placeholder="Time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div>
                <select
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                >
                  <option value="" disabled>
                    Select a Branch
                  </option>
                  {branches.map((branchOption) => (
                    <option key={branchOption} value={branchOption}>
                      {branchOption}
                    </option>
                  ))}
                </select>
                <input
                  type="number"
                  placeholder="Pax"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW{" "}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
