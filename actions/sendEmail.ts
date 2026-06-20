"use server";

import React from "react";
import { Resend } from "resend";
import { render } from "@react-email/components";
import { validateString } from "@/lib/utils";
import { getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const html = await render(
      React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    );

    data = await resend.emails.send({
      from: "Contact Form <noreply@notifications.krazius-solutions.com>",
      to: "kevin@krazius-solutions.com",
      subject: "Message from Contact Form",
      replyTo: senderEmail as string,
      html,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
