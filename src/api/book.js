import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      name,
      phone,
      email,
      vehicleType,
      package: selectedPackage,
      date,
      time,
      message,
    } = req.body;

    if (!name || !phone || !email || !selectedPackage || !date || !time) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const html = `
      <h2>New Car Wash Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Vehicle Type:</strong> ${vehicleType || "Not provided"}</p>
      <p><strong>Package:</strong> ${selectedPackage}</p>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Time:</strong> ${time}</p>
      <p><strong>Message:</strong> ${message || "No message"}</p>
    `;

    const { error } = await resend.emails.send({
      from: "SplashPro Wash <onboarding@resend.dev>",
      to: ["lavondamaxwell1@gmail.com"],
      subject: "New Car Wash Booking Request",
      html,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ message: "Email failed to send" });
    }

    return res.status(200).json({ message: "Booking request sent" });
  } catch (error) {
    console.error("Booking API error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
