import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, reason, message, honeypot } = body;

    // Spam protection: honeypot field must be empty
    if (honeypot) {
      return NextResponse.json(
        { success: false, message: "Spam detected." },
        { status: 400 }
      );
    }

    // Server-side field validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const validReasons = ["Suggestion", "Complaint", "Bug Report", "Other"];
    if (!reason || !validReasons.includes(reason)) {
      return NextResponse.json(
        { success: false, message: "Please select a valid reason." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, message: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey || resendApiKey.trim() === "" || resendApiKey.startsWith("YOUR_")) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Resend is not configured. Please set RESEND_API_KEY in your environment variables.",
        },
        { status: 503 }
      );
    }

    const recipientEmail = (
      process.env.CONTACT_RECIPIENT_EMAIL ||
      process.env.NEXT_PUBLIC_CONTACT_EMAIL ||
      ""
    ).trim();
    if (!recipientEmail) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Contact email is not configured. Please set CONTACT_RECIPIENT_EMAIL in your environment variables.",
        },
        { status: 503 }
      );
    }

    // Call Resend REST API
    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey.trim()}`,
      },
      body: JSON.stringify({
        from: "DailyWorld Contact <onboarding@resend.dev>",
        to: recipientEmail,
        reply_to: email.trim(),
        subject: `[DailyWorld Contact] ${reason}: from ${name.trim()}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name.trim()}</p>
          <p><strong>Email:</strong> ${email.trim()}</p>
          <p><strong>Reason:</strong> ${reason}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.trim()}</p>
        `,
      }),
    });

    const resendData = await resendResponse.json();

    if (!resendResponse.ok) {
      console.error("Resend API error:", resendData);
      return NextResponse.json(
        {
          success: false,
          message: resendData.message || "Failed to send email via Resend.",
        },
        { status: resendResponse.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully!",
      id: resendData.id,
    });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
