import React, { useState } from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const sendEmail = (e) => {
  e.preventDefault();

  // Assuming you have a form reference named 'form'
  const form = e.target;

  emailjs
    .sendForm("service_1u29fgx", "template_38uk4lt", e.target, "7IL-F15EJcBa0qDwo")
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
  const [service, setService] = useState("");
  const [person, setPerson] = useState("");
  const branches = [
    "BF Resort",
    "BF Homes",
    "Sct. Borromeo",
    "South, Las Pinas",
  ];
  const services = [
    "Service 1",
    "Service 2",
    "Service 3",
    "Service 4",
    "Service 5",
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
          service,
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
      setService("");
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
    service,
    person,
  });

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner image">
          <img src="/steak.jpeg" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box" style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h1 style={{ textAlign: "center" }}>MAKE A RESERVATION</h1>
            <p style={{ textAlign: "center" }}>For Further Questions, Please Call</p>
            <form onSubmit={sendEmail}>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  name="fname"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  style={{ width: "48%", marginRight: "4%" }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lname"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  style={{ width: "48%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="date"
                  placeholder="Date"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  style={{ width: "48%", marginRight: "4%" }}
                />
                <input
                  type="time"
                  placeholder="Time"
                  name="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  style={{ width: "48%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <select
                  name="branch"
                  value={branch}
                  onChange={(e) => setBranch(e.target.value)}
                  style={{ width: "100%" }}
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
              </div>
              <div style={{ marginBottom: "10px" }}>
                <select
                  name="service" // Name attribute for service
                  value={service} // Value from state
                  onChange={(e) => setService(e.target.value)} // OnChange handler to update state
                  style={{ width: "100%" }}
                >
                  <option value="" disabled>
                    Select a Service
                  </option>
                  {services.map((serviceOption) => (
                    <option key={serviceOption} value={serviceOption}>
                      {serviceOption}
                    </option>
                  ))}
                </select>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <input
                  type="number"
                  placeholder="Pax"
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  style={{ width: "100%" }}
                />
              </div>
              <button type="submit" style={{ width: "100%" }}>
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
