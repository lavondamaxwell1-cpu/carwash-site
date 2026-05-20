import { useState } from "react";

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicleType: "",
    package: "",
    date: "",
    time: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(false);
    setSending(true);

    try {
      const response = await fetch("/api/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        phone: "",
        email: "",
        vehicleType: "",
        package: "",
        date: "",
        time: "",
        message: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      alert("Sorry, your booking request could not be sent. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="booking" className="px-6 py-20">
      <div className="mx-auto max-w-3xl rounded-3xl bg-white p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold">Book Your Wash</h2>

          <p className="mt-2 text-slate-600">
            Send a request and we’ll contact you to confirm.
          </p>

          {submitted && (
            <div className="mt-4 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-green-700">
              Appointment request sent! We’ll contact you soon to confirm.
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            required
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="SUV">SUV</option>
            <option value="Truck">Truck</option>
            <option value="Van">Van</option>
          </select>

          <select
            name="package"
            value={formData.package}
            onChange={handleChange}
            required
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          >
            <option value="">Select Package</option>
            <option value="Basic Wash">Basic Wash</option>
            <option value="Deluxe Wash">Deluxe Wash</option>
            <option value="Premium Detail">Premium Detail</option>
            <option value="Basic Monthly">Basic Monthly</option>
            <option value="Deluxe Monthly">Deluxe Monthly</option>
            <option value="Premium Monthly">Premium Monthly</option>
          </select>

          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your vehicle..."
            rows="4"
            className="rounded-xl border px-4 py-3 outline-none focus:border-blue-600"
          />

          <button
            type="submit"
            disabled={sending}
            className="rounded-xl bg-blue-700 px-6 py-3 font-bold text-white hover:bg-blue-800 disabled:cursor-not-allowed disabled:bg-blue-400"
          >
            {sending ? "Sending..." : "Request Appointment"}
          </button>
        </form>
      </div>
    </section>
  );
}
