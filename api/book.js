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
      website,
    } = req.body;
    if (website) {
      return res.status(200).json({ message: "Booking request sent" });
    }
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

    // Email to the business
    const businessEmail = await resend.emails.send({
      from: "SplashPro Wash <onboarding@resend.dev>",
      to: ["lavondamaxwell1@gmail.com"],
      subject: "New Car Wash Booking Request",
      html: `
    <h2>New Car Wash Booking Request</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Vehicle Type:</strong> ${vehicleType || "Not provided"}</p>
    <p><strong>Package:</strong> ${selectedPackage}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>
    <p><strong>Message:</strong> ${message || "No message"}</p>
  `,
    });

    if (businessEmail.error) {
      console.error("Business email error:", businessEmail.error);
      return res.status(500).json({ message: "Email failed to send" });
    }

    // Confirmation email to the customer
    const customerEmail = await resend.emails.send({
      from: "SplashPro Wash <onboarding@resend.dev>",
      to: [email],
      subject: "We received your car wash request",
      html: `
    <h2>Thanks for booking with SplashPro Wash!</h2>

    <p>Hi ${name},</p>

    <p>
      We received your appointment request and will contact you soon to confirm
      your booking.
    </p>

    <h3>Your Request Details</h3>
    <p><strong>Vehicle Type:</strong> ${vehicleType || "Not provided"}</p>
    <p><strong>Package:</strong> ${selectedPackage}</p>
    <p><strong>Date:</strong> ${date}</p>
    <p><strong>Time:</strong> ${time}</p>

    <p>
      If you need to make changes, please reply to this email or call us.
    </p>

    <p>— SplashPro Wash</p>
  `,
    });

    if (customerEmail.error) {
      console.error("Customer email error:", customerEmail.error);
    }
   

    return res.status(200).json({ message: "Booking request sent" });
  } catch (error) {
    console.error("Booking API error:", error);
    return res.status(500).json({ message: "Server error" });
  }
}
